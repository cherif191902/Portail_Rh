import { Component, OnInit } from '@angular/core';
import { AffectationSimpleService, Chef, Service, Affectation, AffectationRequest, AffectationResponse, AffectationChefRequest } from '../../../services/affectation-simple.service';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { forkJoin } from 'rxjs';

interface AffectationForm {
  chefId: number | null;
  serviceId: number | null;
}

interface ModificationForm {
  serviceId: number | null;
  nouveauChefId: number | null;
}

interface AffectationChefForm {
  serviceId: number | null;
  chefAId: number | null;
  chefBId: number | null;
}

type MessageType = 'success' | 'error' | 'warning';
type ModeOperation = 'create' | 'edit' | 'view';

@Component({
  selector: 'app-affectation-chefs',
  templateUrl: './affectation-chefs.component.html',
  styleUrls: ['./affectation-chefs.component.scss']
})
export class AffectationChefsComponent implements OnInit {

  // Données principales
  services: Service[] = [];
  chefsDisponibles: Chef[] = [];
  personnelsService: Chef[] = []; // Personnels du service sélectionné (pour Chef A et Chef B)
  affectations: Affectation[] = [];
  
  // Nouveau formulaire unifié
  selectedServiceId: number | null = null;
  selectedChefAId: number | null = null;
  selectedChefBId: number | null = null;
  currentChefA: Chef | null = null;
  currentChefB: Chef | null = null;
  loadingPersonnels = false;
  
  // Anciens formulaires (conservés pour compatibilité)
  affectationForm: AffectationForm = {
    chefId: null,
    serviceId: null
  };
  
  modificationForm: ModificationForm = {
    serviceId: null,
    nouveauChefId: null
  };

  affectationChefForm: AffectationChefForm = {
    serviceId: null,
    chefAId: null,
    chefBId: null
  };
  
  // État de l'interface
  loading = false;
  loadingAction = false;
  message = '';
  messageType: MessageType = 'success';
  currentUser: any = null;
  modeOperation: ModeOperation = 'view';
  selectedAffectation: Affectation | null = null;

  constructor(
    private affectationService: AffectationSimpleService,
    private tokenStorage: TokenStorage
  ) {}

  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
    const token = this.tokenStorage.getToken();
    
    // Vérifier si on a un token
    if (!token) {
      // Chercher dans d'autres endroits
      const sessionToken = sessionStorage.getItem('auth-token');
      const localToken = localStorage.getItem('accessToken');
      
      if (!sessionToken && !localToken) {
        this.showMessage('❌ Aucune session trouvée. Veuillez vous reconnecter.', 'error');
        return;
      }
    }
    
    this.loadData();
  }

  /**
   * Charger toutes les données nécessaires
   */
  loadData(): void {
    this.loading = true;
    this.clearMessage();

    console.log('📊 Chargement des données...');

    forkJoin({
      services: this.affectationService.getServices(),
      chefsDisponibles: this.affectationService.getChefsDisponibles(),
      affectations: this.affectationService.getAllAffectations()
    }).subscribe({
      next: (data) => {
        this.services = data.services;
        this.chefsDisponibles = data.chefsDisponibles;
        this.affectations = data.affectations;
        this.loading = false;
        
        console.log('✅ Données chargées:');
        console.log('📋 Services:', this.services.length);
        console.log('👥 Chefs disponibles:', this.chefsDisponibles.length);
        console.log('🔗 Affectations:', this.affectations.length);
        
        if (this.chefsDisponibles.length === 0) {
          this.showMessage('Aucun chef disponible pour affectation.', 'warning');
        }
      },
      error: (error) => {
        console.error('❌ Erreur lors du chargement:', error);
        this.showMessage('Erreur lors du chargement des données. Vérifiez votre connexion.', 'error');
        this.loading = false;
      }
    });
  }

  // ===== CRUD OPERATIONS =====

  /**
   * Créer une nouvelle affectation
   */
  onSubmitAffectation(): void {
    if (!this.affectationForm.chefId || !this.affectationForm.serviceId) {
      this.showMessage('Veuillez sélectionner un chef et un service.', 'error');
      return;
    }

    // Vérifications côté client
    if (this.isChefAlreadyAssigned(this.affectationForm.chefId)) {
      this.showMessage('❌ Ce chef est déjà affecté à un service.', 'error');
      return;
    }

    if (this.isServiceAlreadyAssigned(this.affectationForm.serviceId)) {
      this.showMessage('❌ Ce service a déjà un chef assigné.', 'error');
      return;
    }

    this.loadingAction = true;
    this.clearMessage();

    const request: AffectationRequest = {
      chefId: this.affectationForm.chefId,
      serviceId: this.affectationForm.serviceId
    };

    this.affectationService.creerAffectation(request).subscribe({
      next: (response) => {
        this.loadingAction = false;
        if (response.success) {
          this.showMessage('✅ ' + response.message, 'success');
          this.resetForm();
          this.loadData();
        } else {
          this.showMessage('❌ ' + response.message, 'error');
        }
      },
      error: (error) => {
        this.loadingAction = false;
        console.error('❌ Erreur création affectation:', error);
        
        let errorMessage = 'Erreur lors de la création de l\'affectation';
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        } else if (error.status === 401) {
          errorMessage = 'Session expirée. Veuillez vous reconnecter.';
        }
        
        this.showMessage('❌ ' + errorMessage, 'error');
      }
    });
  }

  /**
   * Modifier une affectation existante
   */
  onSubmitModification(): void {
    if (!this.modificationForm.serviceId || !this.modificationForm.nouveauChefId) {
      this.showMessage('Veuillez sélectionner un service et un nouveau chef.', 'error');
      return;
    }

    this.loadingAction = true;
    this.clearMessage();

    this.affectationService.modifierAffectation(
      this.modificationForm.serviceId,
      this.modificationForm.nouveauChefId
    ).subscribe({
      next: (response) => {
        this.loadingAction = false;
        if (response.success) {
          this.showMessage('✅ ' + response.message, 'success');
          this.resetModificationForm();
          this.modeOperation = 'view';
          this.loadData();
        } else {
          this.showMessage('❌ ' + response.message, 'error');
        }
      },
      error: (error) => {
        this.loadingAction = false;
        console.error('❌ Erreur modification affectation:', error);
        
        let errorMessage = 'Erreur lors de la modification de l\'affectation';
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }
        
        this.showMessage('❌ ' + errorMessage, 'error');
      }
    });
  }

  /**
   * Supprimer une affectation
   */
  supprimerAffectation(serviceId: number): void {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette affectation ?')) {
      return;
    }

    this.loadingAction = true;
    this.clearMessage();

    this.affectationService.supprimerAffectation(serviceId).subscribe({
      next: (response) => {
        this.loadingAction = false;
        if (response.success) {
          this.showMessage('✅ ' + response.message, 'success');
          this.loadData();
        } else {
          this.showMessage('❌ ' + response.message, 'error');
        }
      },
      error: (error) => {
        this.loadingAction = false;
        console.error('❌ Erreur suppression affectation:', error);
        
        let errorMessage = 'Erreur lors de la suppression de l\'affectation';
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }
        
        this.showMessage('❌ ' + errorMessage, 'error');
      }
    });
  }

  // ===== NOUVELLES MÉTHODES CHEF A / CHEF B =====

  /**
   * Affecter un Chef A à un service
   */
  affecterChefA(): void {
    if (!this.affectationChefForm.serviceId || !this.affectationChefForm.chefAId) {
      this.showMessage('Veuillez sélectionner un service et un Chef A.', 'error');
      return;
    }

    this.loadingAction = true;
    this.clearMessage();

    const request: AffectationChefRequest = {
      serviceId: this.affectationChefForm.serviceId,
      chefId: this.affectationChefForm.chefAId,
      typeChef: 'CHEF_A'
    };

    this.affectationService.affecterChef(request).subscribe({
      next: (response) => {
        this.loadingAction = false;
        if (response.success) {
          this.showMessage('✅ ' + response.message, 'success');
          this.resetAffectationChefForm();
          this.loadData();
        } else {
          this.showMessage('❌ ' + response.message, 'error');
        }
      },
      error: (error) => {
        this.loadingAction = false;
        console.error('❌ Erreur affectation Chef A:', error);
        
        let errorMessage = 'Erreur lors de l\'affectation du Chef A';
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }
        
        this.showMessage('❌ ' + errorMessage, 'error');
      }
    });
  }

  /**
   * Affecter un Chef B à un service
   */
  affecterChefB(): void {
    if (!this.affectationChefForm.serviceId || !this.affectationChefForm.chefBId) {
      this.showMessage('Veuillez sélectionner un service et un Chef B.', 'error');
      return;
    }

    this.loadingAction = true;
    this.clearMessage();

    const request: AffectationChefRequest = {
      serviceId: this.affectationChefForm.serviceId,
      chefId: this.affectationChefForm.chefBId,
      typeChef: 'CHEF_B'
    };

    this.affectationService.affecterChef(request).subscribe({
      next: (response) => {
        this.loadingAction = false;
        if (response.success) {
          this.showMessage('✅ ' + response.message, 'success');
          this.resetAffectationChefForm();
          this.loadData();
        } else {
          this.showMessage('❌ ' + response.message, 'error');
        }
      },
      error: (error) => {
        this.loadingAction = false;
        console.error('❌ Erreur affectation Chef B:', error);
        
        let errorMessage = 'Erreur lors de l\'affectation du Chef B';
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }
        
        this.showMessage('❌ ' + errorMessage, 'error');
      }
    });
  }

  /**
   * Supprimer l'affectation d'un Chef A (version optimisée)
   */
  async supprimerChefA(serviceId: number): Promise<void> {
    if (!confirm('Êtes-vous sûr de vouloir supprimer l\'affectation du Chef A ?')) {
      return;
    }

    this.loadingAction = true;
    this.clearMessage();

    try {
      await this.affectationService.supprimerChef(serviceId, 'CHEF_A').toPromise();
      this.showMessage('✅ Chef A supprimé avec succès', 'success');
      this.refreshData(); // Rafraîchissement ciblé
    } catch (error: any) {
      console.error('❌ Erreur suppression Chef A:', error);
      
      let errorMessage = 'Erreur lors de la suppression du Chef A';
      if (error?.status === 401) {
        errorMessage = 'Session expirée. Veuillez vous reconnecter.';
      } else if (error?.status === 403) {
        errorMessage = 'Accès non autorisé. Permissions insuffisantes.';
      } else if (error?.error?.message) {
        errorMessage = error.error.message;
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      this.showMessage('❌ ' + errorMessage, 'error');
    } finally {
      this.loadingAction = false;
    }
  }

  /**
   * Supprimer l'affectation d'un Chef B (version optimisée)
   */
  async supprimerChefB(serviceId: number): Promise<void> {
    if (!confirm('Êtes-vous sûr de vouloir supprimer l\'affectation du Chef B ?')) {
      return;
    }

    this.loadingAction = true;
    this.clearMessage();

    try {
      await this.affectationService.supprimerChef(serviceId, 'CHEF_B').toPromise();
      this.showMessage('✅ Chef B supprimé avec succès', 'success');
      this.refreshData(); // Rafraîchissement ciblé
    } catch (error: any) {
      console.error('❌ Erreur suppression Chef B:', error);
      
      let errorMessage = 'Erreur lors de la suppression du Chef B';
      if (error?.status === 401) {
        errorMessage = 'Session expirée. Veuillez vous reconnecter.';
      } else if (error?.status === 403) {
        errorMessage = 'Accès non autorisé. Permissions insuffisantes.';
      } else if (error?.error?.message) {
        errorMessage = error.error.message;
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      this.showMessage('❌ ' + errorMessage, 'error');
    } finally {
      this.loadingAction = false;
    }
  }

  // ===== UTILITY METHODS =====

  /**
   * Vérifier si un chef est déjà affecté
   */
  isChefAlreadyAssigned(chefId: number): boolean {
    return this.affectationService.isChefAlreadyAssigned(chefId, this.affectations);
  }

  /**
   * Vérifier si un service a déjà un chef
   */
  isServiceAlreadyAssigned(serviceId: number): boolean {
    return this.affectations.some(affectation => 
      affectation.serviceId === serviceId && affectation.hasChef
    );
  }

  // ===== UI MANAGEMENT METHODS =====

  /**
   * Passer en mode création
   */
  activerModeCreation(): void {
    this.modeOperation = 'create';
    this.selectedAffectation = null;
    this.resetForm();
    this.clearMessage();
  }

  /**
   * Passer en mode création avec service pré-sélectionné
   */
  activerModeCreationPourService(serviceId: number): void {
    this.activerModeCreation();
    this.affectationForm.serviceId = serviceId;
  }

  /**
   * Passer en mode modification
   */
  activerModeModification(affectation: Affectation): void {
    this.modeOperation = 'edit';
    this.selectedAffectation = affectation;
    this.modificationForm = {
      serviceId: affectation.serviceId,
      nouveauChefId: null
    };
    this.clearMessage();
  }

  /**
   * Revenir au mode visualisation
   */
  annulerOperation(): void {
    this.modeOperation = 'view';
    this.selectedAffectation = null;
    this.resetForm();
    this.resetModificationForm();
    this.clearMessage();
  }

  /**
   * Obtenir le nom du service par son ID
   */
  getServiceName(serviceId: number): string {
    const service = this.services.find(s => s.idService === serviceId);
    return service ? service.nomService : 'Service inconnu';
  }

  /**
   * Obtenir le nom complet d'un chef par son ID
   */
  getChefName(chefId: number): string {
    const chef = this.chefsDisponibles.find(c => c.id === chefId);
    return chef ? `${chef.prenom} ${chef.nom}` : 'Chef inconnu';
  }

  /**
   * Obtenir les chefs vraiment disponibles (pas déjà affectés)
   */
  getChefsLibres(): Chef[] {
    return this.chefsDisponibles.filter(chef => !chef.dejaAffecte);
  }

  /**
   * Obtenir les personnels du service sélectionné (pour Chef A et Chef B)
   */
  getPersonnelsService(): Chef[] {
    return this.personnelsService.filter(personnel => 
      // Exclure les personnels déjà affectés comme Chef A ou Chef B
      personnel.id !== this.affectationChefForm.chefAId && 
      personnel.id !== this.affectationChefForm.chefBId
    );
  }

  /**
   * Méthode appelée quand le service change dans le formulaire Chef A/B
   */
  onServiceChangeForChefs(): void {
    if (this.affectationChefForm.serviceId) {
      console.log('🔄 Changement de service pour affectation Chef A/B:', this.affectationChefForm.serviceId);
      
      // Réinitialiser les sélections de chefs
      this.affectationChefForm.chefAId = null;
      this.affectationChefForm.chefBId = null;
      
      // Charger les personnels du service
      this.chargerPersonnelsService(this.affectationChefForm.serviceId);
    } else {
      // Vider la liste si aucun service sélectionné
      this.personnelsService = [];
      this.affectationChefForm.chefAId = null;
      this.affectationChefForm.chefBId = null;
    }
  }

  /**
   * Charger les personnels d'un service spécifique
   */
  private chargerPersonnelsService(serviceId: number): void {
    console.log('📡 Chargement des personnels du service:', serviceId);
    
    this.affectationService.getPersonnelsParService(serviceId).subscribe({
      next: (personnels) => {
        this.personnelsService = personnels;
        console.log('✅ Personnels du service chargés:', this.personnelsService.length);
      },
      error: (error) => {
        console.error('❌ Erreur chargement personnels du service:', error);
        this.showMessage('Erreur lors du chargement des personnels du service.', 'error');
        this.personnelsService = [];
      }
    });
  }

  /**
   * Obtenir les services sans chef
   */
  getServicesLibres(): Service[] {
    return this.services.filter(service => !service.hasChef);
  }

  /**
   * Compter les affectations complètes
   */
  getAffectationsCompletes(): number {
    return this.affectations.filter(a => a.hasChef).length;
  }

  /**
   * Compter les affectations en attente
   */
  getAffectationsEnAttente(): number {
    return this.affectations.filter(a => !a.hasChef).length;
  }

  /**
   * Réinitialiser le formulaire de création
   */
  resetForm(): void {
    this.affectationForm = {
      chefId: null,
      serviceId: null
    };
    
    // Réinitialiser aussi le nouveau formulaire unifié
    this.selectedServiceId = null;
    this.resetServiceSelection();
    
    // Recharger les données
    this.loadData();
  }

  /**
   * Réinitialiser le formulaire de modification
   */
  resetModificationForm(): void {
    this.modificationForm = {
      serviceId: null,
      nouveauChefId: null
    };
  }

  /**
   * Réinitialiser le formulaire d'affectation Chef A/B
   */
  resetAffectationChefForm(): void {
    this.affectationChefForm = {
      serviceId: null,
      chefAId: null,
      chefBId: null
    };
    // Vider la liste des personnels du service
    this.personnelsService = [];
  }

  // ===== UTILITY AND DEBUG METHODS =====

  /**
   * Actualiser les données (version optimisée)
   */
  refreshData(): void {
    console.log('🔄 Rafraîchissement rapide des données...');

    forkJoin({
      services: this.affectationService.getServices(),
      affectations: this.affectationService.getAllAffectations()
    }).subscribe({
      next: (data) => {
        this.services = data.services;
        this.affectations = data.affectations;
        console.log('✅ Données rafraîchies rapidement');
      },
      error: (error) => {
        console.error('❌ Erreur lors du rafraîchissement:', error);
        // Fallback vers rechargement complet si erreur
        this.loadData();
      }
    });
  }

  /**
   * Afficher un message
   */
  showMessage(message: string, type: MessageType): void {
    this.message = message;
    this.messageType = type;
    
    // Auto-effacer le message après 5 secondes pour les messages de succès
    if (type === 'success') {
      setTimeout(() => {
        this.clearMessage();
      }, 5000);
    }
  }

  /**
   * Effacer le message
   */
  clearMessage(): void {
    this.message = '';
  }

  /**
   * Diagnostic de l'authentification
   */
  diagnoseAuth(): void {
    console.log('🔍 === DIAGNOSTIC D\'AUTHENTIFICATION ===');
    
    const localToken = localStorage.getItem('accessToken');
    console.log('🗂️ localStorage accessToken:', !!localToken);
    
    const sessionToken = sessionStorage.getItem('auth-token');
    const storageToken = this.tokenStorage.getToken();
    const storageUser = this.tokenStorage.getUser();
    // Logs supprimés pour éviter le spam dans la console
  }

  /**
   * Test des endpoints disponibles
   */
  testEndpoints(): void {
    console.log('🧪 Test de connexion au backend...');
    this.affectationService.testEndpoints().subscribe({
      next: (results) => {
        console.log('✅ Tests terminés avec succès:', results);
        this.showMessage('✅ Connexion au backend réussie ! Vérifiez la console.', 'success');
      },
      error: (error) => {
        console.error('❌ Erreur de connexion au backend:', error);
        let errorMsg = 'Erreur de connexion';
        
        if (error.status === 0) {
          errorMsg = '❌ Impossible de joindre le backend. Vérifiez que le serveur est démarré sur http://localhost:8089';
        } else if (error.status === 401) {
          errorMsg = '❌ Erreur d\'authentification. Token JWT manquant ou invalide.';
        } else if (error.status === 403) {
          errorMsg = '❌ Accès interdit. Rôle RH/ADMIN requis.';
        } else if (error.error && error.error.message) {
          errorMsg = `❌ ${error.error.message}`;
        }
        
        this.showMessage(errorMsg, 'error');
      }
    });
  }

  /**
   * Test simple de connectivité
   */
  testBackendConnection(): void {
    this.showMessage('🔄 Test de connexion en cours...', 'warning');
    this.affectationService.getServices().subscribe({
      next: (services) => {
        console.log('✅ Connexion backend réussie, services reçus:', services);
        this.showMessage(`✅ Backend accessible ! ${services.length} services trouvés.`, 'success');
      },
      error: (error) => {
        console.error('❌ Échec de connexion:', error);
        this.showMessage('❌ Échec de connexion au backend. Vérifiez la console.', 'error');
      }
    });
  }

  // ===== NOUVELLES MÉTHODES POUR LE FORMULAIRE UNIFIÉ =====

  /**
   * Méthode appelée lors du changement de service
   */
  onServiceChange(): void {
    if (this.selectedServiceId) {
      console.log('🔄 Changement de service:', this.selectedServiceId);
      this.loadServiceDetails(this.selectedServiceId);
      this.loadPersonnelsForService(this.selectedServiceId);
    } else {
      this.resetServiceSelection();
    }
  }

  /**
   * Charger les détails du service sélectionné (chefs actuels)
   */
  private loadServiceDetails(serviceId: number): void {
    // Trouver le service dans la liste
    const service = this.services.find(s => s.idService === serviceId);
    if (service) {
      // Récupérer les chefs actuels depuis les affectations
      const affectation = this.affectations.find(a => a.serviceId === serviceId);
      this.currentChefA = affectation?.chefA || null;
      this.currentChefB = affectation?.chefB || null;
      
      // 🔄 INITIALISER LES CHAMPS AVEC LES CHEFS ACTUELS
      this.selectedChefAId = this.currentChefA?.id || null;
      this.selectedChefBId = this.currentChefB?.id || null;
      
      console.log('📋 Service sélectionné:', service.nomService);
      console.log('👤 Chef A actuel:', this.currentChefA);
      console.log('👤 Chef B actuel:', this.currentChefB);
      console.log('🔧 Champs initialisés - Chef A ID:', this.selectedChefAId);
      console.log('🔧 Champs initialisés - Chef B ID:', this.selectedChefBId);
    }
  }

  /**
   * Charger les personnels du service sélectionné
   */
  private loadPersonnelsForService(serviceId: number): void {
    this.loadingPersonnels = true;
    this.personnelsService = [];
    
    this.affectationService.getPersonnelsParService(serviceId).subscribe({
      next: (personnels) => {
        this.personnelsService = personnels;
        this.loadingPersonnels = false;
        console.log('✅ Personnels du service chargés:', this.personnelsService.length);
      },
      error: (error) => {
        console.error('❌ Erreur chargement personnels du service:', error);
        this.showMessage('Erreur lors du chargement des personnels du service.', 'error');
        this.loadingPersonnels = false;
        this.personnelsService = [];
      }
    });
  }

  /**
   * Obtenir les personnels disponibles pour affectation
   */
  getAvailablePersonnels(type: 'CHEF_A' | 'CHEF_B' | 'ALL'): Chef[] {
    if (!this.personnelsService.length) {
      return [];
    }

    return this.personnelsService.filter(personnel => {
      // Exclure les chefs déjà affectés selon le type demandé
      if (type === 'CHEF_A') {
        return personnel.id !== this.currentChefB?.id;
      } else if (type === 'CHEF_B') {
        return personnel.id !== this.currentChefA?.id;
      }
      return true; // Pour 'ALL', retourner tous les personnels
    });
  }

  /**
   * Affecter un chef (Chef A ou Chef B) avec mise à jour automatique complète
   */
  affecterChef(typeChef: 'CHEF_A' | 'CHEF_B'): void {
    if (!this.selectedServiceId) {
      this.showMessage('Veuillez sélectionner un service.', 'error');
      return;
    }

    const chefId = typeChef === 'CHEF_A' ? this.selectedChefAId : this.selectedChefBId;
    if (!chefId) {
      this.showMessage(`Veuillez sélectionner un ${typeChef.replace('_', ' ')}.`, 'error');
      return;
    }

    // Confirmer l'action si un chef est déjà en place
    const currentChef = typeChef === 'CHEF_A' ? this.currentChefA : this.currentChefB;
    if (currentChef) {
      const confirmMessage = `Remplacer ${currentChef.prenom} ${currentChef.nom} par ${this.getPersonnelName(chefId)} comme ${typeChef.replace('_', ' ')} ?`;
      if (!confirm(confirmMessage)) {
        return;
      }
    }

    this.loadingAction = true;
    this.clearMessage();

    // Utiliser le nouveau service centralisé
    this.affectationService.affecterChefAvecMiseAJour(this.selectedServiceId, typeChef, chefId).subscribe({
      next: (response) => {
        this.loadingAction = false;
        if (response.success) {
          // Message de succès avec toasts
          this.showMessage(`✅ ${response.message} Toutes les références ont été mises à jour automatiquement.`, 'success');
          
          // Réinitialiser la sélection
          if (typeChef === 'CHEF_A') {
            this.selectedChefAId = null;
          } else {
            this.selectedChefBId = null;
          }
          
          // Recharger toutes les données pour refléter les changements
          this.loadData();
          // Petite pause pour laisser le temps au backend de finaliser
          setTimeout(() => {
            this.onServiceChange();
          }, 500);
        } else {
          this.showMessage(`❌ ${response.message}`, 'error');
        }
      },
      error: (error) => {
        this.loadingAction = false;
        console.error(`❌ Erreur affectation ${typeChef}:`, error);
        let errorMessage = `Erreur lors de l'affectation du ${typeChef.replace('_', ' ')}`;
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }
        this.showMessage(`❌ ${errorMessage}`, 'error');
      }
    });
  }

  /**
   * Supprimer un chef (Chef A ou Chef B) avec mise à jour automatique complète
   */
  supprimerChef(typeChef: 'CHEF_A' | 'CHEF_B'): void {
    if (!this.selectedServiceId) {
      this.showMessage('Veuillez sélectionner un service.', 'error');
      return;
    }

    const currentChef = typeChef === 'CHEF_A' ? this.currentChefA : this.currentChefB;
    if (!currentChef) {
      this.showMessage(`Aucun ${typeChef.replace('_', ' ')} à supprimer.`, 'error');
      return;
    }

    const confirmMessage = `Êtes-vous sûr de vouloir supprimer ${currentChef.prenom} ${currentChef.nom} de son poste de ${typeChef.replace('_', ' ')} ?
    
    Cette action va automatiquement :
    • Retirer son rôle de chef
    • Mettre à jour toutes les références dans les demandes de congé
    • Assurer la cohérence des données`;
    
    if (!confirm(confirmMessage)) {
      return;
    }

    this.loadingAction = true;
    this.clearMessage();

    // Utiliser le nouveau service centralisé
    this.affectationService.supprimerChefAvecMiseAJour(this.selectedServiceId, typeChef).subscribe({
      next: (response) => {
        this.loadingAction = false;
        if (response.success) {
          this.showMessage(`✅ ${response.message} Toutes les références ont été nettoyées automatiquement.`, 'success');
          
          // Recharger toutes les données pour refléter les changements
          this.loadData();
          // Petite pause pour laisser le temps au backend de finaliser
          setTimeout(() => {
            this.onServiceChange();
          }, 500);
        } else {
          this.showMessage(`❌ ${response.message}`, 'error');
        }
      },
      error: (error) => {
        this.loadingAction = false;
        console.error(`❌ Erreur suppression ${typeChef}:`, error);
        let errorMessage = `Erreur lors de la suppression du ${typeChef.replace('_', ' ')}`;
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }
        this.showMessage(`❌ ${errorMessage}`, 'error');
      }
    });
  }

  /**
   * Vérifier la cohérence globale du système
   */
  verifierCoherenceGlobale(): void {
    this.loadingAction = true;
    this.clearMessage();

    this.affectationService.verifierCoherenceGlobale().subscribe({
      next: (response) => {
        this.loadingAction = false;
        if (response.success) {
          if (response.data && response.data.length > 0) {
            const incohérences = response.data.map((inc: any) => `• ${inc}`).join('\n');
            this.showMessage(`⚠️ Incohérences détectées :\n${incohérences}`, 'warning');
          } else {
            this.showMessage('✅ Toutes les données sont cohérentes ! RH unique assigné, chefs correctement affectés.', 'success');
          }
        } else {
          this.showMessage(`❌ ${response.message}`, 'error');
        }
      },
      error: (error) => {
        this.loadingAction = false;
        console.error('❌ Erreur vérification cohérence globale:', error);
        this.showMessage('❌ Erreur lors de la vérification de cohérence globale', 'error');
      }
    });
  }

  /**
   * Obtenir le nom d'un personnel par son ID
   */
  private getPersonnelName(personnelId: number): string {
    const personnel = this.personnelsService.find(p => p.id === personnelId);
    return personnel ? `${personnel.prenom} ${personnel.nom}` : 'Personnel inconnu';
  }

  /**
   * Réinitialiser la sélection de service
   */
  private resetServiceSelection(): void {
    this.selectedChefAId = null;
    this.selectedChefBId = null;
    this.currentChefA = null;
    this.currentChefB = null;
    this.personnelsService = [];
    this.loadingPersonnels = false;
  }

}
