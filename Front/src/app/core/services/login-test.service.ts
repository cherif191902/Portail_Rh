import { Injectable } from '@angular/core';
import { Auth2Service } from './auth2.service';
import { NavigationService } from './navigation.service';
import { TokenStorage } from './tokenservice.service';

@Injectable({
  providedIn: 'root'
})
export class LoginTestService {

  constructor(
    private auth2Service: Auth2Service,
    private navigationService: NavigationService,
    private tokenStorage: TokenStorage
  ) { }

  /**
   * Test de connexion avec des données d'exemple
   */
  testLogin(email: string = 'test@example.com', password: string = 'password123') {
    console.log('🧪 Test de connexion avec:', { email, password });
    
  // Auth2Service.login attend un LoginRequest { matricule, password }
  const loginData = { matricule: email, password };
    
    this.auth2Service.login(loginData).subscribe({
      next: (response) => {
        console.log('✅ Connexion réussie:', response);
        console.log('🔑 Token sauvegardé:', this.tokenStorage.getToken());
        console.log('👤 Utilisateur sauvegardé:', this.tokenStorage.getUser());
        
        // Test de redirection
        this.testRedirection();
      },
      error: (error) => {
        console.error('❌ Erreur de connexion:', error);
        console.log('💡 Assurez-vous que votre backend est démarré sur le port 8089');
        console.log('💡 Et qu\'un utilisateur avec ces identifiants existe');
      }
    });
  }

  /**
   * Test de redirection
   */
  testRedirection() {
    console.log('🧪 Test de redirection...');
    
    this.navigationService.redirectAfterLogin().then(
      (success) => {
        if (success) {
          console.log('✅ Redirection réussie vers le dashboard');
        } else {
          console.error('❌ Échec de la redirection');
        }
      }
    ).catch(error => {
      console.error('❌ Erreur lors de la redirection:', error);
    });
  }

  /**
   * Vérifier l'état de l'authentification
   */
  checkAuthStatus() {
    const token = this.tokenStorage.getToken();
    const user = this.tokenStorage.getUser();
    
    console.log('🔍 État de l\'authentification:');
    console.log('Token présent:', !!token);
    console.log('Utilisateur connecté:', !!user.email);
    
    if (user.email) {
      console.log('👤 Utilisateur:', {
        email: user.email,
        roles: user.roles,
        role_portail: user.role_portail,
        matriculeP: user.matriculeP
      });
    }
    
    return { hasToken: !!token, hasUser: !!user.email, user };
  }

  /**
   * Nettoyer les données de test
   */
  cleanup() {
    console.log('🧹 Nettoyage des données de test...');
    this.tokenStorage.signOut();
    console.log('✅ Données nettoyées');
  }

  /**
   * Test complet de connexion et redirection
   */
  runFullTest(email?: string, password?: string) {
    console.log('🚀 Démarrage du test complet de connexion...');
    
    // 1. Vérifier l'état initial
    console.log('1️⃣ État initial:');
    this.checkAuthStatus();
    
    // 2. Nettoyer les données existantes
    console.log('2️⃣ Nettoyage:');
    this.cleanup();
    
    // 3. Tester la connexion
    console.log('3️⃣ Test de connexion:');
    this.testLogin(email, password);
  }
}
