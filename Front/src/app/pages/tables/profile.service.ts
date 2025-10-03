// profile.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';

const AUTH_API = 'http://localhost:8082/api/auth';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient,private tokenStorage: TokenStorage ) { }

  updateProfile(profileData: any) {
    // Retrieve the token from TokenStorage
    const token = this.tokenStorage.getToken();
    
    // Set headers with the Authorization token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Include headers in the PUT request
    return this.http.put(`${AUTH_API}/updateProfile`, profileData, { headers });
  }
}