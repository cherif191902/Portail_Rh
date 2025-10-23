import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from '../../../core/services/tokenservice.service';
import { EmployesService, EmployeComplet, Service, ServiceComplet } from '../../../services/employes.service';

// Interface pour compatibilité avec le code existant
export interface Employe extends EmployeComplet {
  isActive?: boolean;
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
  displayedColumns = ['nomComplet', 'service', 'chefs', 'rhResponsable', 'roles', 'email', 'actions'];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private tokenStorage: TokenStorage,
    private employesService: EmployesService
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
   * Debug de l'authentification - méthode temporaire
   */
  debugAuthentication(): void {
    console.log('🔧 === DEBUG AUTHENTIFICATION ===');
    
    const token = this.tokenStorage.getToken();
    const user = this.tokenStorage.getUser();
    
    console.log('🔑 Token:', token ? `Présent (${token.length} chars)` : 'ABSENT');
    console.log('👤 User object:', user);
    console.log('🏷️ User roles:', user?.roles);
    console.log('🛡️ hasRhPermissions():', this.employesService.hasRhPermissions());
    
    // Afficher les items du sessionStorage
    console.log('💾 SessionStorage auth-token:', sessionStorage.getItem('auth-token'));
    console.log('💾 SessionStorage auth-user:', sessionStorage.getItem('auth-user'));
    
    // Test simple d'appel API
    console.log('🧪 Test appel API simple...');
    try {
      const headers = this.employesService['getHttpHeaders']();
      console.log('📡 Headers générés:', headers);
    } catch (error) {
      console.error('❌ Erreur génération headers:', error);
    }
    
    alert(`Debug Auth - Token: ${token ? 'Présent' : 'ABSENT'} | User: ${user?.username || user?.email || 'ABSENT'} | Roles: ${user?.roles?.join(', ') || 'AUCUN'}`);
  }

  /**
   * Test de l'ancien endpoint - méthode temporaire
   */
  async testOldEndpoint(): Promise<void> {
    console.log('🧪 === TEST ANCIEN ENDPOINT ===');
    
    try {
      const token = this.tokenStorage.getToken();
      if (!token) {
        alert('❌ Aucun token trouvé !');
        return;
      }

      console.log('🔑 Token trouvé, test appel API...');

      // Test direct avec l'ancien endpoint qui marche
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });

      const result = await this.http.get('http://localhost:8089/api/services/personnels', { headers }).toPromise();
      
      console.log('✅ Ancien endpoint fonctionne !', result);
      alert(`✅ Ancien endpoint OK ! ${Array.isArray(result) ? result.length : 0} employés trouvés`);
      
      // Utiliser ces données temporairement
      if (Array.isArray(result)) {
        this.employes = result as any[];
        this.filteredEmployes = [...this.employes];
        this.totalItems = this.employes.length;
        console.log('📊 Données temporaires chargées:', this.employes.length, 'employés');
      }

    } catch (error: any) {
      console.error('❌ Ancien endpoint échoue aussi:', error);
      alert(`❌ Ancien endpoint échoue : ${error.status} ${error.statusText}`);
    }
  }

  /**
   * Vérifie la cohérence globale du système
   */
  async verifierCoherenceGlobale(): Promise<void> {
    try {
      console.log('🔍 Vérification de la cohérence globale...');
      const result = await this.employesService.verifierCoherenceGlobale().toPromise();
      
      if (result && result.coherent) {
        console.log('✅ Système cohérent !');
        alert('✅ Système cohérent ! Toutes les données sont correctes.');
      } else {
        console.warn('⚠️ Incohérences détectées:', result);
        alert('⚠️ Des incohérences ont été détectées. Consultez les logs pour plus de détails.');
      }
    } catch (error: any) {
      console.error('❌ Erreur lors de la vérification:', error);
      alert('❌ Erreur lors de la vérification de cohérence. Consultez les logs.');
    }
  }

  /**
   * Charge toutes les données nécessaires
   */
  async loadData(): Promise<void> {
    this.loading = true;
    this.error = null;
    
    try {
      console.log('🚀 Chargement données employés...');
      
      // Charger les employés et services en parallèle selon les spécifications
      const [services, employes] = await Promise.all([
        this.employesService.getAllServices().toPromise(),
        this.employesService.getAllEmployesComplet().toPromise()
      ]);
      
      this.services = services || [];
      this.employes = employes || [];
      
      console.log(`✅ Chargé: ${this.employes.length} employés, ${this.services.length} services`);
      
      // Extraire les rôles uniques
      const allRoles = new Set<string>();
      this.employes.forEach(emp => {
        if (emp.roles) {
          emp.roles.forEach(role => {
            const cleanRole = role.replace('ROLE_', '');
            allRoles.add(cleanRole);
          });
        }
      });
      
      this.roles = Array.from(allRoles).sort();
      this.applyFilters();
      
    } catch (error: any) {
      console.error('❌ Erreur chargement:', error);
      
      if (error.status === 401) {
        this.error = 'Session expirée. Veuillez vous reconnecter.';
      } else if (error.status === 403) {
        this.error = 'Accès non autorisé. Permissions insuffisantes.';
      } else if (error.status === 0) {
        this.error = 'Erreur de connexion. Vérifiez que le backend est démarré.';
      } else {
        this.error = error.message || 'Erreur lors du chargement des données';
      }
    } finally {
      this.loading = false;
    }
  }

  /**
   * Vérifie l'état de l'authentification
   */
  checkAuthentication(): boolean {
    console.log('🔐 Vérification de l\'authentification...');
    
    const token = this.tokenStorage.getToken();
    const user = this.tokenStorage.getUser();
    
    console.log('🔑 Token présent:', !!token);
    console.log('👤 Utilisateur présent:', !!user);
    
    if (!token) {
      console.error('❌ Aucun token trouvé');
      this.error = 'Vous devez être connecté pour accéder à cette page. Veuillez vous reconnecter.';
      return false;
    }
    
    if (!user) {
      console.error('❌ Aucun utilisateur trouvé');
      this.error = 'Session invalide. Veuillez vous reconnecter.';
      return false;
    }
    
    console.log('👤 Utilisateur:', user.username || user.email);
    console.log('🏷️ Rôles utilisateur:', user.roles);
    
    // Vérifier les permissions RH
    if (!this.employesService.hasRhPermissions()) {
      console.warn('⚠️ Permissions insuffisantes');
      this.error = 'Vous n\'avez pas les permissions nécessaires pour accéder aux informations des employés.';
      return false;
    }
    
    console.log('✅ Authentification valide');
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
   * Obtient le nom complet d'une personne (pour chefs et RH)
   */
  getPersonnelName(personnel: any): string {
    if (!personnel) return '';
    return `${personnel.prenom} ${personnel.nom}`;
  }

  /**
   * Obtient les noms des chefs du service
   */
  getChefNames(employe: Employe): string {
    if (!employe.service) return 'Aucun chef';
    
    const service = employe.service as any;
    const chefs = [];
    
    // Vérifier les chefs selon les différents formats possibles
    if (service.chefA || service.chef_a_id) {
      const chefA = service.chefA || service.chefADetails;
      if (chefA) {
        chefs.push(`Chef A: ${this.getPersonnelName(chefA)}`);
      } else if (service.chef_a_id) {
        chefs.push(`Chef A: ID ${service.chef_a_id}`);
      }
    }
    
    if (service.chefB || service.chef_b_id) {
      const chefB = service.chefB || service.chefBDetails;
      if (chefB) {
        chefs.push(`Chef B: ${this.getPersonnelName(chefB)}`);
      } else if (service.chef_b_id) {
        chefs.push(`Chef B: ID ${service.chef_b_id}`);
      }
    }
    
    return chefs.length > 0 ? chefs.join(' | ') : 'Aucun chef assigné';
  }

  /**
   * Obtient le nom du RH responsable
   */
  getRhName(employe: Employe): string {
    if (!employe.service) {
      return 'Aucun RH assigné';
    }
    
    const service = employe.service as any;
    
    // Vérifier le RH selon les différents formats possibles
    if (service.rhResponsable) {
      return this.getPersonnelName(service.rhResponsable);
    } else if (service.rh_responsable_id) {
      return `RH ID: ${service.rh_responsable_id}`;
    }
    
    return 'Aucun RH assigné';
  }

  /**
   * Obtient la description complète du service avec hiérarchie
   */
  getServiceDescription(employe: Employe): string {
    if (!employe.service) return 'Non assigné';
    
    const parts = [employe.service.nomService];
    
    if (employe.service.libService && employe.service.libService !== employe.service.nomService) {
      parts.push(`(${employe.service.libService})`);
    }
    
    return parts.join(' ');
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
    const headers = ['Nom complet', 'Service', 'Chefs', 'RH Responsable', 'Rôles', 'Matricule', 'Email'];
    const data = this.filteredEmployes.map(emp => [
      this.getFullName(emp),
      this.getServiceName(emp),
      this.getChefNames(emp),
      this.getRhName(emp),
      this.formatRoles(emp.roles),
      emp.matriculeP,
      emp.email || ''
    ]);

    const csvContent = [
      headers.join(','),
      ...data.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `employes-info-complet-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  /**
   * Rafraîchit les données
   */
  refresh(): void {
    this.error = null;
    if (this.checkAuthentication()) {
      this.loadData();
    }
  }

  /**
   * Test d'authentification avec le backend
   */
  async testAuthentication(): Promise<void> {
    try {
      console.log('🧪 Test authentification backend...');
      const result = await this.employesService.testAuthentication().toPromise();
      console.log('✅ Auth test réussi:', result);
      alert(`✅ Auth OK: ${result.user} - ${result.authorities}`);
    } catch (error: any) {
      console.error('❌ Auth test échoué:', error);
      alert(`❌ Auth échoué: ${error.status} ${error.message}`);
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