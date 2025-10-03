import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CongeService } from '../../pages/tables/conge.service';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conge-request',
  templateUrl: './conge-request.component.html',
  styleUrls: ['./conge-request.component.scss']
})
export class CongeRequestComponent implements OnInit {
  formConge: FormGroup;
  typeCng: any[] = [];
  selectedTypeMaxDays: number | null = null;
  durationExceeds = false;
  solde: any = null;

  constructor(private fb: FormBuilder, private congeService: CongeService, private token: TokenStorage) { }

  ngOnInit(): void {
    this.formConge = this.fb.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      duree: ['', Validators.required],
      motif: [''],
      typeConge: this.fb.group({ idType: ['', Validators.required] })
    });

    // Vérifier que l'utilisateur est authentifié avant de charger les types
    if (!this.token.getToken()) {
      Swal.fire('Non authentifié', 'Veuillez vous connecter avant de faire une demande de congé', 'warning');
      return;
    }

  // Charger les types de congé puis brancher la logique dépendante
  console.log('Token present (conge-request):', this.token.getToken());
  this.congeService.GetTypeConge().subscribe({
      next: (data: any) => {
        this.typeCng = data || [];

        const idControl = this.formConge.get(['typeConge','idType']);
        if (idControl) {
          idControl.valueChanges.subscribe(id => {
            const selected = this.typeCng.find(t => t.idType == id);
            this.selectedTypeMaxDays = selected?.maxAllowedDays || null;
            this.checkDuration();
          });
        }
      },
      error: (err) => {
        console.error('Erreur loading types de congé', err);
        // Si c'est une erreur 401, forcer la déconnexion et rediriger vers login
        if (err?.status === 401) {
          Swal.fire('Non authentifié', 'Votre session a expiré, vous allez être redirigé vers la page de connexion', 'warning')
            .then(() => {
              this.token.signOut();
              window.location.href = '/account/login';
            });
          return;
        }

        const msg = err?.error?.message || err?.message || 'Erreur lors du chargement des types de congé';
        Swal.fire('Erreur', msg, 'error');
      }
    });

    // Charger le solde du user
    const user = this.token.getUser();
    const matricule = user?.matriculeP || user?.matricule;
    if (matricule) {
      this.congeService.getMaxSolde(matricule).subscribe({
        next: (s:any) => this.solde = s,
        error: (e)=> console.debug('Erreur getMaxSolde', e)
      });
    }

    // Auto-calcul de la durée hors weekends quand dates changent
    const debut = this.formConge.get('dateDebut');
    const fin = this.formConge.get('dateFin');
    if (debut && fin) {
      debut.valueChanges.subscribe(() => this.recalculateDuration());
      fin.valueChanges.subscribe(() => this.recalculateDuration());
    }
  }

  checkDuration() {
    const dureeVal = Number(this.formConge.get('duree').value) || 0;

    // find selected type and its name
    const id = this.formConge.get(['typeConge','idType']).value;
    const selected = this.typeCng.find(t => t.idType == id) || {};
    const typeName = (selected.nomType || selected.nomTypeconge || '').toString().toLowerCase();

    // default Tunisia annual leave if backend doesn't provide solde
    const DEFAULT_TUNISIA_ANNUAL = 18;

    // determine allowed days: for annual leave use solde if available, otherwise default; else use selected.maxAllowedDays
    let allowed = selected?.maxAllowedDays ?? null;
    if (typeName.includes('annuel') || typeName.includes('annuelle') || typeName.includes('annuel')) {
      allowed = (this.solde?.soldeRestant != null) ? Number(this.solde.soldeRestant) : DEFAULT_TUNISIA_ANNUAL;
    }

    this.durationExceeds = allowed != null ? dureeVal > allowed : false;
  }

  private recalculateDuration(){
    const debutStr = this.formConge.get('dateDebut').value;
    const finStr = this.formConge.get('dateFin').value;

    if (!debutStr || !finStr) {
      this.formConge.get('duree').setValue('', { emitEvent: false });
      this.durationExceeds = false;
      return;
    }

    const d = new Date(debutStr);
    const f = new Date(finStr);
    if (isNaN(d.getTime()) || isNaN(f.getTime()) || d > f) {
      this.formConge.get('duree').setValue(0, { emitEvent: false });
      this.durationExceeds = false;
      return;
    }

    const days = this.businessDaysBetween(d, f);
    // set value without triggering valueChanges loop
    this.formConge.get('duree').setValue(days, { emitEvent: false });
    this.checkDuration();
  }

  // Count business days between inclusive start and end, excluding Saturdays and Sundays
  private businessDaysBetween(start: Date, end: Date): number {
    let count = 0;
    const cur = new Date(start);
    while (cur <= end) {
      const day = cur.getDay();
      if (day !== 0 && day !== 6) count++;
      cur.setDate(cur.getDate() + 1);
    }
    return count;
  }

  submit() {
    if (this.formConge.invalid || this.durationExceeds) {
      Swal.fire('Erreur', 'Veuillez vérifier les informations du formulaire', 'error');
      return;
    }

    // Construire le payload correspondant à l'entité Conge côté backend
    const form = this.formConge.value;
    const payload: any = {
      dateDeb: form.dateDebut, // backend expects dateDeb
      dateFin: form.dateFin,
      nbJours: String(form.duree),
      motif: form.motif,
      // include typeConge object with idType as number if provided
      typeConge: form.typeConge && form.typeConge.idType ? { idType: Number(form.typeConge.idType) } : null
    };

    this.congeService.addConge(payload).subscribe(() => {
      Swal.fire('Succès', 'Demande de congé soumise', 'success');
      this.formConge.reset();
      // notify other components (dashboard) that a new demande was submitted
      this.congeService.demandeSubmitted$.next(true);
    }, err => {
      // extraire un message lisible
      let msg = 'Erreur lors de la soumission';
      try {
        if (err?.error) {
          // si le backend renvoie {message: ...} ou string
          msg = typeof err.error === 'string' ? err.error : (err.error.message || JSON.stringify(err.error));
        } else if (err?.message) {
          msg = err.message;
        } else {
          msg = String(err);
        }
      } catch (e) {
        msg = 'Erreur inconnue';
      }
      Swal.fire('Erreur', String(msg), 'error');
    });
  }
}
