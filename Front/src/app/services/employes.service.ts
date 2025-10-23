import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, combineLatest } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { TokenStorage } from '../core/services/tokenservice.service';

// Interfaces pour les données complètes
export interface EmployeComplet {
  id: number;
  nom: string;
  prenom: string;
  matriculeP: string;
  email: string;
  department?: string;
  numTel?: number;
  poste?: string;
  niveau?: number;
  service?: ServiceComplet;
  roles: string[];
}

export interface ServiceComplet {
  idService: number;
  nomService: string;
  libService: string;
  chefA?: PersonnelBase;
  chefB?: PersonnelBase;
  rhResponsable?: PersonnelBase;
}

export interface PersonnelBase {
  id: number;
  nom: string;
  prenom: string;
  matriculeP: string;
}

export interface Service {
  idService: number;
  nomService: string;
  libService: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  
  private baseUrl = 'http://localhost:8089/api';

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorage
  ) { }

  /**
   * Headers avec token d'authentification
   */
  private getHttpHeaders(): HttpHeaders {
    const token = this.tokenStorage.getToken();
    
    console.log('🔑 Token pour API employes:', token ? `Présent (${token.length} chars)` : 'ABSENT');
    
    if (!token) {
      console.error('❌ Aucun token trouvé');
      throw new Error('Utilisateur non authentifié. Veuillez vous reconnecter.');
    }
    
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  /**
   * Récupère tous les employés avec leurs informations complètes (service, chefs, RH)
   */
  getAllEmployesComplet(): Observable<EmployeComplet[]> {
    console.log('🚀 Récupération employés complets...');
    
    const headers = this.getHttpHeaders();
    
    return this.http.get<EmployeComplet[]>(`${this.baseUrl}/employes/complet`, { headers }).pipe(
      tap((data: EmployeComplet[]) => {
        console.log(`✅ ${data.length} employés récupérés`);
      }),
      catchError((error) => {
        console.warn('⚠️ Endpoint /employes/complet échoué, essai hybride...');
        
        // Fallback: méthode hybride
        return combineLatest([
          this.http.get<any[]>(`${this.baseUrl}/rh/personnels`, { headers }),
          this.http.get<any[]>(`${this.baseUrl}/rh/services`, { headers })
        ]).pipe(
          map(([employes, services]) => {
            console.log(`✅ Fallback: ${employes.length} employés, ${services.length} services`);
            
            return employes.map(emp => {
              if (emp.service) {
                const serviceComplet = services.find(s => s.idService === emp.service.idService);
                if (serviceComplet) {
                  emp.service = { ...emp.service, ...serviceComplet };
                }
              }
              return emp;
            });
          }),
          catchError(this.handleError<EmployeComplet[]>('getAllEmployesComplet'))
        );
      })
    );
  }

  /**
   * Récupère tous les services (pour les filtres)
   */
  getAllServices(): Observable<Service[]> {
    console.log('🏢 Récupération services...');
    
    const headers = this.getHttpHeaders();
    
    return this.http.get<Service[]>(`${this.baseUrl}/rh/services`, { headers }).pipe(
      tap((data: Service[]) => {
        console.log(`✅ ${data.length} services récupérés`);
      }),
      catchError(this.handleError<Service[]>('getAllServices'))
    );
  }

  /**
   * Récupère les détails d'un employé spécifique
   */
  getEmployeById(id: number): Observable<EmployeComplet> {
    console.log(`👤 Appel API - Récupération employé ID: ${id}`);
    
    return this.http.get<EmployeComplet>(
      `${this.baseUrl}/users/${id}`, 
      { headers: this.getHttpHeaders() }
    ).pipe(
      tap((data: EmployeComplet) => {
        console.log(`✅ Employé récupéré:`, data);
      }),
      catchError(this.handleError<EmployeComplet>('getEmployeById'))
    );
  }

  /**
   * Vérifie la cohérence globale des données
   */
  verifierCoherenceGlobale(): Observable<any> {
    console.log('🔍 Vérification cohérence globale...');
    
    return this.http.get<any>(
      `${this.baseUrl}/rh/affectations/coherence`, 
      { headers: this.getHttpHeaders() }
    ).pipe(
      tap((data: any) => {
        console.log('✅ Cohérence vérifiée:', data);
      }),
      catchError(this.handleError('verifierCoherenceGlobale'))
    );
  }

  /**
   * Gestion centralisée des erreurs
   */
  private handleError<T>(operation = 'operation') {
    return (error: any): Observable<T> => {
      console.error(`❌ Erreur ${operation}:`, error);

      // Log détaillé pour le debug
      if (error.status) {
        console.error(`📊 Status: ${error.status}`);
        console.error(`📝 Message: ${error.message}`);
        console.error(`🔗 URL: ${error.url}`);
      }

      // Messages d'erreur appropriés selon le contexte
      let errorMessage = 'Une erreur est survenue';
      
      switch (error.status) {
        case 401:
          errorMessage = 'Session expirée. Veuillez vous reconnecter.';
          break;
        case 403:
          errorMessage = 'Accès non autorisé. Permissions insuffisantes.';
          break;
        case 404:
          errorMessage = 'Ressource non trouvée.';
          break;
        case 500:
          errorMessage = 'Erreur serveur. Contactez l\'administrateur.';
          break;
        case 0:
          errorMessage = 'Erreur de connexion. Vérifiez que le serveur est démarré.';
          break;
        default:
          errorMessage = error.error?.message || error.message || errorMessage;
      }

      // Retourner un observable d'erreur avec message formaté
      return throwError(() => ({ 
        ...error, 
        userMessage: errorMessage,
        operation: operation 
      }));
    };
  }

  /**
   * Vérifie si l'utilisateur a les permissions RH
   */
  hasRhPermissions(): boolean {
    const user = this.tokenStorage.getUser();
    if (!user || !user.roles) return false;
    
    return user.roles.some((role: string) => 
      ['ROLE_ADMIN', 'ROLE_RH', 'ADMIN', 'RH'].includes(role)
    );
  }

  /**
   * Obtient les informations de l'utilisateur connecté
   */
  getCurrentUser(): any {
    return this.tokenStorage.getUser();
  }

  /**
   * Test d'authentification avec le backend
   */
  testAuthentication(): Observable<any> {
    console.log('🧪 Test authentification...');
    
    const headers = this.getHttpHeaders();
    
    return this.http.get<any>(`${this.baseUrl}/employes/test-auth`, { headers }).pipe(
      tap((data: any) => {
        console.log('✅ Test auth réussi:', data);
      }),
      catchError(this.handleError<any>('testAuthentication'))
    );
  }
}