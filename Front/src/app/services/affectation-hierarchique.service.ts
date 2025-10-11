import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AffectationHierarchique {
  employeId?: number;
  chefAId?: number;
  chefBId?: number;
  rhResponsableId?: number;
}

export interface Personnel {
  id: number;
  nom: string;
  prenom: string;
  matricule: string;
  email?: string;
  poste?: string;
  fullName?: string;
  chefA?: Personnel;
  chefB?: Personnel;
  rhResponsable?: Personnel;
}

export interface AffectationResponse {
  success: boolean;
  message: string;
  employe?: any;
}

@Injectable({
  providedIn: 'root'
})
export class AffectationHierarchiqueService {

  private readonly API_BASE_URL = environment.apiUrl || 'http://localhost:8089/api';
  private readonly AFFECTATION_ENDPOINT = '/affectations';

  constructor(private http: HttpClient) {
    console.log('🔗 AffectationHierarchiqueService - URL de base:', this.API_BASE_URL);
  }

  /**
   * Récupère les headers avec le token d'authentification
   */
  private getAuthHeaders(): { headers: HttpHeaders } {
    const token = sessionStorage.getItem('auth-token') || localStorage.getItem('accessToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    });
    
    console.log('🔐 Headers d\'authentification AffectationService:', { 
      hasToken: !!token, 
      tokenLength: token?.length 
    });
    
    return { headers };
  }

  /**
   * Affecter la hiérarchie à un employé
   */
  affecterHierarchie(employeId: number, affectation: AffectationHierarchique): Observable<AffectationResponse> {
    console.log('🔄 Affectation hiérarchique pour employé ID:', employeId, affectation);
    
    return this.http.put<AffectationResponse>(
      `${this.API_BASE_URL}${this.AFFECTATION_ENDPOINT}/employes/${employeId}/hierarchie`,
      affectation,
      this.getAuthHeaders()
    );
  }

  /**
   * Récupérer l'affectation actuelle d'un employé
   */
  getAffectationActuelle(employeId: number): Observable<AffectationHierarchique> {
    console.log('📋 Récupération affectation actuelle pour employé ID:', employeId);
    
    return this.http.get<AffectationHierarchique>(
      `${this.API_BASE_URL}${this.AFFECTATION_ENDPOINT}/employes/${employeId}/hierarchie`,
      this.getAuthHeaders()
    );
  }

  /**
   * Récupérer tous les employés
   */
  getAllEmployes(): Observable<Personnel[]> {
    console.log('📋 Récupération de tous les employés');
    
    return this.http.get<Personnel[]>(
      `${this.API_BASE_URL}${this.AFFECTATION_ENDPOINT}/employes`,
      this.getAuthHeaders()
    );
  }

  /**
   * Récupérer les Chefs A disponibles
   */
  getChefsA(): Observable<Personnel[]> {
    console.log('📋 Récupération des Chefs A');
    
    return this.http.get<Personnel[]>(
      `${this.API_BASE_URL}${this.AFFECTATION_ENDPOINT}/chefs-a`,
      this.getAuthHeaders()
    );
  }

  /**
   * Récupérer les Chefs B disponibles
   */
  getChefsB(): Observable<Personnel[]> {
    console.log('📋 Récupération des Chefs B');
    
    return this.http.get<Personnel[]>(
      `${this.API_BASE_URL}${this.AFFECTATION_ENDPOINT}/chefs-b`,
      this.getAuthHeaders()
    );
  }

  /**
   * Récupérer le personnel RH disponible
   */
  getPersonnelRH(): Observable<Personnel[]> {
    console.log('📋 Récupération du personnel RH');
    
    return this.http.get<Personnel[]>(
      `${this.API_BASE_URL}${this.AFFECTATION_ENDPOINT}/rh`,
      this.getAuthHeaders()
    );
  }

  /**
   * Tester la connectivité avec l'API d'affectation
   */
  testConnectivite(): Observable<any> {
    console.log('🧪 Test de connectivité API Affectation');
    
    return this.http.get<any>(
      `${this.API_BASE_URL}${this.AFFECTATION_ENDPOINT}/test`,
      this.getAuthHeaders()
    );
  }
}