import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Interfaces
export interface Chef {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  matriculeP?: string;
  dejaAffecte?: boolean;
  serviceActuel?: {
    idService: number;
    nomService: string;
  };
}

export interface Service {
  idService: number;
  nomService: string;
  libService?: string;
  hasChef?: boolean; // Compatibilité
  hasChefA?: boolean;
  hasChefB?: boolean;
  hasAnyChef?: boolean;
  hasFullChefs?: boolean;
}

export interface ChefInfo {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  matriculeP?: string;
}

export interface Affectation {
  serviceId: number;
  nomService: string;
  libService?: string;
  // Nouvelle interface avec Chef A et B
  hasChefA?: boolean;
  hasChefB?: boolean;
  chefA?: ChefInfo;
  chefB?: ChefInfo;
  // Propriétés de compatibilité
  hasChef?: boolean;
  hasAnyChef?: boolean;
  hasFullChefs?: boolean;
}

export interface AffectationRequest {
  chefId: number;
  serviceId: number;
}

export interface AffectationChefRequest {
  chefId: number;
  serviceId: number;
  typeChef: 'CHEF_A' | 'CHEF_B';
}

export interface AffectationResponse {
  success: boolean;
  message: string;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class AffectationSimpleService {
  private apiUrl = 'http://localhost:8089/api/rh';

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir les headers d'authentification
  private getAuthHeaders(): HttpHeaders {
    // Recherche du token dans différents emplacements de stockage
    let token = 
      sessionStorage.getItem('auth-token') ||
      sessionStorage.getItem('token') || 
      sessionStorage.getItem('authToken') ||
      localStorage.getItem('accessToken') ||
      localStorage.getItem('token') ||
      localStorage.getItem('authToken');
    
    if (token && !token.startsWith('Bearer ')) {
      token = 'Bearer ' + token;
    }

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (token) {
      headers['Authorization'] = token;
    }
    
    return new HttpHeaders(headers);
  }

  // ===== CRUD OPERATIONS =====

  // Récupérer toutes les affectations
  getAllAffectations(): Observable<Affectation[]> {
    const headers = this.getAuthHeaders();
    console.log('📡 Récupération des affectations...');
    
    return this.http.get<Affectation[]>(`${this.apiUrl}/affectations`, { headers })
      .pipe(
        map(affectations => {
          console.log('✅ Affectations reçues:', affectations);
          return affectations;
        }),
        catchError(error => {
          console.error('❌ Erreur getAllAffectations:', error);
          throw error;
        })
      );
  }

  // Récupérer tous les services
  getServices(): Observable<Service[]> {
    const headers = this.getAuthHeaders();
    console.log('📡 Appel API getServices avec headers:', headers);
    
    return this.http.get<Service[]>(`${this.apiUrl}/services`, { headers })
      .pipe(
        map(services => {
          console.log('✅ Services reçus:', services);
          return services;
        }),
        catchError(error => {
          console.error('❌ Erreur getServices:', error);
          throw error;
        })
      );
  }

  // Récupérer les chefs disponibles (avec rôle CHEF_SERVICE)
  getChefsDisponibles(): Observable<Chef[]> {
    const headers = this.getAuthHeaders();
    console.log('📡 Appel API getChefsDisponibles avec headers:', headers);
    
    return this.http.get<Chef[]>(`${this.apiUrl}/chefs-disponibles`, { headers })
      .pipe(
        map(chefs => {
          console.log('✅ Chefs disponibles:', chefs);
          return chefs;
        }),
        catchError(error => {
          console.error('❌ Erreur getChefsDisponibles:', error);
          throw error;
        })
      );
  }

  // Créer une nouvelle affectation
  creerAffectation(affectation: AffectationRequest): Observable<AffectationResponse> {
    const headers = this.getAuthHeaders();
    console.log('📡 Création d\'affectation:', affectation);
    
    return this.http.post<AffectationResponse>(`${this.apiUrl}/affectations`, affectation, { headers })
      .pipe(
        map(response => {
          console.log('✅ Affectation créée:', response);
          return response;
        }),
        catchError(error => {
          console.error('❌ Erreur creerAffectation:', error);
          throw error;
        })
      );
  }

  // Modifier une affectation existante
  modifierAffectation(serviceId: number, nouveauChefId: number): Observable<AffectationResponse> {
    const headers = this.getAuthHeaders();
    const request = { chefId: nouveauChefId };
    console.log('📡 Modification d\'affectation:', { serviceId, nouveauChefId });
    
    return this.http.put<AffectationResponse>(`${this.apiUrl}/affectations/${serviceId}`, request, { headers })
      .pipe(
        map(response => {
          console.log('✅ Affectation modifiée:', response);
          return response;
        }),
        catchError(error => {
          console.error('❌ Erreur modifierAffectation:', error);
          throw error;
        })
      );
  }

  // Supprimer une affectation
  supprimerAffectation(serviceId: number): Observable<AffectationResponse> {
    const headers = this.getAuthHeaders();
    console.log('� Suppression d\'affectation:', serviceId);
    
    return this.http.delete<AffectationResponse>(`${this.apiUrl}/affectations/${serviceId}`, { headers })
      .pipe(
        map(response => {
          console.log('✅ Affectation supprimée:', response);
          return response;
        }),
        catchError(error => {
          console.error('❌ Erreur supprimerAffectation:', error);
          throw error;
        })
      );
  }

  // ===== UTILITY METHODS =====

  // Vérifier si un chef est déjà affecté à un service (Chef A ou Chef B)
  isChefAlreadyAssigned(chefId: number, affectations: Affectation[]): boolean {
    return affectations.some(affectation => 
      (affectation.chefA && affectation.chefA.id === chefId) ||
      (affectation.chefB && affectation.chefB.id === chefId)
    );
  }

  // Obtenir le service d'un chef
  getChefService(chefId: number, affectations: Affectation[]): Affectation | null {
    return affectations.find(affectation => 
      (affectation.chefA && affectation.chefA.id === chefId) ||
      (affectation.chefB && affectation.chefB.id === chefId)
    ) || null;
  }

  // ===== NOUVELLES MÉTHODES CHEF A / CHEF B =====

  /**
   * Affecter un chef A ou B à un service
   */
  affecterChef(request: AffectationChefRequest): Observable<AffectationResponse> {
    return this.http.post<AffectationResponse>(`${this.apiUrl}/affectations/chef`, request, {
      headers: this.getAuthHeaders()
    });
  }

  /**
   * Supprimer l'affectation d'un chef A ou B
   */
  supprimerAffectationChef(serviceId: number, typeChef: 'CHEF_A' | 'CHEF_B'): Observable<AffectationResponse> {
    return this.http.delete<AffectationResponse>(`${this.apiUrl}/affectations/chef/${serviceId}/${typeChef}`, {
      headers: this.getAuthHeaders()
    });
  }

  // Méthode de diagnostic pour tester les endpoints
  testEndpoints(): Observable<any> {
    const headers = this.getAuthHeaders();
    console.log('🔍 Test des endpoints API...');
    
    return forkJoin({
      services: this.http.get(`${this.apiUrl}/services`, { headers }).pipe(
        catchError(error => {
          console.error('❌ Erreur test services:', error);
          return [{ error: error.status + ' - ' + error.message }];
        })
      ),
      chefs: this.http.get(`${this.apiUrl}/chefs-disponibles`, { headers }).pipe(
        catchError(error => {
          console.error('❌ Erreur test chefs:', error);
          return [{ error: error.status + ' - ' + error.message }];
        })
      ),
      affectations: this.http.get(`${this.apiUrl}/affectations`, { headers }).pipe(
        catchError(error => {
          console.error('❌ Erreur test affectations:', error);
          return [{ error: error.status + ' - ' + error.message }];
        })
      )
    }).pipe(
      map(results => {
        console.log('✅ Résultats des tests:', results);
        return results;
      })
    );
  }
}
