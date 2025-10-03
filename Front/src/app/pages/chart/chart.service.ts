import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private readonly BASE_API = `${environment.apiUrl.replace('/api', '')}/`;
  private header: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.header = new HttpHeaders();
  }

  Getconge = (mat:any): Observable<any[]> => {
    return this.httpClient.get<any[]>(this.BASE_API + "conge/getCng/"+mat);
  };

  GetAllConge(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.BASE_API + "conge/getAllCng");
}
  GetNbrconge = (mat:any): Observable<any[]> => {
    return this.httpClient.get<any[]>(this.BASE_API + "conge/getNbrCng/"+mat);
  };



 GetNbrCngMois(): Observable<number> {
  return this.httpClient.get<number>(this.BASE_API + 'conge/getNbrCngMois');
}

  getCongeDureeYear(mat: string, year: number): Observable<number> {
    return this.httpClient.get<number>(`${this.BASE_API}conge/getTotalCongeThisYear/${mat}/${year}`);
  }

}
