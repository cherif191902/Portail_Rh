import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { map } from 'rxjs/operators';
import { Pointage } from 'src/app/pages/tables/advancedtable/advanced.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChefServiceService {
  private readonly BASE_API = `${environment.apiUrl.replace('/api', '')}/`;

  constructor(private http: HttpClient, private tokenStorage: TokenStorage) { }

  

  getDemandeChef=(serv:any):Observable<any[]>=>{
    return this.http.get<any[]>(this.BASE_API + "conge/getDemandeChef/"+serv);

  }
  getDemandeChefNotNull=(serv:any):Observable<any[]>=>{
    return this.http.get<any[]>(this.BASE_API + "conge/getDemandeChefNotNull/"+serv);

  }
  UpdateDemande(data:any):Observable<any>{
    return this.http.put<any>(this.BASE_API+"conge/updateChef",data);
  }
  getSubordinates(matricule: string): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_API + `api/auth/getSubordinates/${matricule}`);
  }
  approveNiveau1(id: number, decision: string): Observable<any> {
    return this.http.put<any>(`${this.BASE_API}conge/approve/niveau1/${id}?decision=${decision}`, {});
  }

  approveNiveau2(id: number, decision: string): Observable<any> {
    return this.http.put<any>(`${this.BASE_API}conge/approve/niveau2/${id}?decision=${decision}`, {});
  }

  approveNiveau3(id: number, decision: string): Observable<any> {
    return this.http.put<any>(`${this.BASE_API}conge/approve/niveau3/${id}?decision=${decision}`, {});
  }

  // Fetch demands based on niveau
  getDemandesByNiveau(serv: number, niveau: number): Observable<any[]> {
    const endpoint = `conge/getDemandeNiveau${niveau}/${serv}`;
    return this.http.get<any[]>(this.BASE_API + endpoint);
  }


  getrepDemandeNiveau3(serv: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_API}conge/getrepDemandeNiveau3/${serv}`);
  }

  getrepDemandeNiveau2(serv: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_API}conge/getrepDemandeNiveau2/${serv}`);
  }

  getrepDemandeNiveau1(serv: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_API}conge/getrepDemandeNiveau1/${serv}`);
  }

  /*getSubordinatesPointage(matricule: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.tokenStorage.getToken()}` // Assuming token service has getToken()
    });
    return this.http.get<any[]>(
      this.BASE_API + `api/pointage/service-by-matricule?matricule=${matricule}`,
      { headers }
    ).pipe(
      map(response => response.map(item => ({
        // Adjust mapping based on API response
        id: item.id,
        matricule: item.matricule,
        typePoint: item.typePoint,
        datePoint: item.datePoint,
        nCarte: item.nCarte,
        numPoint: item.numPoint,
        heure: item.heure,
        minute: item.minute,
         personnel: {
        nom: item.personnel?.nom || '',    // Handle null values
        prenom: item.personnel?.prenom || ''
      }
      } as Pointage)))
    );
    console.log("Token used:", this.tokenStorage.getToken());
    
  }*/
 getSubordinatesPointage(matricule: string, date?: Date): Observable<any[]> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.tokenStorage.getToken()}`
  });

  let params = new HttpParams().set('matricule', matricule);
  if (date) {
    params = params.set('date', date.toISOString().split('T')[0]);
  }

  return this.http.get<any[]>(
    this.BASE_API + `api/pointage/service-by-matricule`,
    { headers, params }
  ).pipe(
    map(response => response.map(item => ({
      id: item.id,
      matricule: item.matricule,
      typePoint: item.typePoint,
      datePoint: item.datePoint,
      nCarte: item.nCarte,
      numPoint: item.numPoint,
      heure: item.heure,
      minute: item.minute,
      status: item.status,
      totalMinutesWorked: item.totalMinutesWorked,
      lateMinutes: item.lateMinutes,
      
      overtimeMinutes: item.overtimeMinutes,
      personnel: {
        nom: item.personnel?.nom || '',
        prenom: item.personnel?.prenom || ''
      }
    } as Pointage)))
  );
}
  
}
