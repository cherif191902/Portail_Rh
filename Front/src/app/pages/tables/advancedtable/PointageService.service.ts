import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pointage } from './advanced.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PointageService {
  private apiUrl = `${environment.apiUrl}/pointage`;
   pointages = new BehaviorSubject<Pointage[]>([]);
  private total = new BehaviorSubject<number>(0);

  public page = 1;
  public pageSize = 10;
  public searchTerm = '';

  constructor(private http: HttpClient) { }

  get pointages$(): Observable<Pointage[]> {
    return this.pointages.asObservable();
  }

  get total$(): Observable<number> {
    return this.total.asObservable();
  }

  getAllPointages(): Observable<void> {
    const params = new HttpParams()
        .set('page', this.page.toString())
        .set('size', this.pageSize.toString())
        .set('search', this.searchTerm);

    return this.http.get<any>(`${this.apiUrl}/all`, { 
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        params 
    }).pipe(
        map(response => {
            this.pointages.next(response);
            this.total.next(response.length);
        })
    );
}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    
    return this.http.post(`${this.apiUrl}/upload`, formData, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
         responseType: 'json'
    }).pipe(
        catchError(error => {
          const errorMsg = error.error?.error || error.error?.message || 'Erreur inconnue';
          return throwError(() => ({ message: errorMsg }));
        })
      );
}



getPointagesByDate(date: Date, forceRefresh = false): Observable<void> {
    const params = new HttpParams()
        .set('date', date.toISOString().split('T')[0])
        .set('page', this.page.toString())
        .set('size', this.pageSize.toString())
          .set('refresh', forceRefresh.toString());

    return this.http.get<Pointage[]>(`${this.apiUrl}/by-date`, { 
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        params 
    }).pipe(
        map(response => {
            this.pointages.next(response);
            this.total.next(response.length);
        }),
         catchError(error => {
        const errorMsg = error.error?.error || error.error?.message || 'Erreur de chargement';
        return throwError(() => ({ message: errorMsg }));
      })
    );
}
validatePointages(date: Date): Observable<any> {
  const params = new HttpParams()
    .set('date', date.toISOString().split('T')[0]);
    
    

  return this.http.post(`${this.apiUrl}/validate`, null, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    params
  }).pipe(
    catchError(error => {
      const errorMsg = error.error?.error || error.error?.message || 'Validation error';
      return throwError(() => ({ message: errorMsg }));
    })
  );
}
}