import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    const matricule = this.getCurrentUserMatricule();
    
    const requestBody = {
      typeConge: demandeData.typeConge,
      dateDeb: demandeData.dateDebut,
      dateFin: demandeData.dateFin,
      nbJours: demandeData.duree,
      motif: demandeData.commentaire || '',
      commentaire: demandeData.commentaire || ''
    };

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
   * Annule une demande en attente
   */
  annulerDemande(demandeId: number): Observable<any> {
    const matricule = this.getCurrentUserMatricule();
    
    return this.http.delete<any>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/cancel/${demandeId}`,
      this.getAuthHeaders()
    );
  }

  /**
   * Récupère les types de congés disponibles
   */
  getTypesConges(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/types`,
      this.getAuthHeaders()
    );
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
   * Upload d'un fichier justificatif
   */
  uploadJustificatif(file: File, demandeId: number): Observable<ApiResponse<string>> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('demandeId', demandeId.toString());
    
    // Ne pas définir Content-Type pour les FormData (laisse le navigateur le faire)
    const uploadOptions = {
      headers: new HttpHeaders({
        // 'Content-Type' sera automatiquement défini par le navigateur
      })
    };

    return this.http.post<ApiResponse<string>>(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/upload-justificatif`,
      formData,
      uploadOptions
    );
  }

  /**
   * Télécharge un fichier justificatif
   */
  downloadJustificatif(demandeId: number): Observable<Blob> {
    return this.http.get(
      `${this.API_BASE_URL}${this.CONGE_ENDPOINT}/download-justificatif/${demandeId}`,
      { 
        responseType: 'blob',
        headers: new HttpHeaders({
          'Accept': 'application/octet-stream'
        })
      }
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