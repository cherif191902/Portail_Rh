import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  
  // Base URLs
  public readonly baseUrl = environment.apiUrl.replace('/api', '');
  public readonly apiUrl = environment.apiUrl;
  
  // Specific API endpoints
  public readonly authApi = `${this.apiUrl}/auth`;
  public readonly serviceApi = `${this.baseUrl}/service`;
  public readonly congeApi = `${this.baseUrl}/conge`;
  public readonly pointageApi = `${this.apiUrl}/pointage`;
  public readonly webSocketUrl = `${this.baseUrl}/ws-notif`;

  constructor() { }

  /**
   * Get full URL for a given endpoint
   * @param endpoint - The endpoint path
   * @param useApiPrefix - Whether to use /api prefix (default: false)
   */
  getUrl(endpoint: string, useApiPrefix: boolean = false): string {
    const baseUrl = useApiPrefix ? this.apiUrl : this.baseUrl;
    return `${baseUrl}/${endpoint.replace(/^\//, '')}`;
  }

  /**
   * Get auth endpoint URL
   * @param endpoint - The auth endpoint path
   */
  getAuthUrl(endpoint: string): string {
    return `${this.authApi}/${endpoint.replace(/^\//, '')}`;
  }

  /**
   * Get service endpoint URL
   * @param endpoint - The service endpoint path
   */
  getServiceUrl(endpoint: string): string {
    return `${this.serviceApi}/${endpoint.replace(/^\//, '')}`;
  }

  /**
   * Get conge endpoint URL
   * @param endpoint - The conge endpoint path
   */
  getCongeUrl(endpoint: string): string {
    return `${this.congeApi}/${endpoint.replace(/^\//, '')}`;
  }

  /**
   * Get pointage endpoint URL
   * @param endpoint - The pointage endpoint path
   */
  getPointageUrl(endpoint: string): string {
    return `${this.pointageApi}/${endpoint.replace(/^\//, '')}`;
  }
}
