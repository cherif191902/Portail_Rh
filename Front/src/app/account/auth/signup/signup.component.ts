import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { Auth2Service } from 'src/app/core/services/auth2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  services: any[] = [];
  chefs: any[] = [];
  submitted = false;
  error = '';
  successmsg = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
    private userService: UserProfileService,private tokenStorage:TokenStorage,private authService:Auth2Service) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.signupForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }





  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  // Getters pour les champs individuels
  get nom() { return this.signupForm.get('nom'); }
  get prenom() { return this.signupForm.get('prenom'); }
  get email() { return this.signupForm.get('email'); }

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;
    this.error = '';

    if (this.signupForm.invalid) {
      return;
    }

    const payload = {
      nom: this.signupForm.value.nom,
      prenom: this.signupForm.value.prenom,
      email: this.signupForm.value.email
    };

    this.authService.register(payload).subscribe(
      () => {
        this.successmsg = true;
        this.error = '';
        setTimeout(() => {
          this.router.navigate(['/account/login']);
        }, 2000);
      },
      err => {
        console.error('Registration error:', err);

        let errorMessage = 'Erreur lors de l\'inscription';
        if (err.error) {
          if (typeof err.error === 'object' && err.error.message) {
            errorMessage = err.error.message;
          } else if (typeof err.error === 'string') {
            errorMessage = err.error;
          }
        }
        this.error = errorMessage;

        // Map error to form fields
        if (errorMessage.toLowerCase().includes('email')) {
          this.signupForm.get('email')?.setErrors({ backendError: true });
        }
      }
    );
  }


}
