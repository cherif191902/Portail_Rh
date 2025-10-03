import { Component, OnInit } from '@angular/core';
import { CongeService, DemandeConge } from '../conge.service';

@Component({
  selector: 'app-historique-conges',
  templateUrl: './historique-conges.component.html',
  styleUrls: ['./historique-conges.component.scss']
})
export class HistoriqueCongesComponent implements OnInit {

  historiqueConges: DemandeConge[] = [];
  filteredHistorique: DemandeConge[] = [];
  
  // Filtres
  filtreStatut: string = 'TOUS';
  filtreTypeConge: string = 'TOUS';
  filtreAnnee: string = 'TOUTES';
  searchText: string = '';
  
  // Pagination
  page = 1;
  pageSize = 15;
  collectionSize = 0;

  // Options de filtre
  statutOptions = [
    { value: 'TOUS', label: 'Tous les statuts' },
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

  anneesDisponibles: string[] = [];
  
  // Statistiques de l'historique
  statistiques = {
    totalDemandes: 0,
    joursApprouves: 0,
    tauxApprobation: 0,
    dernierCongeDate: null as Date | null
  };

  constructor(private congeService: CongeService) {}

  ngOnInit(): void {
    this.chargerHistoriqueConges();
    this.genererAnneesDisponibles();
  }

  genererAnneesDisponibles() {
    const currentYear = new Date().getFullYear();
    this.anneesDisponibles = ['TOUTES'];
    for (let year = currentYear; year >= currentYear - 5; year--) {
      this.anneesDisponibles.push(year.toString());
    }
  }

  chargerHistoriqueConges() {
    this.congeService.getMesDemandesConges().subscribe(
      demandes => {
        // Filtrer uniquement les demandes terminées (approuvées, refusées, annulées)
        this.historiqueConges = demandes.filter(d => 
          d.statut === 'APPROUVE' || d.statut === 'REFUSE' || d.statut === 'ANNULE'
        );
        
        this.calculerStatistiques();
        this.appliquerFiltres();
      },
      error => {
        console.error('Erreur lors du chargement de l\'historique:', error);
        this.historiqueConges = [];
        this.appliquerFiltres();
      }
    );
  }

  calculerStatistiques() {
    if (this.historiqueConges.length === 0) {
      this.statistiques = {
        totalDemandes: 0,
        joursApprouves: 0,
        tauxApprobation: 0,
        dernierCongeDate: null
      };
      return;
    }

    const demandesApprouvees = this.historiqueConges.filter(d => d.statut === 'APPROUVE');
    const joursApprouves = demandesApprouvees.reduce((total, d) => total + d.duree, 0);
    const tauxApprobation = (demandesApprouvees.length / this.historiqueConges.length) * 100;
    
    // Trouver la date du dernier congé approuvé
    const congesApprouvesOrdonnes = demandesApprouvees
      .sort((a, b) => new Date(b.dateFin).getTime() - new Date(a.dateFin).getTime());
    
    this.statistiques = {
      totalDemandes: this.historiqueConges.length,
      joursApprouves,
      tauxApprobation: Math.round(tauxApprobation),
      dernierCongeDate: congesApprouvesOrdonnes.length > 0 ? congesApprouvesOrdonnes[0].dateFin : null
    };
  }

  appliquerFiltres() {
    this.filteredHistorique = this.historiqueConges.filter(demande => {
      let matchStatut = this.filtreStatut === 'TOUS' || demande.statut === this.filtreStatut;
      let matchType = this.filtreTypeConge === 'TOUS' || demande.typeConge === this.filtreTypeConge;
      let matchAnnee = this.filtreAnnee === 'TOUTES' || 
        new Date(demande.dateDebut).getFullYear().toString() === this.filtreAnnee;
      let matchSearch = !this.searchText || 
        demande.typeConge.toLowerCase().includes(this.searchText.toLowerCase()) ||
        demande.commentaire?.toLowerCase().includes(this.searchText.toLowerCase());

      return matchStatut && matchType && matchAnnee && matchSearch;
    });

    this.collectionSize = this.filteredHistorique.length;
  }

  onFiltreChange() {
    this.page = 1;
    this.appliquerFiltres();
  }

  getStatutClass(statut: string): string {
    switch (statut) {
      case 'APPROUVE': return 'badge bg-success';
      case 'REFUSE': return 'badge bg-danger';
      case 'ANNULE': return 'badge bg-secondary';
      default: return 'badge bg-secondary';
    }
  }

  getStatutIcon(statut: string): string {
    switch (statut) {
      case 'APPROUVE': return 'fas fa-check-circle';
      case 'REFUSE': return 'fas fa-times-circle';
      case 'ANNULE': return 'fas fa-ban';
      default: return 'fas fa-question-circle';
    }
  }

  getStatutLabel(statut: string): string {
    switch (statut) {
      case 'APPROUVE': return 'Approuvé';
      case 'REFUSE': return 'Refusé';
      case 'ANNULE': return 'Annulé';
      default: return 'Inconnu';
    }
  }

  // Calcul de la période depuis la fin du congé
  calculerTempsEcoule(dateFin: Date): string {
    const maintenant = new Date();
    const fin = new Date(dateFin);
    const diffMs = maintenant.getTime() - fin.getTime();
    const diffJours = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffJours < 0) return 'À venir';
    if (diffJours === 0) return 'Aujourd\'hui';
    if (diffJours === 1) return 'Il y a 1 jour';
    if (diffJours < 30) return `Il y a ${diffJours} jours`;
    if (diffJours < 365) {
      const mois = Math.floor(diffJours / 30);
      return `Il y a ${mois} mois`;
    }
    const annees = Math.floor(diffJours / 365);
    return `Il y a ${annees} an${annees > 1 ? 's' : ''}`;
  }

  // Export des données
  exporterExcel() {
    console.log('Export Excel de l\'historique des congés');
    // TODO: Implémenter l'export Excel
  }

  exporterPDF() {
    console.log('Export PDF de l\'historique des congés');
    // TODO: Implémenter l'export PDF
  }

  // Méthodes pour l'affichage
  getTypeColor(typeConge: string): string {
    const colors: { [key: string]: string } = {
      'Congé Annuel': '#556ee6',
      'Congé Maladie': '#f06548',
      'Congé Maternité/Paternité': '#0ab39c',
      'Congé Exceptionnel': '#f7b84b',
      'RTT': '#299cdb',
      'Autre': '#6c757d'
    };
    return colors[typeConge] || colors['Autre'];
  }

  trackByFn(index: number, item: DemandeConge): number {
    return item.id;
  }

  Math = Math;
}