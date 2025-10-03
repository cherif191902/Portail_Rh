import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CongeService, TypeConge, CongeRequest } from '../conge.service';

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
    private congeService: CongeService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.chargerTypesConges();
  }

  chargerTypesConges() {
    this.congeService.getTypesConges().subscribe(
      types => {
        this.typesConges = types;
      },
      error => {
        console.error('Erreur lors du chargement des types de congés:', error);
      }
    );
  }

  initForm() {
    const today = this.calendar.getToday();
    
    this.demandeForm = this.formBuilder.group({
      typeConge: ['', Validators.required],
      dateDebut: [today, Validators.required],
      dateFin: ['', Validators.required],
      commentaire: ['', [Validators.maxLength(500)]],
      fichierJustificatif: ['']
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
    const demandeData = {
      typeConge: this.getTypeCongeNom(formValue.typeConge),
      dateDebut: this.ngbDateToDate(formValue.dateDebut), // Déjà au format ISO string
      dateFin: this.ngbDateToDate(formValue.dateFin),     // Déjà au format ISO string
      duree: this.calculerDuree(),
      commentaire: formValue.commentaire,
      fichierJustificatif: formValue.fichierJustificatif
    };

    // Envoi de la demande
    this.congeService.creerDemande(demandeData).subscribe(
      response => {
        console.log('Demande créée avec succès:', response);
        alert('Votre demande de congé a été soumise avec succès !');
        
        // Reset du formulaire
        this.submitted = false;
        this.submitting = false;
        this.demandeForm.reset();
        this.initForm();
      },
      error => {
        console.error('Erreur lors de la création de la demande:', error);
        alert('Une erreur est survenue lors de la soumission de votre demande.');
        this.submitting = false;
      }
    );
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

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.demandeForm.patchValue({
        fichierJustificatif: file
      });
    }
  }

  // Méthodes utilitaires
  private getTypeCongeNom(typeId: string): string {
    const type = this.typesConges.find(t => t.id.toString() === typeId);
    return type ? type.nom : '';
  }

  private ngbDateToDate(ngbDate: NgbDate): string {
    // Retourne un format ISO (yyyy-MM-dd) compatible avec LocalDate backend
    const month = ngbDate.month.toString().padStart(2, '0');
    const day = ngbDate.day.toString().padStart(2, '0');
    return `${ngbDate.year}-${month}-${day}`;
  }
}