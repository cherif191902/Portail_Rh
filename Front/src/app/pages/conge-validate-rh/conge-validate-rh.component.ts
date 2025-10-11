import { Component, OnInit } from '@angular/core';
import { CongeApiService, CongeResponse, ValidationCongeRequest } from '../../pages/conges/conge-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conge-validate-rh',
  templateUrl: './conge-validate-rh.component.html',
  styleUrls: ['./conge-validate-rh.component.scss']
})
export class CongeValidateRhComponent implements OnInit {
  demandes: CongeResponse[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private congeApiService: CongeApiService) { }

  ngOnInit(): void { 
    this.loadDemandesEnAttenteRh(); 
  }

  /**
   * Charge les demandes de congés en attente de validation RH
   */
  loadDemandesEnAttenteRh() {
    this.isLoading = true;
    this.errorMessage = '';
    
    console.log('🔄 Chargement des demandes RH en attente...');
    
    this.congeApiService.getDemandesEnAttenteRh().subscribe({
      next: (demandes) => {
        this.demandes = demandes;
        this.isLoading = false;
        
        console.log('✅ Demandes RH chargées:', this.demandes.length);
        console.log('📋 Détail des demandes:', this.demandes);
      },
      error: (error) => {
        console.error('❌ Erreur lors du chargement des demandes RH:', error);
        this.errorMessage = 'Erreur lors du chargement des demandes de congés.';
        this.isLoading = false;
        
        Swal.fire({
          title: 'Erreur',
          text: error.message || 'Impossible de charger les demandes de congés',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });
  }

  /**
   * Valide une demande de congé
   */
  validerDemande(demande: CongeResponse) {
    Swal.fire({
      title: 'Valider cette demande ?',
      html: `
        <div class="text-start">
          <strong>Employé:</strong> ${this.getEmployeeName(demande)}<br>
          <strong>Type:</strong> ${demande.typeConge}<br>
          <strong>Période:</strong> du ${demande.dateDebut} au ${demande.dateFin}<br>
          <strong>Durée:</strong> ${demande.duree} jour(s)
        </div>
      `,
      input: 'textarea',
      inputLabel: 'Commentaire de validation (optionnel)',
      inputPlaceholder: 'Ajouter un commentaire...',
      showCancelButton: true,
      confirmButtonText: '✅ Valider',
      cancelButtonText: '❌ Annuler',
      confirmButtonColor: '#28a745',
      preConfirm: (commentaire) => {
        const validationData: ValidationCongeRequest = {
          action: 'VALIDER',
          commentaire: commentaire || 'Demande validée par RH'
        };

        console.log('✅ Validation de la demande ID:', demande.id);
        
        return this.congeApiService.validerConge(demande.id, validationData).toPromise()
          .then(response => {
            console.log('✅ Demande validée avec succès:', response);
            return response;
          })
          .catch(error => {
            console.error('❌ Erreur lors de la validation:', error);
            Swal.showValidationMessage(`Erreur: ${error.message || 'Une erreur est survenue'}`);
          });
      }
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        Swal.fire({
          title: 'Validé !',
          text: `Demande approuvée avec succès. Nouveau statut: ${result.value.statut}`,
          icon: 'success',
          confirmButtonText: 'OK'
        });
        // Recharger la liste
        this.loadDemandesEnAttenteRh();
      }
    });
  }

  /**
   * Refuse une demande de congé
   */
  refuserDemande(demande: CongeResponse) {
    Swal.fire({
      title: 'Refuser cette demande ?',
      html: `
        <div class="text-start">
          <strong>Employé:</strong> ${this.getEmployeeName(demande)}<br>
          <strong>Type:</strong> ${demande.typeConge}<br>
          <strong>Période:</strong> du ${demande.dateDebut} au ${demande.dateFin}<br>
          <strong>Durée:</strong> ${demande.duree} jour(s)
        </div>
      `,
      input: 'textarea',
      inputLabel: 'Motif du refus (obligatoire)',
      inputPlaceholder: 'Veuillez préciser le motif du refus...',
      inputValidator: (value) => {
        if (!value || !value.trim()) {
          return 'Le motif du refus est obligatoire !';
        }
      },
      showCancelButton: true,
      confirmButtonText: '🚫 Refuser',
      cancelButtonText: '❌ Annuler',
      confirmButtonColor: '#dc3545',
      preConfirm: (motifRefus) => {
        const validationData: ValidationCongeRequest = {
          action: 'REFUSER',
          commentaire: motifRefus
        };

        console.log('❌ Refus de la demande ID:', demande.id);
        
        return this.congeApiService.refuserConge(demande.id, validationData).toPromise()
          .then(response => {
            console.log('❌ Demande refusée avec succès:', response);
            return response;
          })
          .catch(error => {
            console.error('❌ Erreur lors du refus:', error);
            Swal.showValidationMessage(`Erreur: ${error.message || 'Une erreur est survenue'}`);
          });
      }
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        Swal.fire({
          title: 'Refusé !',
          text: `Demande refusée. Nouveau statut: ${result.value.statut}`,
          icon: 'success',
          confirmButtonText: 'OK'
        });
        // Recharger la liste
        this.loadDemandesEnAttenteRh();
      }
    });
  }

  /**
   * Obtient le nom complet de l'employé
   */
  getEmployeeName(demande: CongeResponse): string {
    return demande.personnel?.nom && demande.personnel?.prenom 
      ? `${demande.personnel.nom} ${demande.personnel.prenom}`
      : 'Nom non disponible';
  }

  /**
   * Détermine la classe CSS pour le badge de statut
   */
  getStatutBadgeClass(statut: string): string {
    return this.congeApiService.getStatutBadgeClass(statut);
  }

  /**
   * Détermine l'icône pour le statut
   */
  getStatutIcon(statut: string): string {
    return this.congeApiService.getStatutIcon(statut);
  }

  /**
   * Actualise la liste (méthode publique pour bouton refresh)
   */
  actualiserListe() {
    this.loadDemandesEnAttenteRh();
  }
}
