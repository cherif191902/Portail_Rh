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
  affectations: Affectation[] = [];
  
  // Formulaires
  affectationForm: AffectationForm = {
    chefId: null,
    serviceId: null
  };
  
  modificationForm: ModificationForm = {
    serviceId: null,
    nouveauChefId: null
  };

  // Nouveau formulaire pour Chef A et Chef B
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
   * Supprimer l'affectation d'un Chef A
   */
  supprimerChefA(serviceId: number): void {
    if (!confirm('Êtes-vous sûr de vouloir supprimer l\'affectation du Chef A ?')) {
      return;
    }

    this.loadingAction = true;
    this.clearMessage();

    this.affectationService.supprimerAffectationChef(serviceId, 'CHEF_A').subscribe({
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
        console.error('❌ Erreur suppression Chef A:', error);
        
        let errorMessage = 'Erreur lors de la suppression du Chef A';
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }
        
        this.showMessage('❌ ' + errorMessage, 'error');
      }
    });
  }

  /**
   * Supprimer l'affectation d'un Chef B
   */
  supprimerChefB(serviceId: number): void {
    if (!confirm('Êtes-vous sûr de vouloir supprimer l\'affectation du Chef B ?')) {
      return;
    }

    this.loadingAction = true;
    this.clearMessage();

    this.affectationService.supprimerAffectationChef(serviceId, 'CHEF_B').subscribe({
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
        console.error('❌ Erreur suppression Chef B:', error);
        
        let errorMessage = 'Erreur lors de la suppression du Chef B';
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }
        
        this.showMessage('❌ ' + errorMessage, 'error');
      }
    });
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
  }

  // ===== UTILITY AND DEBUG METHODS =====

  /**
   * Actualiser les données
   */
  refreshData(): void {
    console.log('🔄 Actualisation des données...');
    this.loadData();
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

}
