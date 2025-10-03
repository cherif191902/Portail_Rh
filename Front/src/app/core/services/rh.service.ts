import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RhService {
  private readonly BASE_API = `${environment.apiUrl.replace('/api', '')}/`;

  constructor(private http: HttpClient) {}

  private authOptions() { const token = window.sessionStorage.getItem('auth-token'); return token ? { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) } : {}; }

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_API + 'rh/services', this.authOptions());
  }

  getPersonnels(): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_API + 'rh/personnels', this.authOptions());
  }

  getDebug(): Observable<any> {
    return this.http.get<any>(this.BASE_API + 'rh/debug', this.authOptions());
  }

  getChefs(): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_API + 'rh/chefs', this.authOptions());
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_API + 'rh/employees', this.authOptions());
  }

  assignChef(serviceId: number, personnelId: number) {
    return this.http.put(this.BASE_API + `rh/service/${serviceId}/assign-chef/${personnelId}`, {}, this.authOptions());
  }

  assignEmployee(serviceId: number, personnelId: number) {
    return this.http.put(this.BASE_API + `rh/service/${serviceId}/assign-employee/${personnelId}`, {}, this.authOptions());
  }

  // Congés en attente pour RH
  getPendingCongesRh(): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_API + 'conge/rh/pending', this.authOptions());
  }

  // Décision RH (approve/refuse)
  rhDecision(congeId: number, decision: 'APPROUVE' | 'REFUSE', commentaire?: string) {
    const params: any = { decision };
    if (commentaire) params.commentaire = commentaire;
    return this.http.post(this.BASE_API + `conge/rh/decision/${congeId}`, null, { ...this.authOptions(), params });
  }

  // Historique RH (optionally filtrer status=APPROUVE/REFUSE)
  getHistoriqueRh(status?: string): Observable<any[]> {
    const options = { ...this.authOptions() } as any;
    if (status) options.params = { status };
    return this.http.get(this.BASE_API + 'conge/rh/historique', options).pipe(map(r => r as unknown as any[]));
  }
}
