import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorage } from './tokenservice.service';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoginRequest, SignupRequest, JwtResponse, MessageResponse } from '../models/auth.models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class Auth2Service {
  private readonly AUTH_API = `${environment.apiUrl}/auth/`;
  private readonly SERVICE_API = `${environment.apiUrl}/service/`;

  constructor(private http: HttpClient, private tokenStorage: TokenStorage) { }

  login(body: LoginRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.AUTH_API}signin`, body, httpOptions).pipe(
      tap(data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
      })
    );
  }

  register(body: SignupRequest): Observable<any> {
    return this.http.post<any>(`${this.AUTH_API}signup`, body, httpOptions);
  }

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.AUTH_API}services`);
  }

  getChefsByService(serviceId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.AUTH_API}getChefsByService/${serviceId}`);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.AUTH_API}signout`, {}, httpOptions);
  }
}
