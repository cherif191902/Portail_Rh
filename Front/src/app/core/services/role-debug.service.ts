import { Injectable } from '@angular/core';
import { TokenStorage } from './tokenservice.service';

@Injectable({
  providedIn: 'root'
})
export class RoleDebugService {

  constructor(private tokenStorage: TokenStorage) { }

  /**
   * Debug complet des données utilisateur et rôles
   */
  debugUserData() {
    console.log('🔍 === DEBUG DONNÉES UTILISATEUR ===');
    
    const token = this.tokenStorage.getToken();
    const user = this.tokenStorage.getUser();
    const rawUserData = this.getRawUserData();
    
    console.log('1️⃣ Token présent:', !!token);
    console.log('2️⃣ Token value:', token ? token.substring(0, 50) + '...' : 'null');
    
    console.log('3️⃣ Données utilisateur adaptées:', user);
    console.log('4️⃣ Données utilisateur brutes:', rawUserData);
    
    if (rawUserData) {
      console.log('5️⃣ Structure des rôles bruts:', rawUserData.roles);
      console.log('6️⃣ Type des rôles:', typeof rawUserData.roles);
      console.log('7️⃣ Est un tableau?', Array.isArray(rawUserData.roles));
      
      if (rawUserData.roles && Array.isArray(rawUserData.roles)) {
        rawUserData.roles.forEach((role, index) => {
          console.log(`   Rôle ${index}:`, role);
          console.log(`   Type:`, typeof role);
          if (typeof role === 'object') {
            console.log(`   Propriétés:`, Object.keys(role));
          }
        });
      }
    }
    
    console.log('8️⃣ === FIN DEBUG ===');
    
    return {
      hasToken: !!token,
      user,
      rawUserData,
      roles: rawUserData?.roles
    };
  }

  /**
   * Obtenir les données utilisateur brutes (non adaptées)
   */
  private getRawUserData(): any {
    const user = window.sessionStorage.getItem('auth-user');
    return user ? JSON.parse(user) : null;
  }

  /**
   * Mapper les rôles selon différents formats possibles
   */
  mapRoles(rawRoles: any): string[] {
    if (!rawRoles) return [];
    
    console.log('🔄 Mapping des rôles:', rawRoles);
    
    // Si c'est déjà un tableau de strings
    if (Array.isArray(rawRoles) && typeof rawRoles[0] === 'string') {
      console.log('✅ Rôles déjà en format string');
      return rawRoles;
    }
    
    // Si c'est un tableau d'objets avec propriété 'name' ou 'authority'
    if (Array.isArray(rawRoles) && typeof rawRoles[0] === 'object') {
      console.log('🔄 Conversion d\'objets vers strings');
      return rawRoles.map(role => {
        if (role.authority) return role.authority;
        if (role.name) return role.name;
        if (role.role) return role.role;
        // Mapping par ID si nécessaire
        return this.mapRoleIdToName(role.id);
      }).filter(Boolean);
    }
    
    // Si c'est un string unique
    if (typeof rawRoles === 'string') {
      return [rawRoles];
    }
    
    console.log('❌ Format de rôles non reconnu');
    return [];
  }

  /**
   * Mapper les IDs de rôles vers les noms (basé sur votre système)
   */
  private mapRoleIdToName(roleId: number): string {
    const roleMapping = {
      1: 'ROLE_CHEF',
      2: 'ROLE_ADMIN', 
      3: 'ROLE_USER',
      4: 'ROLE_RH'
    };
    
    return roleMapping[roleId] || 'ROLE_USER';
  }

  /**
   * Test de vérification des rôles
   */
  testRoleCheck() {
    console.log('🧪 === TEST VÉRIFICATION RÔLES ===');
    
    const debugData = this.debugUserData();
    const mappedRoles = this.mapRoles(debugData.rawUserData?.roles);
    
    console.log('Rôles mappés:', mappedRoles);
    
    // Test des différents rôles
    const roleTests = [
      'ROLE_ADMIN',
      'ROLE_CHEF', 
      'ROLE_USER',
      'ROLE_RH'
    ];
    
    roleTests.forEach(testRole => {
      const hasRole = mappedRoles.includes(testRole);
      console.log(`${hasRole ? '✅' : '❌'} A le rôle ${testRole}:`, hasRole);
    });
    
    console.log('🧪 === FIN TEST ===');
    
    return mappedRoles;
  }

  /**
   * Proposer une correction pour le TokenStorage
   */
  suggestTokenStorageFix() {
    const debugData = this.debugUserData();
    const mappedRoles = this.mapRoles(debugData.rawUserData?.roles);
    
    console.log('💡 === SUGGESTION DE CORRECTION ===');
    console.log('Remplacer dans TokenStorage.getUser():');
    console.log(`
    return {
      ...userData,
      matriculeP: userData.email,
      role_portail: mappedRoles.length > 0 ? mappedRoles[0] : 'ROLE_USER',
      roles: mappedRoles // Utiliser les rôles mappés
    };
    `);
    
    return {
      mappedRoles,
      primaryRole: mappedRoles.length > 0 ? mappedRoles[0] : 'ROLE_USER'
    };
  }
}
