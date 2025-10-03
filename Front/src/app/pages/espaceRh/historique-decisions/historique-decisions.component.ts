import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RhService } from '../rh.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenStorage } from '../../../core/services/tokenservice.service';

interface DecisionHistory {
  id: number;
  personnel?: any;
  dateDeb?: string;
  dateFin?: string;
  nbJours?: number;
  repChefsNiveau1?: string;
  repChefsNiveau2?: string;
  repRh?: string;
  motif?: string;
  dateDecision?: string;
  decisionBy?: string;
  commentaire?: string;
}

@Component({
  selector: 'app-historique-decisions',
  templateUrl: './historique-decisions.component.html',
  styleUrls: ['./historique-decisions.component.scss']
})
export class HistoriqueDecisionsComponent implements OnInit {
  decisions: DecisionHistory[] = [];
  filteredDecisions: DecisionHistory[] = [];
  loading = false;
  message = '';
  errorMsg = '';
  
  // Filtres
  filterForm: FormGroup;
  searchTerm = '';
  statusFilter = '';
  dateFrom = '';
  dateTo = '';
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  constructor(
    private rhService: RhService,
    private fb: FormBuilder,
    public router: Router,
    private tokenStorage: TokenStorage
  ) {
    this.filterForm = this.fb.group({
      searchTerm: [''],
      statusFilter: [''],
      dateFrom: [''],
      dateTo: ['']
    });
  }

  ngOnInit(): void {
    // Vérifier l'authentification avant de charger les données
    const token = this.tokenStorage.getToken();
    if (!token) {
      this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
      setTimeout(() => {
        this.router.navigate(['/account/login']);
      }, 2000);
      return;
    }
    
    this.loadDecisions();
    this.setupFilterSubscription();
  }

  setupFilterSubscription(): void {
    this.filterForm.valueChanges.subscribe(() => {
      this.applyFilters();
    });
  }

  loadDecisions(): void {
    this.loading = true;
    this.errorMsg = '';

    this.rhService.getHistoriqueDecisions().subscribe({
      next: (data) => {
        this.decisions = data || [];
        this.applyFilters();
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des décisions:', error);
        this.loading = false;
        
        if (error.status === 401) {
          this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
          setTimeout(() => {
            this.router.navigate(['/account/login']);
          }, 2000);
        } else {
          // En cas d'erreur, charger des données de démonstration
          this.loadDemoData();
        }
      }
    });
  }

  loadDemoData(): void {
    this.errorMsg = 'Mode démonstration - Données d\'exemple affichées';
    
    // Données de démonstration pour l'historique des décisions
    this.decisions = [
      {
        id: 1,
        personnel: {
          nom: 'Dupont',
          prenom: 'Marie',
          matriculeP: 'EMP001'
        },
        dateDeb: '2024-12-01',
        dateFin: '2024-12-05',
        nbJours: 5,
        repChefsNiveau1: 'APPROUVE',
        repChefsNiveau2: 'APPROUVE',
        repRh: 'APPROUVE',
        motif: 'Congés annuels',
        dateDecision: '2024-11-28T10:30:00',
        decisionBy: 'Admin RH',
        commentaire: 'Demande approuvée'
      },
      {
        id: 2,
        personnel: {
          nom: 'Martin',
          prenom: 'Jean',
          matriculeP: 'EMP002'
        },
        dateDeb: '2024-12-10',
        dateFin: '2024-12-12',
        nbJours: 3,
        repChefsNiveau1: 'APPROUVE',
        repChefsNiveau2: 'APPROUVE',
        repRh: 'REFUSE',
        motif: 'Congés maladie',
        dateDecision: '2024-12-05T14:15:00',
        decisionBy: 'Admin RH',
        commentaire: 'Justificatif médical manquant'
      },
      {
        id: 3,
        personnel: {
          nom: 'Bernard',
          prenom: 'Sophie',
          matriculeP: 'EMP003'
        },
        dateDeb: '2024-12-15',
        dateFin: '2024-12-20',
        nbJours: 6,
        repChefsNiveau1: 'APPROUVE',
        repChefsNiveau2: 'EN_ATTENTE',
        repRh: 'EN_ATTENTE',
        motif: 'Congés maternité',
        dateDecision: null,
        decisionBy: null,
        commentaire: null
      }
    ];
    
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = [...this.decisions];
    
    const searchTerm = this.filterForm.get('searchTerm')?.value?.toLowerCase() || '';
    const statusFilter = this.filterForm.get('statusFilter')?.value || '';
    const dateFrom = this.filterForm.get('dateFrom')?.value || '';
    const dateTo = this.filterForm.get('dateTo')?.value || '';

    // Filtre par recherche
    if (searchTerm) {
      filtered = filtered.filter(decision => 
        (decision.personnel?.nom?.toLowerCase().includes(searchTerm)) ||
        (decision.personnel?.prenom?.toLowerCase().includes(searchTerm)) ||
        (decision.personnel?.matriculeP?.toLowerCase().includes(searchTerm))
      );
    }

    // Filtre par statut
    if (statusFilter) {
      filtered = filtered.filter(decision => decision.repRh === statusFilter);
    }

    // Filtre par date
    if (dateFrom) {
      filtered = filtered.filter(decision => 
        new Date(decision.dateDeb || '') >= new Date(dateFrom)
      );
    }

    if (dateTo) {
      filtered = filtered.filter(decision => 
        new Date(decision.dateFin || '') <= new Date(dateTo)
      );
    }

    this.filteredDecisions = filtered;
    this.totalItems = filtered.length;
    this.currentPage = 1;
  }

  getBadgeClass(status?: string): string {
    switch(status) {
      case 'APPROUVE': return 'success';
      case 'REFUSE': return 'danger';
      case 'EN_ATTENTE': return 'warning';
      default: return 'secondary';
    }
  }

  getStatusText(status?: string): string {
    switch(status) {
      case 'APPROUVE': return 'Approuvé';
      case 'REFUSE': return 'Refusé';
      case 'EN_ATTENTE': return 'En attente';
      default: return 'Non défini';
    }
  }

  getPaginatedDecisions(): DecisionHistory[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredDecisions.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  getApprovedCount(): number {
    return this.filteredDecisions.filter(d => d.repRh === 'APPROUVE').length;
  }

  getRejectedCount(): number {
    return this.filteredDecisions.filter(d => d.repRh === 'REFUSE').length;
  }

  getPendingCount(): number {
    return this.filteredDecisions.filter(d => d.repRh === 'EN_ATTENTE').length;
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  getPageNumbers(): number[] {
    const totalPages = this.getTotalPages();
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  clearFilters(): void {
    this.filterForm.reset();
    this.applyFilters();
  }

  exportToExcel(): void {
    // Implémentation future pour l'export Excel
    this.message = 'Fonctionnalité d\'export en cours de développement';
    setTimeout(() => this.message = '', 3000);
  }

  refresh(): void {
    this.loadDecisions();
  }
}
