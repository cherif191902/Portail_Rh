import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorage } from '../core/services/tokenservice.service';

export interface Chef {
  id: number;
  nom: string;
  prenom: string;
  matriculeP: string;
  email?: string;
  isAffectedAsChefA?: boolean;
  isAffectedAsChefB?: boolean;
  isAvailable?: boolean;
}

export interface AffectationComplete {
  id: number;
  serviceId: number;
  nomService: string;
  libService: string;
  chefA: Chef | null;
  chefB: Chef | null;
  rh: {
    id: number;
    nom: string;
    prenom: string;
    matriculeP: string;
  } | null;
}

export interface AffectationRequest {
  serviceId: number;
  chefAId?: number;
  chefBId?: number;
  rhId?: number;
}

export interface ApiResponse<T> {
  success?: boolean;
  message?: string;
  error?: string;
  data?: T;
}

@Injectable({
  providedIn: 'root'
})
export class AffectationTableService {
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
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }

  /**
   * Récupère tous les services avec leurs affectations
   */
  getServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/services`, {
      headers: this.getHttpHeaders()
    });
  }

  /**
   * Récupère toutes les affectations complètes
   */
  getAllAffectations(): Observable<AffectationComplete[]> {
    return this.http.get<AffectationComplete[]>(`${this.baseUrl}/affectations`, {
      headers: this.getHttpHeaders()
    });
  }

  /**
   * Récupère tous les chefs disponibles
   */
  getAllChefs(): Observable<Chef[]> {
    return this.http.get<Chef[]>(`${this.baseUrl}/users/chefs`, {
      headers: this.getHttpHeaders()
    });
  }

  /**
   * Récupère les chefs disponibles (non affectés)
   */
  getAvailableChefs(excludeServiceId?: number): Observable<Chef[]> {
    const params = excludeServiceId ? `?excludeServiceId=${excludeServiceId}` : '';
    return this.http.get<Chef[]>(`${this.baseUrl}/users/chefs/available${params}`, {
      headers: this.getHttpHeaders()
    });
  }

  /**
   * Crée ou met à jour une affectation
   */
  saveAffectation(affectation: AffectationRequest): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.baseUrl}/affectations`, affectation, {
      headers: this.getHttpHeaders()
    });
  }

  /**
   * Met à jour une affectation existante
   */
  updateAffectation(serviceId: number, affectation: AffectationRequest): Observable<ApiResponse<any>> {
    return this.http.put<ApiResponse<any>>(`${this.baseUrl}/affectations/${serviceId}`, affectation, {
      headers: this.getHttpHeaders()
    });
  }

  /**
   * Supprime une affectation (remet à null les chefs)
   */
  deleteAffectation(serviceId: number): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.baseUrl}/affectations/${serviceId}`, {
      headers: this.getHttpHeaders()
    });
  }

  /**
   * Récupère les informations de l'utilisateur connecté
   */
  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/auth/me`, {
      headers: this.getHttpHeaders()
    });
  }
}