import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorage {
  private userCache: any = null;
  private userCacheTime: number = 0;
  private readonly CACHE_DURATION = 5000; // 5 secondes de cache

 constructor() { }

signOut(): void {
  window.sessionStorage.clear();
  // Invalider le cache
  this.userCache = null;
  this.userCacheTime = 0;
}

public saveToken(token: string): void {
  window.sessionStorage.removeItem(TOKEN_KEY);
  window.sessionStorage.setItem(TOKEN_KEY, token);
}

public getToken(): string | null {
  return window.sessionStorage.getItem(TOKEN_KEY);
}

public saveUser(user: any): void {
  window.sessionStorage.removeItem(USER_KEY);
  window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  // Invalider le cache
  this.userCache = null;
  this.userCacheTime = 0;
}

public getUser(): any {
  // Vérifier le cache
  const now = Date.now();
  if (this.userCache && (now - this.userCacheTime) < this.CACHE_DURATION) {
    return this.userCache;
  }

  const user = window.sessionStorage.getItem(USER_KEY);
  if (user) {
    try {
      const userData = JSON.parse(user);

      // Mapper les rôles selon différents formats possibles
      const mappedRoles = this.mapRoles(userData.roles);

      // Adapter les données pour la compatibilité avec l'ancien système
      const adaptedUser = {
        ...userData,
        matriculeP: userData.matricule || userData.matriculeP || userData.email, 
        role_portail: mappedRoles.length > 0 ? mappedRoles[0] : 'ROLE_USER',
        roles: mappedRoles // Rôles mappés en format string
      };

      // Mettre en cache
      this.userCache = adaptedUser;
      this.userCacheTime = now;

      return adaptedUser;
    } catch (error) {
      console.error('❌ Erreur parsing user data:', error);
      const errorUser = { roles: ['ROLE_USER'], role_portail: 'ROLE_USER' };
      this.userCache = errorUser;
      this.userCacheTime = now;
      return errorUser;
    }
  }
  
  const emptyUser = {};
  this.userCache = emptyUser;
  this.userCacheTime = now;
  return emptyUser;
}

/**
 * Mapper les rôles selon différents formats possibles
 */
private mapRoles(rawRoles: any): string[] {
  
  if (!rawRoles) {
    return ['ROLE_USER'];
  }

  // Si c'est déjà un tableau de strings
  if (Array.isArray(rawRoles) && rawRoles.length > 0 && typeof rawRoles[0] === 'string') {
    return rawRoles;
  }

  // Si c'est un tableau d'objets avec différentes propriétés possibles
  if (Array.isArray(rawRoles) && rawRoles.length > 0 && typeof rawRoles[0] === 'object') {
    return rawRoles.map(role => {
      // Priorité aux propriétés les plus courantes
      if (role.nomRole) return role.nomRole;
      if (role.authority) return role.authority;
      if (role.name) return role.name;
      if (role.role) return role.role;
      // Mapping par ID si nécessaire
      if (role.id) return this.mapRoleIdToName(role.id);
      return null;
    }).filter(Boolean);
  }

  // Si c'est un string unique
  if (typeof rawRoles === 'string') {
    return [rawRoles];
  }

  // Tableau vide ou autre format non reconnu
  return ['ROLE_USER'];
}

/**
 * Mapper les IDs de rôles vers les noms (basé sur votre système)
 */
private mapRoleIdToName(roleId: number): string {
  const roleMapping = {
    1: 'ROLE_CHEF_SERVICE', // Chef de service (ancien système)
    2: 'ROLE_ADMIN',        // Administrateur
    3: 'ROLE_USER',         // Utilisateur standard/Employé
    4: 'ROLE_RH',           // Ressources Humaines
    5: 'ROLE_CHEF_A',       // Chef niveau A
    6: 'ROLE_CHEF_B'        // Chef niveau B
  };

  return roleMapping[roleId] || 'ROLE_USER';
}
// tokenservice.service.ts
public getNiveauFromToken(): number | null {
  const token = this.getToken();
  if (token) {
    try {
      // Split the token into parts
      const payloadBase64Url = token.split('.')[1];
      
      // Convert Base64Url to Base64
      const payloadBase64 = payloadBase64Url
        .replace(/-/g, '+')
        .replace(/_/g, '/');
      
      // Add padding if needed
      const padding = payloadBase64.length % 4;
      const paddedPayload = payloadBase64 + (padding ? '='.repeat(4 - padding) : '');
      
      // Decode and parse
      const payload = JSON.parse(atob(paddedPayload));
      return payload.niveau; 
    } catch (e) {
      console.error("Error decoding token:", e);
      return null;
    }
  }
  return null;
}
}
