import { Component, OnInit } from '@angular/core';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
    profileForm: FormGroup;
  currentUser: any;
  successMessage: string;
  errorMessage: string;

  constructor(
     private fb: FormBuilder,
    private profileService: ProfileService,
    private tokenStorage: TokenStorage
  ) { }

  ngOnInit(): void {
      this.currentUser = this.tokenStorage.getUser();
    
    this.profileForm = this.fb.group({
      nom: [this.currentUser.nom, Validators.required],
      prenom: [this.currentUser.prenom, Validators.required],
      email: [this.currentUser.email, [Validators.required, Validators.email]],
      numTel: [this.currentUser.numTel, Validators.required],
      password: ['']
    });
  }
onSubmit(): void {
  if (this.profileForm.invalid) return;

  const formData = {
    nom: this.profileForm.value.nom,
    prenom: this.profileForm.value.prenom,
    email: this.profileForm.value.email,
    numTel: Number(this.profileForm.value.numTel),
    password: this.profileForm.value.password || null
  };

  const cleanData = Object.entries(formData)
    .filter(([_, v]) => v !== null && v !== '')
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

  this.profileService.updateProfile(cleanData).subscribe(
    (response: any) => {
      const updatedUser = { ...this.currentUser, ...cleanData };
      this.tokenStorage.saveUser(updatedUser);
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Profil mis à jour!',
        text: 'Vos modifications ont été enregistrées avec succès',
        showConfirmButton: false,
        timer: 2000
      });
    },
    error => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Erreur',
        text: error.error?.message || 'Échec de la mise à jour du profil',
        showConfirmButton: false,
        timer: 3000
      });
    }
  );
}


}
