import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CongeApiService } from '../conge-api.service';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';

interface TypeConge {
  idType: number;
  nomTypeconge: string;
  maxAllowedDays: number;
}

interface CongeRequest {
  typeConge: string;
  dateDebut: string;
  dateFin: string;
  duree: number;
  commentaire?: string;
}

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.scss']
})
export class DemandeCongeComponent implements OnInit {

  demandeForm: FormGroup;
  submitted = false;
  submitting = false;
  
  // Types de congés disponibles
  typesConges: TypeConge[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private calendar: NgbCalendar,
    private congeApiService: CongeApiService,
    private token: TokenStorage
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.chargerTypesConges();
  }

  chargerTypesConges() {
    console.log('📋 Chargement des types de congés...');
    this.congeApiService.getTypesConges().subscribe({
      next: (response) => {
        console.log('🔍 Réponse du service API:', response);
        // L'API retourne maintenant un ApiResponse avec les données mappées
        const types = response?.data || response;
        this.typesConges = Array.isArray(types) ? types : [];
        
        // Filtrer les types valides
        this.typesConges = this.typesConges.filter(type => 
          type && type.idType !== null && type.idType !== undefined && type.nomTypeconge
        );
        
        console.log('✅ Types de congés chargés:', this.typesConges);
      },
      error: (error) => {
        console.error('❌ Erreur lors du chargement des types de congés:', error);
        this.typesConges = [];
      }
    });
  }

  initForm() {
    const today = this.calendar.getToday();
    
    this.demandeForm = this.formBuilder.group({
      typeConge: ['', Validators.required],
      dateDebut: [today, Validators.required],
      dateFin: ['', Validators.required],
      commentaire: ['', [Validators.maxLength(500)]]
      // Suppression du champ fichierJustificatif
    });
  }

  get f() { return this.demandeForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.demandeForm.invalid) {
      return;
    }

    this.submitting = true;
    
    // Préparation des données au format CongeRequest
    const formValue = this.demandeForm.value;
    const demandeData: CongeRequest = {
      typeConge: this.getTypeCongeNom(formValue.typeConge),
      dateDebut: this.ngbDateToDate(formValue.dateDebut), // Au format ISO string
      dateFin: this.ngbDateToDate(formValue.dateFin),     // Au format ISO string
      duree: this.calculerDuree(),
      commentaire: formValue.commentaire
      // Suppression du champ fichierJustificatif
    };

    console.log('📤 Envoi de la demande:', demandeData);

    // Envoi de la demande
    this.congeApiService.creerDemandeConge(demandeData).subscribe({
      next: (response) => {
        console.log('✅ Demande créée avec succès:', response);
        alert('Votre demande de congé a été soumise avec succès !');
        
        // Reset du formulaire
        this.submitted = false;
        this.submitting = false;
        this.demandeForm.reset();
        this.initForm();
      },
      error: (error) => {
        console.error('❌ Erreur lors de la création de la demande:', error);
        
        let errorMessage = 'Une erreur est survenue lors de la soumission de votre demande.';
        if (error?.error) {
          errorMessage = typeof error.error === 'string' ? error.error : error.error.message || errorMessage;
        }
        
        alert(errorMessage);
        this.submitting = false;
      }
    });
  }

  onReset() {
    this.submitted = false;
    this.demandeForm.reset();
    this.initForm();
  }

  // Calcul automatique de la durée
  calculerDuree(): number {
    const dateDebut = this.demandeForm.get('dateDebut')?.value;
    const dateFin = this.demandeForm.get('dateFin')?.value;
    
    if (dateDebut && dateFin) {
      // Conversion des dates NgbDate en Date
      const debut = new Date(dateDebut.year, dateDebut.month - 1, dateDebut.day);
      const fin = new Date(dateFin.year, dateFin.month - 1, dateFin.day);
      
      // Calcul de la différence en jours
      const diffTime = Math.abs(fin.getTime() - debut.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays + 1; // +1 pour inclure le jour de fin
    }
    return 0;
  }

  // Méthodes utilitaires
  private getTypeCongeNom(typeId: string): string {
    if (!typeId || !this.typesConges) {
      return '';
    }
    
    const type = this.typesConges.find(t => 
      t && t.idType !== null && t.idType !== undefined && t.idType.toString() === typeId
    );
    return type ? type.nomTypeconge : '';
  }

  private ngbDateToDate(ngbDate: NgbDate): string {
    // Retourne un format ISO (yyyy-MM-dd) compatible avec LocalDate backend
    const month = ngbDate.month.toString().padStart(2, '0');
    const day = ngbDate.day.toString().padStart(2, '0');
    return `${ngbDate.year}-${month}-${day}`;
  }
}