// pointage.service.ts
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PointageService {
  private readonly POINTAGE_API = `${environment.apiUrl}/pointage`;

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorage
  ) { }

// pointage.service.ts
getMyPointages(date?: string): Observable<any[]> {
  const token = this.tokenStorage.getToken();
  const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
  let params = new HttpParams();

  if (date) {
    params = params.append('date', date); // Match backend's parameter name
  }

  return this.http.get<any[]>(`${this.POINTAGE_API}/me`, { headers, params });
}
}