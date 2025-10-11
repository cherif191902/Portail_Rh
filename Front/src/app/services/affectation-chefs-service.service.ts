import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ServiceEntity {
  idService: number;
  nomService: string;
  libService?: string;
  chefA?: Personnel;
  chefB?: Personnel;
  chef?: Personnel;
}

export interface Personnel {
  id: number;
  nom: string;
  prenom: string;
  matriculeP: string;
  email?: string;
  fullName?: string;
}

export interface AffectationChefsDto {
  chefAId?: number;
  chefBId?: number;
}

export interface AffectationResponse {
  success: boolean;
  message: string;
  service?: ServiceEntity;
}

@Injectable({
  providedIn: 'root'
})
export class AffectationChefsServiceService {

  private readonly API_BASE_URL = environment.apiUrl || 'http://localhost:8089/api';
  private readonly SERVICES_ENDPOINT = '/services';

  constructor(private http: HttpClient) {
    console.log('🔗 AffectationChefsService - URL de base:', this.API_BASE_URL);
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
    
    return { headers };
  }

  /**
   * Récupérer tous les services avec leurs chefs
   */
  getAllServices(): Observable<ServiceEntity[]> {
    const url = `${this.API_BASE_URL}${this.SERVICES_ENDPOINT}`;
    console.log('📋 Récupération des services:', url);
    
    return this.http.get<ServiceEntity[]>(url, this.getAuthHeaders());
  }

  /**
   * Récupérer tous les chefs disponibles
   */
  getChefsDisponibles(): Observable<Personnel[]> {
    const url = `${this.API_BASE_URL}${this.SERVICES_ENDPOINT}/chefs-disponibles`;
    console.log('👥 Récupération des chefs disponibles:', url);
    
    return this.http.get<Personnel[]>(url, this.getAuthHeaders());
  }

  /**
   * Affecter Chef A et Chef B à un service
   */
  affecterChefs(serviceId: number, affectation: AffectationChefsDto): Observable<AffectationResponse> {
    const url = `${this.API_BASE_URL}${this.SERVICES_ENDPOINT}/${serviceId}/affecter-chefs`;
    console.log('🔧 Affectation chefs au service:', serviceId, affectation);
    
    return this.http.put<AffectationResponse>(url, affectation, this.getAuthHeaders());
  }

  /**
   * Valider côté client que Chef A et Chef B sont différents
   */
  validateAffectation(affectation: AffectationChefsDto): { isValid: boolean; message?: string } {
    if (affectation.chefAId && affectation.chefBId && affectation.chefAId === affectation.chefBId) {
      return {
        isValid: false,
        message: 'Chef A et Chef B ne peuvent pas être la même personne'
      };
    }
    return { isValid: true };
  }
}