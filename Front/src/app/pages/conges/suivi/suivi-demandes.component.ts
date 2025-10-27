import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CongeApiService } from '../conge-api.service';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';

interface DemandeConge {
  id?: number;
  typeConge: string;
  dateDebut: string;
  dateFin: string;
  duree: number;
  statut: string;
  dateDemande: string;
  commentaire?: string;
  motifRefus?: string;
}

@Component({
  selector: 'app-suivi-demandes',
  templateUrl: './suivi-demandes.component.html',
  styleUrls: ['./suivi-demandes.component.scss']
})
export class SuiviDemandesComponent implements OnInit, OnDestroy {

  demandes: DemandeConge[] = [];
  filteredDemandes: DemandeConge[] = [];
  
  // Abonnement pour les mises à jour en temps réel
  private demandesSubscription?: Subscription;
  
  // Filtres
  filtreStatut: string = 'TOUS';
  filtreTypeConge: string = 'TOUS';
  searchText: string = '';
  
  // Pagination
  page = 1;
  pageSize = 10;
  collectionSize = 0;

  // Options de filtre (nouveau workflow)
  statutOptions = [
    { value: 'TOUS', label: 'Tous les statuts' },
    { value: 'EN_ATTENTE_CHEF_A', label: 'En attente Chef A' },
    { value: 'EN_ATTENTE_CHEF_B', label: 'En attente Chef B' },
    { value: 'EN_ATTENTE_RH', label: 'En attente RH' },
    { value: 'VALIDE', label: 'Validé' },
    { value: 'REFUSE_PAR_CHEF_A', label: 'Refusé par Chef A' },
    { value: 'REFUSE_PAR_CHEF_B', label: 'Refusé par Chef B' },
    { value: 'REFUSE_PAR_RH', label: 'Refusé par RH' },
    { value: 'APPROUVE', label: 'Approuvé (ancien)' },
    { value: 'EN_ATTENTE', label: 'En attente (ancien)' },
    { value: 'REFUSE', label: 'Refusé (ancien)' }
  ];

  typesConges = [
    { value: 'TOUS', label: 'Tous les types' },
    { value: 'Congé payé', label: 'Congé payé' },
    { value: 'Congé maladie', label: 'Congé maladie' },
    { value: 'Congé maternité', label: 'Congé maternité' },
    { value: 'Congé paternité', label: 'Congé paternité' },
    { value: 'Congé sans solde', label: 'Congé sans solde' },
    { value: 'Congé formation', label: 'Congé formation' }
  ];

  constructor(
    private congeApiService: CongeApiService,
    private token: TokenStorage
  ) {}

  ngOnInit(): void {
    this.chargerDemandes();
    
    // S'abonner aux notifications de mise à jour (optionnel)
    // Pour l'instant, on charge simplement les demandes
    console.log('� Utilisateur connecté:', this.token.getUser()?.matriculeP || 'Non défini');
  }

  ngOnDestroy(): void {
    // Nettoyer les abonnements
    if (this.demandesSubscription) {
      this.demandesSubscription.unsubscribe();
    }
  }

  chargerDemandes() {
    console.log('🔄 Chargement des demandes en attente de validation...');
    
    // Charger les demandes en attente selon le rôle de l'utilisateur
    this.congeApiService.getDemandesEnAttente().subscribe({
      next: (demandes) => {
        console.log('✅ Demandes en attente chargées:', demandes.length);
        console.log('📋 Détail des demandes en attente:', demandes);
        this.demandes = demandes;
        this.appliquerFiltres();
        
        // Message si aucune demande en attente
        if (demandes.length === 0) {
          console.log('📭 Aucune demande de congé en attente de validation');
        }
      },
      error: (error) => {
        console.error('❌ Erreur lors du chargement des demandes en cours:', error);
        this.demandes = [];
        this.appliquerFiltres();
        
        // Gestion spécifique des erreurs d'authentification
        if (error?.status === 401) {
          console.warn('🚫 Utilisateur non authentifié - redirection vers login');
          window.location.href = '/account/login';
        }
      }
    });
  }

  /**
   * Actualise les demandes (appelée après ajout/annulation)
   */
  actualiserDemandes() {
    console.log('🔄 Actualisation des demandes...');
    this.chargerDemandes();
  }

  appliquerFiltres() {
    this.filteredDemandes = this.demandes.filter(demande => {
      let matchStatut = this.filtreStatut === 'TOUS' || demande.statut === this.filtreStatut;
      let matchType = this.filtreTypeConge === 'TOUS' || demande.typeConge === this.filtreTypeConge;
      let matchSearch = !this.searchText || 
        demande.typeConge.toLowerCase().includes(this.searchText.toLowerCase()) ||
        demande.commentaire?.toLowerCase().includes(this.searchText.toLowerCase());

      return matchStatut && matchType && matchSearch;
    });

    this.collectionSize = this.filteredDemandes.length;
  }

  onFiltreChange() {
    this.page = 1; // Reset à la première page
    this.appliquerFiltres();
  }

  getStatutClass(statut: string): string {
    // Utiliser la méthode du service API pour uniformiser
    return this.congeApiService.getStatutBadgeClass(statut);
  }

  getStatutIcon(statut: string): string {
    // Utiliser la méthode du service API pour uniformiser
    return this.congeApiService.getStatutIcon(statut);
  }

  getStatutLabel(statut: string): string {
    switch (statut) {
      case 'APPROUVE': return 'Approuvé';
      case 'REFUSE': return 'Refusé';
      case 'EN_ATTENTE': return 'En attente';
      case 'ANNULE': return 'Annulé';
      default: return 'Inconnu';
    }
  }

  // ========== NOUVELLES MÉTHODES DE VALIDATION ==========

  /**
   * Valide une demande de congé
   */
  validerDemande(demande: DemandeConge, commentaire?: string) {
    if (!this.peutValider(demande)) {
      alert('Vous n\'êtes pas autorisé à valider cette demande.');
      return;
    }

    const confirmMessage = `Êtes-vous sûr de vouloir VALIDER cette demande de congé ?
    Type: ${demande.typeConge}
    Période: du ${demande.dateDebut} au ${demande.dateFin}`;
    
    if (confirm(confirmMessage)) {
      const validationData = {
        action: 'APPROUVER' as const,
        commentaire: commentaire || 'Validation approuvée'
      };

      console.log('✅ Validation de la demande ID:', demande.id);
      
      this.congeApiService.validerConge(demande.id!, validationData).subscribe({
        next: (response) => {
          console.log('✅ Demande validée avec succès:', response);
          alert(`Demande validée avec succès ! Nouveau statut: ${response.statut}`);
          // Recharger les données
          this.chargerDemandes();
        },
        error: (error) => {
          console.error('❌ Erreur lors de la validation:', error);
          alert(`Erreur lors de la validation: ${error.message || 'Une erreur est survenue'}`);
        }
      });
    }
  }

  /**
   * Refuse une demande de congé
   */
  refuserDemande(demande: DemandeConge, motifRefus?: string) {
    if (!this.peutValider(demande)) {
      alert('Vous n\'êtes pas autorisé à refuser cette demande.');
      return;
    }

    const motif = motifRefus || prompt('Veuillez indiquer le motif du refus:');
    if (!motif) {
      alert('Un motif de refus est obligatoire.');
      return;
    }

    const confirmMessage = `Êtes-vous sûr de vouloir REFUSER cette demande de congé ?
    Type: ${demande.typeConge}
    Période: du ${demande.dateDebut} au ${demande.dateFin}
    Motif: ${motif}`;
    
    if (confirm(confirmMessage)) {
      const validationData = {
        action: 'REFUSER' as const,
        commentaire: motif
      };

      console.log('❌ Refus de la demande ID:', demande.id);
      
      this.congeApiService.refuserConge(demande.id!, validationData).subscribe({
        next: (response) => {
          console.log('❌ Demande refusée avec succès:', response);
          alert(`Demande refusée. Nouveau statut: ${response.statut}`);
          // Recharger les données
          this.chargerDemandes();
        },
        error: (error) => {
          console.error('❌ Erreur lors du refus:', error);
          alert(`Erreur lors du refus: ${error.message || 'Une erreur est survenue'}`);
        }
      });
    }
  }

  /**
   * Détermine si l'utilisateur peut valider/refuser cette demande
   */
  peutValider(demande: DemandeConge): boolean {
    // Convertir vers CongeResponse pour la méthode du service
    const congeResponse = {
      id: demande.id || 0,
      typeConge: demande.typeConge,
      dateDebut: demande.dateDebut,
      dateFin: demande.dateFin,
      duree: demande.duree,
      statut: demande.statut,
      dateDemande: demande.dateDemande,
      commentaire: demande.commentaire,
      motifRefus: demande.motifRefus
    };
    
    // Obtenir le rôle de l'utilisateur connecté
    const userRole = this.getCurrentUserRole();
    return this.congeApiService.peutValider(congeResponse, userRole);
  }

  /**
   * Obtient le rôle de l'utilisateur connecté
   */
  private getCurrentUserRole(): string {
    const user = this.token.getUser();
    if (!user || !user.roles) return '';
    
    // Prendre le premier rôle (le plus élevé en général)
    const role = user.roles[0] || '';
    
    // Nettoyer le nom du rôle (enlever ROLE_ si présent)
    return role.replace('ROLE_', '');
  }

  /**
   * Ouvre une modal pour saisir un commentaire lors de la validation
   */
  ouvrirModalValidation(demande: DemandeConge) {
    // TODO: Implémenter une modal Bootstrap pour saisir le commentaire
    // Pour l'instant, on utilise prompt()
    const commentaire = prompt('Commentaire de validation (optionnel):');
    if (commentaire !== null) { // L'utilisateur n'a pas annulé
      this.validerDemande(demande, commentaire);
    }
  }

  /**
   * Ouvre une modal pour saisir le motif de refus
   */
  ouvrirModalRefus(demande: DemandeConge) {
    // TODO: Implémenter une modal Bootstrap pour saisir le motif
    // Pour l'instant, on utilise prompt()
    const motif = prompt('Motif du refus (obligatoire):');
    if (motif && motif.trim()) {
      this.refuserDemande(demande, motif.trim());
    } else if (motif !== null) {
      alert('Le motif du refus est obligatoire.');
    }
  }

  // Méthode pour annuler une demande en attente
  annulerDemande(demande: DemandeConge) {
    if (demande.statut === 'EN_ATTENTE' && demande.id) {
      if (confirm('Êtes-vous sûr de vouloir annuler cette demande ?')) {
        console.log('🗑️ Annulation de la demande:', demande.id);
        
        this.congeApiService.annulerDemande(demande.id).subscribe({
          next: (response) => {
            console.log('✅ Demande annulée avec succès:', response);
            // Recharger les données pour avoir l'état à jour
            this.chargerDemandes();
          },
          error: (error) => {
            console.error('❌ Erreur lors de l\'annulation:', error);
            
            let errorMessage = 'Une erreur est survenue lors de l\'annulation de la demande.';
            if (error?.error) {
              errorMessage = typeof error.error === 'string' ? error.error : error.error.message || errorMessage;
            }
            
            alert(errorMessage);
          }
        });
      }
    } else if (demande.statut !== 'EN_ATTENTE') {
      alert('Seules les demandes en attente peuvent être annulées.');
    }
  }

  // Méthode pour afficher les détails d'une demande
  voirDetails(demande: DemandeConge) {
    // TODO: Ouvrir une modal avec les détails complets
    console.log('Détails de la demande:', demande);
  }

  // Méthodes pour l'export
  exporterExcel() {
    // TODO: Implémenter l'export Excel
    console.log('Export Excel des demandes');
  }

  exporterPDF() {
    // TODO: Implémenter l'export PDF
    console.log('Export PDF des demandes');
  }

  // Calcul des statistiques rapides
  getStatistiques() {
    const total = this.demandes.length;
    const enAttente = this.demandes.filter(d => 
      d.statut === 'EN_ATTENTE' || 
      d.statut === 'EN_ATTENTE_CHEF_A' || 
      d.statut === 'EN_ATTENTE_CHEF_B' || 
      d.statut === 'EN_ATTENTE_RH'
    ).length;
    const approuvees = this.demandes.filter(d => 
      d.statut === 'VALIDE' || d.statut === 'APPROUVE'
    ).length;
    const refusees = this.demandes.filter(d => 
      d.statut === 'REFUSE' || 
      d.statut === 'REFUSE_PAR_CHEF_A' || 
      d.statut === 'REFUSE_PAR_CHEF_B' || 
      d.statut === 'REFUSE_PAR_RH'
    ).length;

    return { total, enAttente, approuvees, refusees };
  }

  // TrackBy function pour optimiser les performances
  trackByFn(index: number, item: DemandeConge): number {
    return item.id;
  }

  /**
   * Retourne le libellé du statut selon le nouveau workflow
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
   * Retourne un message explicatif selon l'étape du workflow
   */
  getWorkflowMessage(demande: DemandeConge): string {
    if (!demande || !demande.statut) {
      return 'Statut indéterminé';
    }

    switch (demande.statut) {
      case 'EN_ATTENTE_CHEF_A':
        return 'En attente de validation par Chef A';
      case 'EN_ATTENTE_CHEF_B':
        return 'En attente de validation par Chef B';
      case 'EN_ATTENTE_RH':
        return 'En attente de validation par RH';
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

  // Référence à Math pour l'utilisation dans le template
  Math = Math;
}