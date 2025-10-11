import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface CongeRequest {
  id?: number;
  typeConge: string;
  dateDebut: string; // Format ISO date
  dateFin: string;   // Format ISO date
  duree?: number;
  commentaire?: string;
  statut?: 'EN_ATTENTE' | 'APPROUVE' | 'REFUSE' | 'ANNULE';
  dateDemande?: string;
  motifRefus?: string;
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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    });
    
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
   * Récupère l'historique des congés (APPROUVE terminé, REFUSE, ANNULE)
   */
  getHistoriqueConges(): Observable<CongeResponse[]> {
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
}