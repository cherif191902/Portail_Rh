import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, CanLoad } from '@angular/router';
import { TokenStorage } from '../services/tokenservice.service';

@Injectable({
  providedIn: 'root'
})
export class GuardChefService implements CanActivate, CanLoad {

  constructor(private route:Router,     private token: TokenStorage
    ) { }
  
  canActivate(){
    const user = this.token.getUser();
    const userRoles = user.roles || [];
    const hasChefRole = userRoles.includes("ROLE_CHEF") || userRoles.includes("ROLE_CHEF_A") || userRoles.includes("ROLE_CHEF_B") || 
                       user.role_portail === "ROLE_CHEF" || user.role_portail === "ROLE_CHEF_A" || user.role_portail === "ROLE_CHEF_B";
    if(this.token.getToken() && hasChefRole){
    return true;
    }else{
    this.route.navigate(['/account/login']);
    return false;
    }
  }

  canLoad(){
    const user = this.token.getUser();
    const userRoles = user.roles || [];
    const hasChefRole = userRoles.includes("ROLE_CHEF") || userRoles.includes("ROLE_CHEF_A") || userRoles.includes("ROLE_CHEF_B") || 
                       user.role_portail === "ROLE_CHEF" || user.role_portail === "ROLE_CHEF_A" || user.role_portail === "ROLE_CHEF_B";
    if(this.token.getToken() && hasChefRole){
    return true;
    }else{
    this.route.navigate(['/account/login']);
    return false;
    }
  }
}