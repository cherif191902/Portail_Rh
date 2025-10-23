import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface CongeRequest {
  id?: number;
  typeConge: string;
  dateDebut: string; // Format ISO date
  dateFin: string;   // Format ISO date
  duree?: number;
  commentaire?: string;
  statut?: 'EN_ATTENTE_CHEF_A' | 'EN_ATTENTE_CHEF_B' | 'EN_ATTENTE_RH' | 'APPROUVE' | 
           'REFUSE_PAR_CHEF_A' | 'REFUSE_PAR_CHEF_B' | 'REFUSE_PAR_RH' | 'EN_ATTENTE' | 'REFUSE' | 'ANNULE';
  dateDemande?: string;
  motifRefus?: string;
}

export interface ValidationCongeRequest {
  action: 'VALIDER' | 'REFUSER';
  commentaire?: string;
}

export interface CongeResponse {
  id: number;
  typeConge: string;
  dateDebut: string;
  dateFin: string;
  duree: number;
  statut: string;
  dateDemande: string;
  commentaire?: string;
  motifRefus?: string;
  personnel?: any;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class CongeApiService {
  
  private readonly API_BASE_URL = environment.apiUrl || 'http://localhost:8089/api';

  private readonly CONGE_ENDPOINT = '/conge';
  private readonly VALIDATION_ENDPOINT = '/conge/validation';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    console.log('🔗 CongeApiService - URL de base configurée:', this.API_BASE_URL);
    console.log('🌐 Environment apiUrl:', environment.apiUrl);
  }

  /**
   * Récupère les headers avec le token d'authentification
   */
  private getAuthHeaders(): { headers: HttpHeaders } {
    const token = sessionStorage.getItem('auth-token');
    console.log('🔑 Token récupéré:', token ? 'Token présent (longueur: ' + token.length + ')' : 'Aucun token');
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    });
    
    console.log('📋 Headers générés:', headers.keys());
    return { headers };
  }

  /**
   * Récupère le matricule de l'utilisateur connecté depuis le localStorage ou le token
   */
  private getCurrentUserMatricule(): string {
    // Récupérer depuis localStorage ou décoder le JWT token
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return user.matricule || user.username || 'CHEBEN001'; // fallback pour les tests
  }

  /**
   * Gère les erreurs HTTP
   */
  private handleError = (error: any): Observable<never> => {
    console.error('Erreur API Congé:', error);
    let errorMessage = 'Une erreur est survenue';
    
    // Éviter de traiter les statuts HTTP 200 comme des erreurs
    if (error.status === 200 || error.statusText === 'OK') {
      console.warn('Réponse HTTP 200 traitée comme erreur, probablement un problème de format de réponse');
      errorMessage = 'Réponse inattendue du serveur';
    } else if (error.error && error.error.message) {
      errorMessage = error.error.message;
    } else if (error.message && error.message !== 'OK') {
      errorMessage = error.message;
    } else if (typeof error.error === 'string' && error.error !== 'OK') {
      errorMessage = error.error;
    } else if (error.status) {
      errorMessage = `Erreur ${error.status}: ${error.statusText || 'Erreur serveur'}`;
    }
    
    return throwError(() => ({
      message: errorMessage,
      originalError: error
    }));
  }

  /**
   * Soumet une nouvelle demande de congé
   */
  creerDemandeConge(demandeData: CongeRequest): Observable<CongeResponse> {
    console.log('📤 Envoi d\'une nouvelle demande de congé:', demandeData);
    
    const requestBody = {
      typeConge: demandeData.typeConge,
      dateDebut: demandeData.dateDebut, // Utiliser les noms attendus par le backend
      dateFin: demandeData.dateFin,
      duree: demandeData.duree,
      commentaire: demandeData.commentaire || ''
    };

    console.log('📋 Corps de la requête pour le backend:', requestBody);

    return this.http.post<CongeResponse>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/submit`,
      requestBody,
      this.getAuthHeaders()
    );
  }

  /**
   * Vérifie s'il y a des conflits de dates avec les demandes existantes
   */
  verifierConflitsDates(dateDebut: string, dateFin: string): Observable<CongeResponse[]> {
    return this.getMesDemandesConges().pipe(
      map(demandes => {
        return demandes.filter(demande => {
          // Ignore les demandes refusées ou annulées
          if (demande.statut && (
            demande.statut.includes('REFUSE') || 
            demande.statut === 'ANNULE' ||
            demande.statut === 'REFUSE_PAR_CHEF_A' ||
            demande.statut === 'REFUSE_PAR_CHEF_B' ||
            demande.statut === 'REFUSE_PAR_RH'
          )) {
            return false;
          }
          
          // Vérifier le chevauchement de dates
          const debutNouvelle = new Date(dateDebut);
          const finNouvelle = new Date(dateFin);
          const debutExistante = new Date(demande.dateDebut);
          const finExistante = new Date(demande.dateFin);
          
          // Pas de chevauchement si : fin_nouvelle < debut_existante OU debut_nouvelle > fin_existante
          const pasDeChev = finNouvelle < debutExistante || debutNouvelle > finExistante;
          return !pasDeChev; // Retourne true s'il y a chevauchement
        });
      })
    );
  }

  /**
   * Récupère toutes les demandes de congé de l'utilisateur connecté
   */
  getMesDemandesConges(): Observable<CongeResponse[]> {
    const matricule = this.getCurrentUserMatricule();
    
    return this.http.get<CongeResponse[]>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/my`,
      this.getAuthHeaders()
    );
  }

  /**
   * Récupère une demande spécifique par son ID
   */
  getDemandeById(demandeId: number): Observable<ApiResponse<CongeResponse>> {
    return this.http.get<ApiResponse<CongeResponse>>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/demande/${demandeId}`,
      this.getAuthHeaders()
    );
  }

  /**
   * Modifie une demande de congé en attente
   */
  modifierDemandeConge(demandeId: number, demandeData: CongeRequest): Observable<CongeResponse> {
    console.log('🔄 Modification de la demande de congé ID:', demandeId, demandeData);
    
    const requestBody = {
      typeConge: demandeData.typeConge,
      dateDebut: demandeData.dateDebut,
      dateFin: demandeData.dateFin,
      duree: demandeData.duree,
      commentaire: demandeData.commentaire || ''
    };

    return this.http.put<CongeResponse>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/update/${demandeId}`,
      requestBody,
      this.getAuthHeaders()
    );
  }

  /**
   * Annule une demande en attente
   */
  annulerDemande(demandeId: number): Observable<any> {
    console.log('🗑️ Annulation de la demande de congé ID:', demandeId);
    
    return this.http.delete<any>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/cancel/${demandeId}`,
      this.getAuthHeaders()
    ).pipe(
      map(response => {
        console.log('✅ Réponse de suppression réussie:', response);
        return response;
      }),
      catchError(error => {
        console.error('🚨 Erreur dans annulerDemande service:', error);
        console.error('🚨 Status de l\'erreur:', error.status);
        console.error('🚨 Message de l\'erreur:', error.error);
        console.error('🚨 Détail complet de l\'erreur:', JSON.stringify(error, null, 2));
        return throwError(() => error);
      })
    );
  }

  /**
   * Récupère les types de congés disponibles
   */
  getTypesConges(): Observable<ApiResponse<any[]>> {
    return this.http.get<any[]>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/types`,
      this.getAuthHeaders()
    ).pipe(
      map((backendTypes: any[]) => {
        // Mapper les données du backend vers le format attendu par le frontend
        const mappedTypes = backendTypes.map(type => ({
          idType: type.id,
          nomTypeconge: type.nom,
          maxAllowedDays: type.dureeMax
        }));
        
        return {
          success: true,
          message: 'Types de congés récupérés avec succès',
          data: mappedTypes
        } as ApiResponse<any[]>;
      }),
      catchError(error => {
        console.error('Erreur lors de la récupération des types:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Récupère les demandes de congé en cours (EN_ATTENTE, APPROUVE - en cours)
   */
  getDemandesEnCours(): Observable<CongeResponse[]> {
    return this.getMesDemandesConges().pipe(
      map((demandes: CongeResponse[]) => 
        demandes.filter(demande => 
          demande.statut === 'EN_ATTENTE' || 
          (demande.statut === 'APPROUVE' && this.isCongeEnCours(demande))
        )
      )
    );
  }

  /**
   * Récupère l'historique des congés localement (APPROUVE terminé, REFUSE, ANNULE)
   * Note: Cette méthode sera remplacée par getHistoriqueConges() qui appelle le backend
   */
  getHistoriqueCongesLocal(): Observable<CongeResponse[]> {
    return this.getMesDemandesConges().pipe(
      map((demandes: CongeResponse[]) => 
        demandes.filter(demande => 
          demande.statut === 'REFUSE' || 
          demande.statut === 'ANNULE' ||
          (demande.statut === 'APPROUVE' && !this.isCongeEnCours(demande))
        ).sort((a, b) => new Date(b.dateDemande).getTime() - new Date(a.dateDemande).getTime())
      )
    );
  }

  /**
   * Vérifie si un congé approuvé est encore en cours
   */
  private isCongeEnCours(demande: CongeResponse): boolean {
    const aujourdhui = new Date();
    aujourdhui.setHours(0, 0, 0, 0); // Normaliser à minuit pour comparaison de dates
    const dateFin = new Date(demande.dateFin);
    dateFin.setHours(0, 0, 0, 0);
    return dateFin >= aujourdhui;
  }

  /**
   * Récupère les statistiques de congé de l'utilisateur
   */
  getStatistiquesConges(): Observable<ApiResponse<any>> {
    const matricule = this.getCurrentUserMatricule();
    
    return this.http.get<ApiResponse<any>>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/statistiques/${matricule}`,
      this.httpOptions
    );
  }

  /**
   * Récupère les notifications de congé
   */
  getNotificationsConges(): Observable<ApiResponse<any[]>> {
    const matricule = this.getCurrentUserMatricule();
    
    return this.http.get<ApiResponse<any[]>>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/notifications/${matricule}`,
      this.httpOptions
    );
  }



  /**
   * Récupère le solde de congés de l'utilisateur
   */
  getSoldeConges(): Observable<ApiResponse<any>> {
    const matricule = this.getCurrentUserMatricule();
    
    return this.http.get<ApiResponse<any>>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/solde/${matricule}`,
      this.httpOptions
    );
  }

  // ========== NOUVELLES MÉTHODES POUR LE WORKFLOW DE VALIDATION ==========

  /**
   * Valide une demande de congé selon le rôle de l'utilisateur connecté
   */
  validerConge(congeId: number, validationData: ValidationCongeRequest): Observable<CongeResponse> {
    return this.http.post<CongeResponse>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/${congeId}/valider`,
      validationData,
      this.httpOptions
    ).pipe(
      map(response => {
        console.log('✅ Congé validé avec succès:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Refuse une demande de congé selon le rôle de l'utilisateur connecté
   */
  refuserConge(congeId: number, validationData: ValidationCongeRequest): Observable<CongeResponse> {
    return this.http.post<CongeResponse>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/${congeId}/refuser`,
      validationData,
      this.httpOptions
    ).pipe(
      map(response => {
        console.log('❌ Congé refusé avec succès:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Récupère les demandes en attente de validation selon le rôle de l'utilisateur connecté
   */
  getDemandesEnAttente(): Observable<CongeResponse[]> {
    return this.http.get<CongeResponse[]>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/en-attente`,
      this.httpOptions
    ).pipe(
      map(response => {
        console.log('📋 Demandes en attente récupérées:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Récupère l'historique des demandes terminées (approuvées ou refusées)
   */
  getHistoriqueConges(): Observable<CongeResponse[]> {
    return this.http.get<CongeResponse[]>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/historique`,
      this.httpOptions
    ).pipe(
      map(response => {
        console.log('📚 Historique des congés récupéré:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Récupère spécifiquement les demandes en attente de validation RH
   * Endpoint spécifique : /conge/rh/pending
   */
  getDemandesEnAttenteRh(): Observable<CongeResponse[]> {
    return this.http.get<CongeResponse[]>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/rh/pending`,
      this.httpOptions
    ).pipe(
      map(response => {
        console.log('🏢 Demandes RH en attente récupérées:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Détermine si l'utilisateur peut valider une demande selon son rôle et le statut de la demande
   */
  peutValider(conge: CongeResponse): boolean {
    const userRoles = this.getCurrentUserRoles();
    
    switch (conge.statut) {
      case 'En attente de validation Chef A':
        return userRoles.includes('ROLE_CHEF_A') || userRoles.includes('ROLE_ADMIN');
      case 'En attente de validation Chef B':
        return userRoles.includes('ROLE_CHEF_B') || userRoles.includes('ROLE_ADMIN');
      case 'En attente de validation RH':
        return userRoles.includes('ROLE_RH') || userRoles.includes('ROLE_ADMIN');
      default:
        return false;
    }
  }

  /**
   * Récupère les rôles de l'utilisateur connecté
   */
  private getCurrentUserRoles(): string[] {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.roles || [];
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des rôles:', error);
    }
    return [];
  }

  /**
   * Détermine la couleur du badge selon le statut
   */
  getStatutBadgeClass(statut: string): string {
    switch (statut) {
      case 'Approuvé':
        return 'badge bg-success';
      case 'En attente de validation Chef A':
      case 'En attente de validation Chef B':
      case 'En attente de validation RH':
      case 'EN_ATTENTE':
        return 'badge bg-warning';
      case 'Refusé par Chef A':
      case 'Refusé par Chef B':
      case 'Refusé par RH':
      case 'REFUSE':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }

  /**
   * Détermine l'icône selon le statut
   */
  getStatutIcon(statut: string): string {
    switch (statut) {
      case 'Approuvé':
        return 'mdi mdi-check-circle';
      case 'En attente de validation Chef A':
      case 'En attente de validation Chef B':
      case 'En attente de validation RH':
      case 'EN_ATTENTE':
        return 'mdi mdi-clock-outline';
      case 'Refusé par Chef A':
      case 'Refusé par Chef B':
      case 'Refusé par RH':
      case 'REFUSE':
        return 'mdi mdi-close-circle';
      default:
        return 'mdi mdi-help-circle';
    }
  }

  // ========== NOUVELLES MÉTHODES POUR LE WORKFLOW HIÉRARCHIQUE ==========

  /**
   * Récupère les demandes en attente selon le rôle de l'utilisateur connecté
   */
  getMyPendingDemandes(): Observable<CongeResponse[]> {
    return this.http.get<CongeResponse[]>(
      `${this.API_BASE_URL}${this.VALIDATION_ENDPOINT}/my-pending`,
      this.getAuthHeaders()
    ).pipe(
      map(response => {
        console.log('📋 Mes demandes en attente récupérées:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Récupère l'historique des validations de l'utilisateur connecté
   */
  getMyValidationHistory(): Observable<CongeResponse[]> {
    return this.http.get<CongeResponse[]>(
      `${this.API_BASE_URL}${this.VALIDATION_ENDPOINT}/my-history`,
      this.getAuthHeaders()
    ).pipe(
      map(response => {
        console.log('📜 Historique des validations récupéré:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Récupère les demandes en attente pour Chef A
   */
  getDemandesChefA(): Observable<CongeResponse[]> {
    return this.http.get<CongeResponse[]>(
      `${this.API_BASE_URL}${this.VALIDATION_ENDPOINT}/chef-a/pending`,
      this.getAuthHeaders()
    ).pipe(
      map(response => {
        console.log('👔 Demandes Chef A récupérées:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Récupère les demandes en attente pour Chef B
   */
  getDemandesChefB(): Observable<CongeResponse[]> {
    return this.http.get<CongeResponse[]>(
      `${this.API_BASE_URL}${this.VALIDATION_ENDPOINT}/chef-b/pending`,
      this.getAuthHeaders()
    ).pipe(
      map(response => {
        console.log('👔 Demandes Chef B récupérées:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Récupère les demandes en attente pour RH (nouveau endpoint)
   */
  getDemandesRhHierarchique(): Observable<CongeResponse[]> {
    return this.http.get<CongeResponse[]>(
      `${this.API_BASE_URL}${this.VALIDATION_ENDPOINT}/rh/pending`,
      this.getAuthHeaders()
    ).pipe(
      map(response => {
        console.log('🏢 Demandes RH hiérarchiques récupérées:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Validation Chef A
   */
  validerChefA(congeId: number, validationData: ValidationCongeRequest): Observable<CongeResponse> {
    return this.http.post<CongeResponse>(
      `${this.API_BASE_URL}${this.VALIDATION_ENDPOINT}/${congeId}/chef-a`,
      validationData,
      this.getAuthHeaders()
    ).pipe(
      map(response => {
        console.log('✅ Validation Chef A réussie:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Validation Chef B
   */
  validerChefB(congeId: number, validationData: ValidationCongeRequest): Observable<CongeResponse> {
    return this.http.post<CongeResponse>(
      `${this.API_BASE_URL}${this.VALIDATION_ENDPOINT}/${congeId}/chef-b`,
      validationData,
      this.getAuthHeaders()
    ).pipe(
      map(response => {
        console.log('✅ Validation Chef B réussie:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Validation RH (nouveau endpoint hiérarchique)
   */
  validerRhHierarchique(congeId: number, validationData: ValidationCongeRequest): Observable<CongeResponse> {
    return this.http.post<CongeResponse>(
      `${this.API_BASE_URL}${this.VALIDATION_ENDPOINT}/${congeId}/rh`,
      validationData,
      this.getAuthHeaders()
    ).pipe(
      map(response => {
        console.log('✅ Validation RH hiérarchique réussie:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Endpoint universel de validation/refus selon le rôle
   */
  validerCongeUniversel(congeId: number, validationData: ValidationCongeRequest): Observable<CongeResponse> {
    return this.http.post<CongeResponse>(
      `${this.API_BASE_URL}${this.VALIDATION_ENDPOINT}/${congeId}/valider`,
      validationData,
      this.getAuthHeaders()
    ).pipe(
      map(response => {
        console.log('✅ Validation universelle réussie:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }
}