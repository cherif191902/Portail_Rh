import { Component, OnInit } from '@angular/core';
import { CongeApiService, CongeRhResponse } from '../../pages/conges/conge-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conge-validate-rh',
  templateUrl: './conge-validate-rh.component.html',
  styleUrls: ['./conge-validate-rh.component.scss']
})
export class CongeValidateRhComponent implements OnInit {
  demandes: CongeRhResponse[] = [];
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
    
    this.congeApiService.getCongesEnAttenteRH().subscribe({
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
   * Approuve une demande de congé
   */
  approuverConge(id: number) {
    Swal.fire({
      title: 'Approuver cette demande ?',
      text: 'Cette action est irréversible.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '✅ Approuver',
      cancelButtonText: '❌ Annuler',
      confirmButtonColor: '#28a745',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('✅ Approbation de la demande ID:', id);
        
        this.congeApiService.approuverConge(id).subscribe({
          next: (response) => {
            console.log('✅ Demande approuvée avec succès:', response);
            Swal.fire({
              title: 'Approuvé !',
              text: response.message || 'Demande approuvée avec succès',
              icon: 'success',
              confirmButtonText: 'OK'
            });
            // Recharger la liste
            this.loadDemandesEnAttenteRh();
          },
          error: (error) => {
            console.error('❌ Erreur lors de l\'approbation:', error);
            Swal.fire({
              title: 'Erreur',
              text: error.message || 'Impossible d\'approuver la demande',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        });
      }
    });
  }

  /**
   * Refuse une demande de congé
   */
  refuserConge(id: number) {
    Swal.fire({
      title: 'Refuser cette demande ?',
      text: 'Cette action est irréversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '🚫 Refuser',
      cancelButtonText: '❌ Annuler',
      confirmButtonColor: '#dc3545',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('❌ Refus de la demande ID:', id);
        
        this.congeApiService.refuserCongeRh(id).subscribe({
          next: (response) => {
            console.log('❌ Demande refusée avec succès:', response);
            Swal.fire({
              title: 'Refusée !',
              text: response.message || 'Demande refusée',
              icon: 'success',
              confirmButtonText: 'OK'
            });
            // Recharger la liste
            this.loadDemandesEnAttenteRh();
          },
          error: (error) => {
            console.error('❌ Erreur lors du refus:', error);
            Swal.fire({
              title: 'Erreur',
              text: error.message || 'Impossible de refuser la demande',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        });
      }
    });
  }

  /**
   * Actualise la liste (méthode publique pour bouton refresh)
   */
  actualiserListe() {
    this.loadDemandesEnAttenteRh();
  }
  canValidate(demande: CongeRhResponse): boolean {
    return demande.statutActuel === 'EN_ATTENTE_RH';
  }

  /**
   * Retourne un message explicatif selon l'étape du workflow
   */
  getWorkflowMessage(demande: CongeRhResponse): string {
    if (!demande || !demande.statutActuel) {
      return 'Statut indéterminé';
    }

    switch (demande.statutActuel) {
      case 'EN_ATTENTE_CHEF_A':
        return 'En attente de validation par Chef A';
      case 'EN_ATTENTE_CHEF_B':
        return 'En attente de validation par Chef B';
      case 'EN_ATTENTE_RH':
        return 'Prêt pour validation RH';
      case 'VALIDE':
        return 'Demande validée';
      case 'REFUSE_PAR_CHEF_A':
        return 'Refusé par Chef A';
      case 'REFUSE_PAR_CHEF_B':
        return 'Refusé par Chef B';
      case 'REFUSE_PAR_RH':
        return 'Refusé par RH';
      default:
        return 'En cours de traitement...';
    }
  }
}
