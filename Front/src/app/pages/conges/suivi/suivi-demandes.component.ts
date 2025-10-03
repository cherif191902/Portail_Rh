import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CongeService, DemandeConge } from '../conge.service';

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

  // Options de filtre
  statutOptions = [
    { value: 'TOUS', label: 'Tous les statuts' },
    { value: 'EN_ATTENTE', label: 'En attente' },
    { value: 'APPROUVE', label: 'Approuvé' },
    { value: 'REFUSE', label: 'Refusé' },
    { value: 'ANNULE', label: 'Annulé' }
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

  constructor(private congeService: CongeService) {}

  ngOnInit(): void {
    this.chargerDemandes();
    
    // S'abonner aux notifications de mise à jour
    this.demandesSubscription = this.congeService.demandesUpdatedNotification$.subscribe(
      updated => {
        if (updated) {
          console.log('🔄 Notification de mise à jour reçue - rechargement des demandes');
          this.chargerDemandes();
        }
      }
    );
  }

  ngOnDestroy(): void {
    // Nettoyer les abonnements
    if (this.demandesSubscription) {
      this.demandesSubscription.unsubscribe();
    }
  }

  chargerDemandes() {
    console.log('🔄 Chargement des demandes de congé...');
    this.congeService.getMesDemandesConges().subscribe(
      demandes => {
        console.log('✅ Demandes chargées:', demandes.length);
        console.log('📋 Détail des demandes:', demandes);
        this.demandes = demandes;
        this.appliquerFiltres();
      },
      error => {
        console.error('❌ Erreur lors du chargement des demandes:', error);
        this.demandes = [];
        this.appliquerFiltres();
      }
    );
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
    switch (statut) {
      case 'APPROUVE': return 'badge bg-success';
      case 'REFUSE': return 'badge bg-danger';
      case 'EN_ATTENTE': return 'badge bg-warning';
      case 'ANNULE': return 'badge bg-secondary';
      default: return 'badge bg-secondary';
    }
  }

  getStatutIcon(statut: string): string {
    switch (statut) {
      case 'APPROUVE': return 'fas fa-check-circle';
      case 'REFUSE': return 'fas fa-times-circle';
      case 'EN_ATTENTE': return 'fas fa-clock';
      case 'ANNULE': return 'fas fa-ban';
      default: return 'fas fa-question-circle';
    }
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

  // Méthode pour annuler une demande en attente
  annulerDemande(demande: DemandeConge) {
    if (demande.statut === 'EN_ATTENTE') {
      if (confirm('Êtes-vous sûr de vouloir annuler cette demande ?')) {
        this.congeService.annulerDemande(demande.id).subscribe(
          success => {
            if (success) {
              demande.statut = 'ANNULE';
              console.log('Demande annulée avec succès:', demande);
              // Optionnel: recharger les données
              // this.chargerDemandes();
            }
          },
          error => {
            console.error('Erreur lors de l\'annulation:', error);
            alert('Une erreur est survenue lors de l\'annulation de la demande.');
          }
        );
      }
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
    const enAttente = this.demandes.filter(d => d.statut === 'EN_ATTENTE').length;
    const approuvees = this.demandes.filter(d => d.statut === 'APPROUVE').length;
    const refusees = this.demandes.filter(d => d.statut === 'REFUSE').length;

    return { total, enAttente, approuvees, refusees };
  }

  // TrackBy function pour optimiser les performances
  trackByFn(index: number, item: DemandeConge): number {
    return item.id;
  }

  // Référence à Math pour l'utilisation dans le template
  Math = Math;
}