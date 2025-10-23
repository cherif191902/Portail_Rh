import { Component, OnInit } from '@angular/core';
import { CongeApiService, CongeResponse } from '../conge-api.service';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';

@Component({
  selector: 'app-mes-demandes',
  templateUrl: './mes-demandes.component.html',
  styleUrls: ['./mes-demandes.component.scss']
})
export class MesDemandesComponent implements OnInit {

  demandes: CongeResponse[] = [];
  loading = false;
  error: string | null = null;
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 10;
  
  constructor(
    private congeApiService: CongeApiService,
    private tokenStorage: TokenStorage
  ) {}

  ngOnInit(): void {
    this.chargerMesdemandes();
  }

  /**
   * Charge la liste des demandes de l'utilisateur connecté
   */
  chargerMesdemandes(): void {
    this.loading = true;
    this.error = null;
    
    console.log('🔍 Chargement des demandes de congé...');
    
    this.congeApiService.getMesDemandesConges().subscribe({
      next: (demandes) => {
        console.log('✅ Demandes récupérées:', demandes?.length || 0, 'demande(s)');
        this.demandes = Array.isArray(demandes) ? demandes : [];
        this.loading = false;
        
        // Remettre à la première page si on est au-delà du nombre de pages disponibles
        if (this.currentPage > this.totalPages && this.totalPages > 0) {
          this.currentPage = 1;
        }
      },
      error: (error) => {
        console.error('❌ Erreur lors du chargement des demandes:', error);
        
        let errorMessage = 'Impossible de charger vos demandes de congé.';
        if (error.status === 401) {
          errorMessage = 'Session expirée. Veuillez vous reconnecter.';
        } else if (error.status === 403) {
          errorMessage = 'Vous n\'avez pas l\'autorisation d\'accéder à ces données.';
        } else if (error.status === 0 || error.status >= 500) {
          errorMessage = 'Erreur de connexion au serveur. Veuillez réessayer plus tard.';
        }
        
        this.error = errorMessage;
        this.demandes = [];
        this.loading = false;
      }
    });
  }



  /**
   * Retourne la classe CSS pour le statut
   */
  getStatutClass(statut: string): string {
    switch (statut) {
      case 'APPROUVE':
        return 'badge bg-success';
      case 'REFUSE':
      case 'REFUSE_PAR_CHEF_A':
      case 'REFUSE_PAR_CHEF_B':
      case 'REFUSE_PAR_RH':
        return 'badge bg-danger';
      case 'EN_ATTENTE':
      case 'EN_ATTENTE_CHEF_A':
      case 'EN_ATTENTE_CHEF_B':
      case 'EN_ATTENTE_RH':
        return 'badge bg-warning';
      case 'ANNULE':
        return 'badge bg-secondary';
      default:
        return 'badge bg-info';
    }
  }

  /**
   * Retourne le texte à afficher pour le statut
   */
  getStatutTexte(statut: string): string {
    switch (statut) {
      case 'APPROUVE':
        return 'Approuvé';
      case 'REFUSE':
        return 'Refusé';
      case 'REFUSE_PAR_CHEF_A':
        return 'Refusé par Chef A';
      case 'REFUSE_PAR_CHEF_B':
        return 'Refusé par Chef B';
      case 'REFUSE_PAR_RH':
        return 'Refusé par RH';
      case 'EN_ATTENTE':
        return 'En attente';
      case 'EN_ATTENTE_CHEF_A':
        return 'En attente Chef A';
      case 'EN_ATTENTE_CHEF_B':
        return 'En attente Chef B';
      case 'EN_ATTENTE_RH':
        return 'En attente RH';
      case 'ANNULE':
        return 'Annulé';
      default:
        return statut;
    }
  }

  /**
   * Retourne le validateur actuel selon le statut
   */
  getValidateurActuel(statut: string): string {
    switch (statut) {
      case 'EN_ATTENTE_CHEF_A':
        return 'Chef A';
      case 'EN_ATTENTE_CHEF_B':
        return 'Chef B';
      case 'EN_ATTENTE_RH':
        return 'RH';
      case 'EN_ATTENTE':
        return 'Chef de service';
      case 'APPROUVE':
      case 'REFUSE':
      case 'REFUSE_PAR_CHEF_A':
      case 'REFUSE_PAR_CHEF_B':
      case 'REFUSE_PAR_RH':
      case 'ANNULE':
        return '-';
      default:
        return '-';
    }
  }

  /**
   * Formate une date au format français
   */
  formatDate(dateString: string): string {
    if (!dateString) return '-';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  }

  /**
   * Retourne les demandes pour la page actuelle
   */
  get demandesPaginees(): CongeResponse[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.demandes.slice(startIndex, startIndex + this.itemsPerPage);
  }

  /**
   * Retourne le nombre total de pages
   */
  get totalPages(): number {
    return Math.ceil(this.demandes.length / this.itemsPerPage);
  }



  /**
   * Actualise la liste des demandes avec feedback utilisateur
   */
  actualiser(): void {
    console.log('🔄 Actualisation des demandes...');
    this.currentPage = 1; // Retour à la première page
    
    const originalLoadingState = this.loading;
    this.chargerMesdemandes();
    
    // Si le chargement se termine avec succès, on pourrait ajouter une notification
    // Pour l'instant, le spinner de chargement suffit comme feedback
  }



  /**
   * Fonction de tracking pour *ngFor
   */
  trackByDemande(index: number, demande: CongeResponse): any {
    return demande.id || index;
  }

  /**
   * Retourne l'index de fin pour la pagination
   */
  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.demandes.length);
  }


}