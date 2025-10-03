import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private readonly BASE_API = `${environment.apiUrl.replace('/api', '')}/`;
  // Subject to notify components when a new demande is submitted
  public demandeSubmitted$ = new Subject<any>();

  constructor(private http: HttpClient) { }
  // Retourne un objet options contenant l'entête Authorization si un token est présent
  private authOptions(): { headers?: HttpHeaders } {
    const token = window.sessionStorage.getItem('auth-token');
    if (token) {
      return { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) };
    }
    return {};
  }
  addConge(body:any){
   return this.http.post(this.BASE_API + 'conge/add', body).pipe(
    catchError(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error?.error) {
        errorMsg = `${error.error.error} (Max: ${error.error.maxAllowedDays} jours)`;
      }
      return throwError(() => new Error(errorMsg));
    })
  );

  }
  addSanction(body:any){
    return this.http.post(this.BASE_API + 'conge/addSanction',body)

  }
  getMaxSolde=(mat:any):Observable<any[]>=>{
    return this.http.get<any[]>(this.BASE_API + "conge/getMaxSolde/"+mat, this.authOptions());

  }
  GetTypeConge = (): Observable<any[]> => {
    return this.http.get<any[]>(this.BASE_API + "conge/getTypeConge", this.authOptions());
  };
  GetCongeByMat = (mat:any): Observable<any[]> => {
    return this.http.get<any[]>(this.BASE_API + "conge/get/"+mat, this.authOptions());
  };
  GetRepChef = (mat:any,id:any): Observable<any[]> => {
    return this.http.get<any[]>(this.BASE_API + "conge/getRepChef/"+mat+"/"+id, this.authOptions());
  };
  DeleteCng = (id:any): Observable<any[]> => {
    return this.http.delete<any[]>(this.BASE_API + "conge/"+id);
  };
  getDemandesPourChef = (): Observable<any[]> => {
    return this.http.get<any[]>(this.BASE_API + 'conge/chef/pending');
  };

  getDemandesPourChefMy = (): Observable<any[]> => {
    return this.http.get<any[]>(this.BASE_API + 'conge/chef/pending/my', this.authOptions());
  };

  getEmployeesForChef = (): Observable<any[]> => {
    return this.http.get<any[]>(this.BASE_API + 'conge/chef/employees', this.authOptions());
  };

  getApprovals = (congeId: number): Observable<any[]> => {
    return this.http.get<any[]>(this.BASE_API + `conge/${congeId}/approvals`, this.authOptions());
  };

  decisionChef = (dto:any) => {
    // dto should contain id, decision and optional commentaire
    return this.http.post(this.BASE_API + 'conge/chef/decision/' + dto.id + '?decision=' + dto.decision + (dto.commentaire ? '&commentaire=' + encodeURIComponent(dto.commentaire) : ''), {} , this.authOptions());
  };

  // Helper for approving/refusing by chef using simpler parameters
  chefDecisionSimple(id: number, decision: string, commentaire?: string) {
    const url = this.BASE_API + `conge/chef/decision/${id}?decision=${decision}` + (commentaire ? `&commentaire=${encodeURIComponent(commentaire)}` : '');
    return this.http.post(url, {}, this.authOptions());
  }

  getDemandesPourRh = (): Observable<any[]> => {
    return this.http.get<any[]>(this.BASE_API + 'conge/rh/pending');
  };

  decisionRh = (dto:any) => {
    return this.http.post(this.BASE_API + 'conge/rh/decision', dto);
  };

  getNotifications = () => {
    return this.http.get(this.BASE_API + 'conge/notifications');
  };
}
