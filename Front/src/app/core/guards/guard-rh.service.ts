import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, CanLoad } from '@angular/router';
import { TokenStorage } from '../services/tokenservice.service';

@Injectable({
  providedIn: 'root'
})
export class GuardRhService implements CanActivate, CanLoad {
  constructor(private route:Router,     private token: TokenStorage
    ) { }
  
  canActivate(){
    const user = this.token.getUser();
    const userRoles = user.roles || [];
    if(this.token.getToken() && (userRoles.includes("ROLE_ADMIN") || userRoles.includes("ROLE_RH") || user.role_portail === "ROLE_ADMIN")){
    return true;
    }else{
    this.route.navigate(['/account/login']);
    return false;
    }
  }

  canLoad(){
    const user = this.token.getUser();
    const userRoles = user.roles || [];
    if(this.token.getToken() && (userRoles.includes("ROLE_ADMIN") || userRoles.includes("ROLE_RH") || user.role_portail === "ROLE_ADMIN")){
    return true;
    }else{
    this.route.navigate(['/account/login']);
    return false;
    }
  }
}
    