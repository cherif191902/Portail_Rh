import { Component, OnInit } from '@angular/core';
import { CongeApiService, CongeResponse, ValidationCongeRequest } from '../../conges/conge-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validation-conges',
  templateUrl: './validation-conges.component.html',
  styles: [`.card-title{font-weight:600}.badge{min-width:70px}`]
})
export class ValidationCongesComponent implements OnInit {
  demandes: CongeResponse[] = [];
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  filterText = '';

  // Statistiques
  totalDemandes = 0;
  demandesEnAttente = 0;

  constructor(private congeApiService: CongeApiService) { }

  ngOnInit(): void {
    this.loadDemandesEnAttenteRH();
  }

  /**
   * Charge TOUTES les demandes de congé pour consultation RH avec historique complet
   */
  loadDemandesEnAttenteRH() {
    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';
    
    console.log('🔄 Chargement de toutes les demandes pour consultation RH...');
    
    this.congeApiService.getAllCongesForRH().subscribe({
      next: (demandes) => {
        this.demandes = demandes;
        this.totalDemandes = demandes.length;
        
        // Compter les demandes selon leurs statuts
        this.demandesEnAttente = demandes.filter(d => 
          d.statut === 'EN_ATTENTE_RH' || 
          d.statut === 'EN_ATTENTE_CHEF_A' || 
          d.statut === 'EN_ATTENTE_CHEF_B'
        ).length;
        
        this.isLoading = false;
        
        console.log('✅ Toutes les demandes RH chargées:', this.demandes.length);
        console.log('� Demandes en attente (tous niveaux):', this.demandesEnAttente);
        console.log('�📋 Détail complet des demandes:', this.demandes);
      },
      error: (error) => {
        console.error('❌ Erreur lors du chargement de toutes les demandes RH:', error);
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
          action: 'APPROUVER',
          commentaire: commentaire || 'Demande validée par RH'
        };

        console.log('✅ Validation de la demande ID:', demande.id);
        
        return this.congeApiService.validerCongeUniversel(demande.id, validationData).toPromise()
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
        this.loadDemandesEnAttenteRH();
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
      inputPlaceholder: 'Indiquez la raison du refus...',
      inputValidator: (value) => {
        if (!value || !value.trim()) {
          return 'Le motif du refus est obligatoire';
        }
        return null;
      },
      showCancelButton: true,
      confirmButtonText: '❌ Refuser',
      cancelButtonText: '🔙 Annuler',
      confirmButtonColor: '#dc3545',
      preConfirm: (commentaire) => {
        const validationData: ValidationCongeRequest = {
          action: 'REFUSER',
          commentaire: commentaire
        };

        console.log('❌ Refus de la demande ID:', demande.id);
        
        return this.congeApiService.validerCongeUniversel(demande.id, validationData).toPromise()
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
        this.loadDemandesEnAttenteRH();
      }
    });
  }

  /**
   * Filtre les demandes selon le texte de recherche
   */
  getFilteredDemandes(): CongeResponse[] {
    if (!this.filterText || this.filterText.trim() === '') {
      return this.demandes;
    }

    const searchText = this.filterText.toLowerCase().trim();
    return this.demandes.filter(demande => 
      this.getEmployeeName(demande).toLowerCase().includes(searchText) ||
      demande.typeConge.toLowerCase().includes(searchText) ||
      demande.statut.toLowerCase().includes(searchText) ||
      (demande.commentaire && demande.commentaire.toLowerCase().includes(searchText))
    );
  }

  /**
   * Actualise la liste des demandes
   */
  actualiserListe() {
    this.loadDemandesEnAttenteRH();
  }

  /**
   * Retourne le nom complet de l'employé
   */
  getEmployeeName(demande: CongeResponse): string {
    return demande.personnel ? 
      `${demande.personnel.prenom || ''} ${demande.personnel.nom || ''}`.trim() 
      : 'Nom non disponible';
  }

  /**
   * Retourne le libellé du statut
   */
  getStatutLibelle(statut: string): string {
    return this.congeApiService.getStatutLibelle(statut);
  }

  /**
   * Retourne la couleur du badge pour le statut
   */
  getStatutColorClass(statut: string): string {
    const color = this.congeApiService.getStatutColor(statut);
    return `badge bg-${color}`;
  }

  /**
   * Détermine si l'utilisateur peut valider cette demande
   */
  canValidate(demande: CongeResponse): boolean {
    return this.congeApiService.peutValider(demande, 'RH');
  }

  /**
   * Retourne un message explicatif selon l'étape du workflow
   */
  getWorkflowMessage(demande: CongeResponse): string {
    if (!demande || !demande.statut) {
      return 'Statut indéterminé';
    }

    switch (demande.statut) {
      case 'EN_ATTENTE_CHEF_A':
        return 'En attente de validation par Chef A';
      case 'EN_ATTENTE_CHEF_B':
        return 'En attente de validation par Chef B';
      case 'EN_ATTENTE_RH':
        return 'Prêt pour validation RH';
      case 'APPROUVE_RH':
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

  /**
   * Retourne la classe CSS pour le badge de validation selon le statut
   */
  getValidationBadgeClass(statut: string): string {
    switch (statut) {
      case 'APPROUVE_RH':
        return 'bg-success';
      case 'REFUSE_PAR_CHEF_A':
      case 'REFUSE_PAR_CHEF_B':
      case 'REFUSE_PAR_RH':
        return 'bg-danger';
      case 'EN_ATTENTE_CHEF_A':
      case 'EN_ATTENTE_CHEF_B':
      case 'EN_ATTENTE_RH':
        return 'bg-warning';
      default:
        return 'bg-secondary';
    }
  }

  /**
   * Détermine si les boutons d'action doivent être affichés pour une demande
   */
  canShowActionButtons(demande: CongeResponse): boolean {
    return demande.statut === 'EN_ATTENTE_RH';
  }

  /**
   * Détermine si le bouton approuver doit être affiché
   */
  canApprove(demande: CongeResponse): boolean {
    return demande.statut === 'EN_ATTENTE_RH';
  }

  /**
   * Détermine si le bouton refuser doit être affiché
   */
  canReject(demande: CongeResponse): boolean {
    return demande.statut === 'EN_ATTENTE_RH';
  }

  /**
   * Retourne le libellé pour une validation spécifique
   */
  getValidationLabel(statut: string): string {
    switch (statut) {
      case 'APPROUVE_RH':
        return '✅ Validé';
      case 'REFUSE_PAR_CHEF_A':
        return '❌ Refusé';
      case 'REFUSE_PAR_CHEF_B':
        return '❌ Refusé';
      case 'REFUSE_PAR_RH':
        return '❌ Refusé';
      case 'EN_ATTENTE_CHEF_A':
      case 'EN_ATTENTE_CHEF_B':
      case 'EN_ATTENTE_RH':
        return '⏳ En attente';
      default:
        return '⏳ En attente';
    }
  }
}
