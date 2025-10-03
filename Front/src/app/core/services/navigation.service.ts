import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorage } from './tokenservice.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
    private tokenStorage: TokenStorage
  ) { }

  /**
   * Redirige l'utilisateur vers la page appropriée après la connexion
   * basée sur son rôle
   */
  redirectAfterLogin(): Promise<boolean> {
    const user = this.tokenStorage.getUser();
    const userRoles = user.roles || [];
    const primaryRole = userRoles.length > 0 ? userRoles[0] : user.role_portail;

    let targetRoute = '/dashboards/default';

    switch (primaryRole) {
      case 'ROLE_ADMIN':
        targetRoute = '/dashboards/admin';
        break;
      case 'ROLE_RH':
        targetRoute = '/dashboards/rh';
        break;
      case 'ROLE_CHEF':
        targetRoute = '/dashboards/chef';
        break;
      case 'ROLE_USER':
      default:
        targetRoute = '/dashboards/default';
        break;
    }

    return this.router.navigate([targetRoute]);
  }

  /**
   * Redirige vers la page de connexion
   */
  redirectToLogin(): Promise<boolean> {
    return this.router.navigate(['/account/login']);
  }

  /**
   * Redirige vers le dashboard
   */
  redirectToDashboard(): Promise<boolean> {
    return this.router.navigate(['/dashboard']);
  }

  /**
   * Vérifie si l'utilisateur est connecté et redirige si nécessaire
   */
  checkAuthAndRedirect(): void {
    if (!this.tokenStorage.getToken()) {
      this.redirectToLogin();
    }
  }

  /**
   * Obtient l'URL de redirection par défaut pour un rôle donné
   */
  getDefaultRouteForRole(role: string): string {
    switch (role) {
      case 'ROLE_ADMIN':
        return '/dashboards/admin';
      case 'ROLE_RH':
        return '/dashboards/rh';
      case 'ROLE_CHEF':
        return '/dashboards/chef';
      case 'ROLE_USER':
      default:
        return '/dashboards/default';
    }
  }
}
