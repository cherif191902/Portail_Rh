  import { Injectable } from '@angular/core';
  import { Observable, throwError } from 'rxjs';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { catchError, tap } from 'rxjs/operators';
  import { environment } from '../../../environments/environment';

  @Injectable({
    providedIn: 'root'
  })
  export class RhService {
    private readonly BASE_API = `${environment.apiUrl.replace('/api', '')}/`;

    constructor(private http: HttpClient) { }

    getService=():Observable<any[]>=>{
      return this.http.get<any[]>(this.BASE_API + "service/getService");

    }
    getTypeConge=():Observable<any[]>=>{
      return this.http.get<any[]>(this.BASE_API + "service/getTypeConge");

    }

    getDemandeRh=():Observable<any[]>=>{
      return this.http.get<any[]>(this.BASE_API + "conge/getDemandeRh");

    }
    getDemandeRhNotNull=():Observable<any[]>=>{
      return this.http.get<any[]>(this.BASE_API + "conge/getDemandeRhNotNull");

    }
    addService(data:any):Observable<any>{
      return this.http.post<any>(this.BASE_API+"service/addService",data)
      .pipe(
        catchError(error => {
          // Pass through the error message
          return throwError(() => error);
        })
      );
    }
    addTypeConge(data:any):Observable<any>{
      return this.http.post<any>(this.BASE_API+"service/addTypeConge",data);
    }

    UpdateDemandeRh(data:any):Observable<any>{
      return this.http.put<any>(this.BASE_API+"conge/updateRh",data);
    }
    GetUser = (): Observable<any[]> => {
      return this.http.get<any[]>(this.BASE_API + "api/auth/getUsers");
    };
    UpdateRole(data:any):Observable<any>{
      return this.http.put<any>(this.BASE_API+"api/auth/setRole",data);
    }
    UpdatePss(data:any):Observable<any>{
      return this.http.put<any>(this.BASE_API+"api/auth/updatePass",data);
    }
    Updatepers(data:any):Observable<any>{
      console.log("Sending update request:", data);
      return this.http.put<any>(this.BASE_API+"api/auth/add",data).pipe(
        tap(response => console.log("Response received:", response)),
    catchError(error => {
      console.error("Error updating user:", error);
      return throwError(error);
        })
      );
    }
    DeleteService = (id:any): Observable<any[]> => {
      return this.http.delete<any[]>(this.BASE_API + "service/service/"+id);
    };
    DeleteType = (id:any): Observable<any[]> => {
      return this.http.delete<any[]>(this.BASE_API + "service/type/"+id);
    };
    getUserByMatricule(matricule: string): Observable<any> {
      return this.http.get<any>(this.BASE_API + "api/auth/gett/" + matricule);
    }
    getChefsByService(serviceId: number): Observable<any[]> {
      return this.http.get<any[]>(this.BASE_API + `api/auth/getChefsByService/${serviceId}`);
    }

    // Méthodes pour les affectations
    getServices(): Observable<any[]> {
      return this.http.get<any[]>(this.BASE_API + "service/getService");
    }

    getChefs(): Observable<any[]> {
      return this.http.get<any[]>(this.BASE_API + "api/auth/getChefs");
    }

    getEmployees(): Observable<any[]> {
      return this.http.get<any[]>(this.BASE_API + "api/auth/getEmployees");
    }

    assignChef(serviceId: number, chefId: number): Observable<any> {
      return this.http.post<any>(this.BASE_API + `service/assignChef/${serviceId}/${chefId}`, {});
    }

    assignEmployee(serviceId: number, employeeId: number): Observable<any> {
      return this.http.post<any>(this.BASE_API + `service/assignEmployee/${serviceId}/${employeeId}`, {});
    }

    // Méthodes pour la validation des congés
    getPendingCongesRh(): Observable<any[]> {
      return this.http.get<any[]>(this.BASE_API + "conge/getPendingCongesRh");
    }

    getHistoriqueRh(status?: string): Observable<any[]> {
      const url = status ? `conge/getHistoriqueRh?status=${status}` : "conge/getHistoriqueRh";
      return this.http.get<any[]>(this.BASE_API + url);
    }

    rhDecision(congeId: number, decision: 'APPROUVE' | 'REFUSE'): Observable<any> {
      return this.http.put<any>(this.BASE_API + `conge/rhDecision/${congeId}`, { decision });
    }

    // Méthodes pour l'historique des décisions (utilise l'endpoint existant)
    getHistoriqueDecisions(): Observable<any[]> {
      return this.http.get<any[]>(this.BASE_API + "conge/getHistoriqueRh");
    }

    // Méthodes pour les statistiques RH (utilise les endpoints existants)
    // Les statistiques sont calculées côté client à partir des données existantes

    // Méthodes pour la gestion des utilisateurs
    createUser(userData: any): Observable<any> {
      return this.http.post<any>(this.BASE_API + "api/auth/createUser", userData);
    }

    deleteUser(userId: number): Observable<any> {
      return this.http.delete<any>(this.BASE_API + `api/auth/deleteUser/${userId}`);
    }

    // Méthodes pour la gestion des services
    updateService(serviceData: any): Observable<any> {
      return this.http.put<any>(this.BASE_API + "service/updateService", serviceData);
    }

    // Méthodes pour la gestion des types de congés
    updateTypeConge(typeData: any): Observable<any> {
      return this.http.put<any>(this.BASE_API + "service/updateTypeConge", typeData);
    }
    
  }
