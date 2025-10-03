import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionTestService {
  private readonly baseUrl = environment.apiUrl.replace('/api', '');
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Test basic connectivity to the backend
   */
  testConnection(): Observable<any> {
    return this.http.get(`${this.baseUrl}/health`, { 
      responseType: 'text' as 'json' 
    });
  }

  /**
   * Test API endpoint connectivity
   */
  testApiConnection(): Observable<any> {
    return this.http.get(`${this.apiUrl}/health`, { 
      responseType: 'text' as 'json' 
    });
  }

  /**
   * Get current configuration for debugging
   */
  getConfig(): any {
    return {
      environment: environment.production ? 'production' : 'development',
      baseUrl: this.baseUrl,
      apiUrl: this.apiUrl,
      authUrl: `${this.apiUrl}/auth`,
      serviceUrl: `${this.baseUrl}/service`,
      congeUrl: `${this.baseUrl}/conge`,
      pointageUrl: `${this.apiUrl}/pointage`,
      webSocketUrl: `${this.baseUrl}/ws-notif`
    };
  }

  /**
   * Test authentication endpoint
   */
  testAuthEndpoint(): Observable<any> {
    return this.http.options(`${this.apiUrl}/auth/signin`);
  }
}
