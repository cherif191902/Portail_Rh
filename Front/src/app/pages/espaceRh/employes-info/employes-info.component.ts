import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from '../../../core/services/tokenservice.service';

export interface Employe {
  id: number;
  nom: string;
  prenom: string;
  matriculeP: string;
  email: string;
  dateEmbauche?: string;
  phone?: string;
  service?: {
    idService: number;
    nomService: string;
    libService: string;
  };
  roles: string[];
  isActive?: boolean;
}

export interface Service {
  idService: number;
  nomService: string;
  libService: string;
}

@Component({
  selector: 'app-employes-info',
  templateUrl: './employes-info.component.html',
  styleUrls: ['./employes-info.component.scss']
})
export class EmployesInfoComponent implements OnInit {

  employes: Employe[] = [];
  filteredEmployes: Employe[] = [];
  services: Service[] = [];
  roles: string[] = [];
  
  searchForm: FormGroup;
  loading = false;
  error: string | null = null;
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  
  // Filtres
  selectedService = '';
  selectedRole = '';
  searchText = '';

  // Colonnes du tableau
  displayedColumns = ['nomComplet', 'service', 'roles', 'matricule', 'email', 'actions'];

  private baseUrl = 'http://localhost:8089/api';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private tokenStorage: TokenStorage
  ) {
    this.searchForm = this.fb.group({
      searchText: [''],
      filterService: [''],
      filterRole: ['']
    });
  }

  ngOnInit(): void {
    // Vérifier d'abord l'authentification
    if (this.checkAuthentication()) {
      this.loadData();
      this.setupFormSubscriptions();
    }
  }

  /**
   * Configuration des souscriptions aux changements du formulaire
   */
  setupFormSubscriptions(): void {
    // Recherche en temps réel
    this.searchForm.get('searchText')?.valueChanges.subscribe(value => {
      this.searchText = value || '';
      this.applyFilters();
    });

    // Filtre par service
    this.searchForm.get('filterService')?.valueChanges.subscribe(value => {
      this.selectedService = value || '';
      this.applyFilters();
    });

    // Filtre par rôle
    this.searchForm.get('filterRole')?.valueChanges.subscribe(value => {
      this.selectedRole = value || '';
      this.applyFilters();
    });
  }

  /**
   * Headers avec token d'authentification
   */
  private getHttpHeaders(): HttpHeaders {
    const token = this.tokenStorage.getToken();
    console.log('Token récupéré:', token ? 'Token présent' : 'Aucun token');
    
    if (!token) {
      console.warn('Aucun token d\'authentification trouvé');
    }
    
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }

  /**
   * Charge toutes les données nécessaires
   */
  async loadData(): Promise<void> {
    this.loading = true;
    this.error = null;
    
    try {
      // Vérifier d'abord si l'utilisateur est connecté
      const token = this.tokenStorage.getToken();
      if (!token) {
        throw new Error('Utilisateur non authentifié. Veuillez vous reconnecter.');
      }

      console.log('Chargement des données employés et services...');
      
      // Charger les employés, services et extraire les rôles
      const [employesData, servicesData] = await Promise.all([
        this.http.get<Employe[]>(`${this.baseUrl}/users/all`, { headers: this.getHttpHeaders() }).toPromise(),
        this.http.get<Service[]>(`${this.baseUrl}/services`, { headers: this.getHttpHeaders() }).toPromise()
      ]);

      this.employes = employesData || [];
      this.services = servicesData || [];
      
      // Extraire tous les rôles uniques
      const allRoles = new Set<string>();
      this.employes.forEach(emp => {
        if (emp.roles) {
          emp.roles.forEach(role => {
            // Nettoyer le nom du rôle (enlever ROLE_ si présent)
            const cleanRole = role.replace('ROLE_', '');
            allRoles.add(cleanRole);
          });
        }
      });
      
      this.roles = Array.from(allRoles).sort();
      
      // Associer les services aux employés
      this.associateServicesWithEmployees();
      
      // Appliquer les filtres initiaux
      this.applyFilters();
      
    } catch (error: any) {
      console.error('Erreur lors du chargement des données:', error);
      
      if (error.status === 401) {
        this.error = 'Session expirée. Veuillez vous reconnecter.';
        // Optionnel : rediriger vers la page de login
        // this.router.navigate(['/auth/login']);
      } else if (error.status === 403) {
        this.error = 'Accès non autorisé. Vous n\'avez pas les permissions nécessaires.';
      } else if (error.status === 0) {
        this.error = 'Erreur de connexion au serveur. Vérifiez que le backend est démarré.';
      } else {
        this.error = error.message || 'Erreur lors du chargement des données des employés';
      }
    } finally {
      this.loading = false;
    }
  }

  /**
   * Associe les services aux employés (si cette info n'est pas directement fournie par l'API)
   */
  associateServicesWithEmployees(): void {
    // Cette méthode peut être étendue si l'API ne fournit pas directement l'info du service
    // Pour l'instant, on suppose que l'info est déjà incluse dans la réponse de l'API
  }

  /**
   * Vérifie l'état de l'authentification
   */
  checkAuthentication(): boolean {
    const token = this.tokenStorage.getToken();
    const user = this.tokenStorage.getUser();
    
    if (!token || !user) {
      this.error = 'Vous devez être connecté pour accéder à cette page.';
      return false;
    }
    
    // Vérifier si l'utilisateur a les permissions RH
    const userRoles = user.roles || [];
    const hasRhPermission = userRoles.some((role: string) => 
      ['ROLE_ADMIN', 'ROLE_RH', 'ADMIN', 'RH'].includes(role)
    );
    
    if (!hasRhPermission) {
      this.error = 'Vous n\'avez pas les permissions nécessaires pour accéder aux informations des employés.';
      return false;
    }
    
    return true;
  }

  /**
   * Applique tous les filtres actifs
   */
  applyFilters(): void {
    let filtered = [...this.employes];

    // Filtre par texte de recherche (nom, prénom, matricule, email)
    if (this.searchText.trim()) {
      const searchLower = this.searchText.toLowerCase();
      filtered = filtered.filter(emp => 
        emp.nom.toLowerCase().includes(searchLower) ||
        emp.prenom.toLowerCase().includes(searchLower) ||
        emp.matriculeP.toLowerCase().includes(searchLower) ||
        emp.email.toLowerCase().includes(searchLower)
      );
    }

    // Filtre par service
    if (this.selectedService) {
      filtered = filtered.filter(emp => 
        emp.service && emp.service.idService.toString() === this.selectedService
      );
    }

    // Filtre par rôle
    if (this.selectedRole) {
      filtered = filtered.filter(emp => 
        emp.roles && emp.roles.some(role => 
          role.replace('ROLE_', '') === this.selectedRole
        )
      );
    }

    this.filteredEmployes = filtered;
    this.totalItems = filtered.length;
    this.currentPage = 1; // Reset à la première page lors du filtrage
  }

  /**
   * Réinitialise tous les filtres
   */
  resetFilters(): void {
    this.searchForm.reset();
    this.searchText = '';
    this.selectedService = '';
    this.selectedRole = '';
    this.applyFilters();
  }

  /**
   * Obtient les employés pour la page actuelle
   */
  getPaginatedEmployes(): Employe[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredEmployes.slice(startIndex, endIndex);
  }

  /**
   * Change de page
   */
  onPageChange(page: number): void {
    this.currentPage = page;
  }

  /**
   * Calcule le nombre total de pages
   */
  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  /**
   * Obtient les numéros de pages à afficher
   */
  getPageNumbers(): number[] {
    const totalPages = this.getTotalPages();
    const pages: number[] = [];
    const maxPagesToShow = 5;
    
    let startPage = Math.max(1, this.currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    // Ajuster si on est près du début
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  /**
   * Formate les rôles pour l'affichage
   */
  formatRoles(roles: string[]): string {
    if (!roles || roles.length === 0) return 'Aucun rôle';
    
    return roles
      .map(role => role.replace('ROLE_', ''))
      .join(', ');
  }

  /**
   * Obtient le nom complet de l'employé
   */
  getFullName(employe: Employe): string {
    return `${employe.prenom} ${employe.nom}`;
  }

  /**
   * Obtient le nom du service
   */
  getServiceName(employe: Employe): string {
    return employe.service ? employe.service.nomService : 'Non assigné';
  }

  /**
   * Obtient la classe CSS pour le badge du rôle principal
   */
  getRoleBadgeClass(employe: Employe): string {
    if (!employe.roles || employe.roles.length === 0) return 'badge-secondary';
    
    const mainRole = employe.roles[0].replace('ROLE_', '');
    switch (mainRole) {
      case 'ADMIN': return 'badge-danger';
      case 'RH': return 'badge-primary';
      case 'CHEF_SERVICE':
      case 'CHEF_A':
      case 'CHEF_B': return 'badge-warning';
      case 'USER': return 'badge-success';
      default: return 'badge-secondary';
    }
  }

  /**
   * Actions sur les employés
   */
  voirDetails(employe: Employe): void {
    console.log('Voir détails:', employe);
    // TODO: Implémenter la modal de détails
  }

  modifierEmploye(employe: Employe): void {
    console.log('Modifier employé:', employe);
    // TODO: Implémenter la modal de modification
  }

  supprimerEmploye(employe: Employe): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer l'employé ${this.getFullName(employe)} ?`)) {
      console.log('Supprimer employé:', employe);
      // TODO: Implémenter la suppression
    }
  }

  /**
   * Export des données
   */
  exportToCSV(): void {
    const headers = ['Nom complet', 'Service', 'Rôles', 'Matricule', 'Email'];
    const data = this.filteredEmployes.map(emp => [
      this.getFullName(emp),
      this.getServiceName(emp),
      this.formatRoles(emp.roles),
      emp.matriculeP,
      emp.email
    ]);

    const csvContent = [
      headers.join(','),
      ...data.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'employes-info.csv';
    link.click();
    window.URL.revokeObjectURL(url);
  }

  /**
   * Rafraîchit les données
   */
  refresh(): void {
    this.error = null; // Réinitialiser l'erreur
    if (this.checkAuthentication()) {
      this.loadData();
    }
  }

  /**
   * TrackBy function pour optimiser les performances du ngFor
   */
  trackByEmploye(index: number, employe: Employe): number {
    return employe.id;
  }

  /**
   * Calcule le nombre minimum d'éléments affichés
   */
  getMaxDisplayed(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredEmployes.length);
  }
}