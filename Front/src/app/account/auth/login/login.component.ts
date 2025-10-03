import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import Swal from 'sweetalert2';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { Auth2Service } from 'src/app/core/services/auth2.service';
import { MenuRefreshService } from 'src/app/core/services/menu-refresh.service';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {
  errr: string

  form: FormGroup
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  year: number = new Date().getFullYear();
  showPassword: boolean = false;
rememberMe: boolean = false;

  constructor(
    private authService: Auth2Service,
    private tokenStorage: TokenStorage,
    private route: Router,
    private fb: FormBuilder,
    private menuRefresh: MenuRefreshService,
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    // Vérifier si l'utilisateur est déjà connecté
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;

      // Rediriger automatiquement vers le dashboard si déjà connecté
      console.log('Utilisateur déjà connecté, redirection vers dashboard...');
      this.navigationService.redirectAfterLogin();
      return;
    }

    this.form = this.fb.group({
      matricule: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(): void {
    // Trim inputs to avoid accidental leading/trailing spaces which break authentication
    const payload = {
      matricule: (this.form.value?.matricule || '').toString().trim(),
      password: (this.form.value?.password || '').toString().trim()
    };
    console.log('Login payload:', payload);

    this.authService.login(payload).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        const user = this.tokenStorage.getUser();

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.menuRefresh.triggerRefresh();

        if (data) {
          const userRoles = user.roles || [];
          const roleText = userRoles.length > 0 ? userRoles[0] : 'utilisateur';
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bienvenu à notre espace ' + roleText,
            showConfirmButton: false,
            timer: 2000
          });
        }

        setTimeout(() => {
          this.navigationService.redirectAfterLogin().then(
            (success) => {
              if (!success) {
                this.route.navigate(['/dashboard']);
              }
            }
          ).catch(error => {
            console.error('❌ Erreur lors de la redirection:', error);
            // Fallback: redirection vers dashboard
            this.route.navigate(['/dashboard']);
          });
        }, 1500); // Délai de 1500ms pour permettre la sauvegarde des données

      },
      (err) => {
        console.log('❌ === ERREUR DE CONNEXION ===');
        console.log('Erreur complète:', err);
        const status = err?.status;
        const message = err?.error?.message || err?.message || err?.statusText;
        const url = err?.url || err?.backendUrl;
        console.log('Status:', status);
        console.log('Message:', message);
        console.log('URL appelée:', url);
        console.log('Données envoyées:', payload);

        if (status === 0) {
          this.errr = "Impossible de se connecter au serveur. Vérifiez que le backend est démarré sur le port 8089.";
        } else if (status === 401) {
          this.errr = "Matricule ou mot de passe incorrect.";
        } else if (status === 403) {
          this.errr = "Accès refusé. Vérifiez vos identifiants.";
        } else if (status === 404) {
          this.errr = "Service d'authentification non trouvé. Vérifiez l'URL du backend.";
        } else if (status >= 500) {
          this.errr = "Erreur serveur. Vérifiez les logs du backend.";
        } else {
          this.errr = "Erreur de connexion: " + (message || "Erreur inconnue");
        }

        console.log('Message d\'erreur affiché:', this.errr);
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  
}

/* */
