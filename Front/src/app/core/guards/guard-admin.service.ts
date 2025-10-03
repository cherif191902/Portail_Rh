import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorage } from '../services/tokenservice.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminService {

  constructor(private route:Router,     private token: TokenStorage
    ) { }
  canActivate(){
    const user = this.token.getUser();
    const userRoles = user.roles || [];
    if(this.token.getToken() && (userRoles.includes("ROLE_ADMIN") || user.role_portail === "ROLE_ADMIN")){
    return true;
    }else{
    this.route.navigate(['/account/login']);
    return false;
    }
    }
    }