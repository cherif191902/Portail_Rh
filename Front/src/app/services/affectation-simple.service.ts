import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TokenStorage } from '../core/services/tokenservice.service';

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

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorage
  ) {}

  // Méthode pour obtenir les headers d'authentification
  private getAuthHeaders(): HttpHeaders {
    // Utilisation du TokenStorage en premier
    let token = this.tokenStorage.getToken();
    
    // Fallback vers les autres emplacements si pas trouvé
    if (!token) {
      token = 
        sessionStorage.getItem('auth-token') ||
        sessionStorage.getItem('token') || 
        sessionStorage.getItem('authToken') ||
        localStorage.getItem('accessToken') ||
        localStorage.getItem('token') ||
        localStorage.getItem('authToken');
    }
    
    console.log('🔑 Token trouvé:', token ? `Présent (${token.length} chars)` : 'ABSENT');
    
    if (token && !token.startsWith('Bearer ')) {
      token = 'Bearer ' + token;
    }

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    } as any;

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

  // Récupérer les chefs disponibles (avec rôles CHEF_A ou CHEF_B)
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

  // Récupérer les personnels d'un service spécifique (pour l'affectation des chefs)
  getPersonnelsParService(serviceId: number): Observable<Chef[]> {
    const headers = this.getAuthHeaders();
    console.log('📡 Récupération des personnels du service:', serviceId);
    
    return this.http.get<Chef[]>(`${this.apiUrl}/services/${serviceId}/personnels`, { headers })
      .pipe(
        map(personnels => {
          console.log('✅ Personnels du service:', personnels);
          return personnels;
        }),
        catchError(error => {
          console.error('❌ Erreur getPersonnelsParService:', error);
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
   * Supprimer l'affectation d'un chef A ou B (version optimisée)
   */
  supprimerAffectationChef(serviceId: number, typeChef: 'CHEF_A' | 'CHEF_B'): Observable<AffectationResponse> {
    console.log(`🗑️ Suppression ${typeChef} pour service ${serviceId}`);
    
    return this.http.delete<AffectationResponse>(`${this.apiUrl}/affectations/chef/${serviceId}/${typeChef}`, {
      headers: this.getAuthHeaders()
    }).pipe(
      map(response => {
        console.log('✅ Suppression réussie:', response);
        return response;
      }),
      catchError(error => {
        console.error('❌ Erreur suppression:', error);
        throw error;
      })
    );
  }

  /**
   * Version simplifiée pour suppression optimisée
   */
  supprimerChef(serviceId: number, typeChef: string): Observable<any> {
    console.log(`🗑️ Suppression rapide ${typeChef} pour service ${serviceId}`);
    
    return this.http.delete(`${this.apiUrl}/affectations/chef/${serviceId}/${typeChef}`, {
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

  // ===== NOUVELLES MÉTHODES AVEC SERVICE CENTRALISÉ =====

  /**
   * Affecter un chef selon spécifications : remplacement, inversion, affectation simple
   * PUT /api/rh/affectations/chef/{serviceId}/{role}/{userId}
   */
  affecterChefAvecMiseAJour(serviceId: number, role: 'CHEF_A' | 'CHEF_B', userId: number): Observable<AffectationResponse> {
    const headers = this.getAuthHeaders();
    const roleParam = `ROLE_${role}`; // Convertir CHEF_A → ROLE_CHEF_A pour backend
    console.log('📡 Affectation chef avec logique complète:', { serviceId, role: roleParam, userId });
    
    return this.http.put<AffectationResponse>(`${this.apiUrl}/affectations/chef/${serviceId}/${roleParam}/${userId}`, {}, { headers })
      .pipe(
        map(response => {
          console.log('✅ Chef affecté avec mise à jour complète:', response);
          return response;
        }),
        catchError(error => {
          console.error('❌ Erreur affectation chef avec mise à jour:', error);
          throw error;
        })
      );
  }

  /**
   * Supprimer un chef selon spécifications : NULL + ROLE_USER + mise à jour congés
   * DELETE /api/rh/affectations/chef/{serviceId}/{role}
   */
  supprimerChefAvecMiseAJour(serviceId: number, role: 'CHEF_A' | 'CHEF_B'): Observable<AffectationResponse> {
    const headers = this.getAuthHeaders();
    const roleParam = `ROLE_${role}`; // Convertir CHEF_A → ROLE_CHEF_A pour backend
    console.log('📡 Suppression chef avec logique complète:', { serviceId, role: roleParam });
    
    return this.http.delete<AffectationResponse>(`${this.apiUrl}/affectations/chef/${serviceId}/${roleParam}`, { headers })
      .pipe(
        map(response => {
          console.log('✅ Chef supprimé avec nettoyage complet:', response);
          return response;
        }),
        catchError(error => {
          console.error('❌ Erreur suppression chef avec mise à jour:', error);
          throw error;
        })
      );
  }

  /**
   * Vérifier la cohérence globale du système
   * GET /api/rh/affectations/coherence
   */
  verifierCoherenceGlobale(): Observable<AffectationResponse> {
    const headers = this.getAuthHeaders();
    console.log('📡 Vérification cohérence globale du système');
    
    return this.http.get<AffectationResponse>(`${this.apiUrl}/affectations/coherence`, { headers })
      .pipe(
        map(response => {
          console.log('✅ Cohérence globale vérifiée:', response);
          return response;
        }),
        catchError(error => {
          console.error('❌ Erreur vérification cohérence globale:', error);
          throw error;
        })
      );
  }
}
