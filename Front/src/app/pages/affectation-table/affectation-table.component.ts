import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  AffectationTableService, 
  AffectationComplete, 
  Chef, 
  AffectationRequest 
} from '../../services/affectation-table.service';

interface TableRow {
  id?: number;
  serviceId: number;
  nomService: string;
  libService: string;
  chefA: Chef | null;
  chefB: Chef | null;
  isEditing: boolean;
  isNew: boolean;
}

@Component({
  selector: 'app-affectation-table',
  templateUrl: './affectation-table.component.html',
  styleUrls: ['./affectation-table.component.scss']
})
export class AffectationTableComponent implements OnInit {
  
  affectations: TableRow[] = [];
  services: any[] = [];
  allChefs: Chef[] = [];
  availableChefs: Chef[] = [];
  
  newAffectationForm: FormGroup;
  showNewForm = false;
  loading = false;
  error: string | null = null;
  successMessage: string | null = null;

  constructor(
    private affectationService: AffectationTableService,
    private fb: FormBuilder
  ) {
    this.newAffectationForm = this.fb.group({
      serviceId: ['', Validators.required],
      chefAId: [''],
      chefBId: ['']
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  /**
   * Charge toutes les données nécessaires
   */
  async loadData(): Promise<void> {
    this.loading = true;
    this.error = null;
    
    try {
      // Charger les services et leurs affectations
      const [affectationsData, servicesData, chefsData] = await Promise.all([
        this.affectationService.getAllAffectations().toPromise(),
        this.affectationService.getServices().toPromise(),
        this.affectationService.getAllChefs().toPromise()
      ]);

      this.services = servicesData || [];
      this.allChefs = chefsData || [];
      
      // Transformer les données pour le tableau
      this.affectations = (affectationsData || []).map(aff => ({
        id: aff.id,
        serviceId: aff.serviceId,
        nomService: aff.nomService,
        libService: aff.libService,
        chefA: aff.chefA,
        chefB: aff.chefB,
        isEditing: false,
        isNew: false
      }));

      this.updateAvailableChefs();
      
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
      this.error = 'Erreur lors du chargement des données';
    } finally {
      this.loading = false;
    }
  }

  /**
   * Met à jour la liste des chefs disponibles
   */
  updateAvailableChefs(excludeServiceId?: number): void {
    this.availableChefs = this.allChefs.filter(chef => {
      // Vérifier si le chef est disponible (pas affecté ailleurs)
      const isAffectedElsewhere = this.affectations.some(aff => 
        aff.serviceId !== excludeServiceId &&
        ((aff.chefA && aff.chefA.id === chef.id) || 
         (aff.chefB && aff.chefB.id === chef.id))
      );
      return !isAffectedElsewhere;
    });
  }

  /**
   * Récupère les chefs disponibles pour un service spécifique
   */
  getAvailableChefsForService(serviceId: number, excludeCurrentChefs?: boolean): Chef[] {
    return this.allChefs.filter(chef => {
      // Trouver l'affectation actuelle
      const currentAffectation = this.affectations.find(aff => aff.serviceId === serviceId);
      
      // Permettre les chefs actuels
      if (currentAffectation && !excludeCurrentChefs) {
        if ((currentAffectation.chefA && currentAffectation.chefA.id === chef.id) ||
            (currentAffectation.chefB && currentAffectation.chefB.id === chef.id)) {
          return true;
        }
      }
      
      // Vérifier si le chef n'est pas affecté ailleurs
      const isAffectedElsewhere = this.affectations.some(aff => 
        aff.serviceId !== serviceId &&
        ((aff.chefA && aff.chefA.id === chef.id) || 
         (aff.chefB && aff.chefB.id === chef.id))
      );
      
      return !isAffectedElsewhere;
    });
  }

  /**
   * Ajouter une nouvelle ligne d'affectation
   */
  addNewAffectation(): void {
    this.showNewForm = true;
    this.newAffectationForm.reset();
    this.updateAvailableChefs();
  }

  /**
   * Annuler l'ajout
   */
  cancelNewAffectation(): void {
    this.showNewForm = false;
    this.newAffectationForm.reset();
  }

  /**
   * Sauvegarder la nouvelle affectation
   */
  async saveNewAffectation(): Promise<void> {
    if (this.newAffectationForm.invalid) {
      this.error = 'Veuillez sélectionner un service';
      return;
    }

    const formValue = this.newAffectationForm.value;
    const request: AffectationRequest = {
      serviceId: parseInt(formValue.serviceId),
      chefAId: formValue.chefAId ? parseInt(formValue.chefAId) : undefined,
      chefBId: formValue.chefBId ? parseInt(formValue.chefBId) : undefined
    };

    // Validation : Chef A et Chef B ne peuvent pas être identiques
    if (request.chefAId && request.chefBId && request.chefAId === request.chefBId) {
      this.error = 'Chef A et Chef B ne peuvent pas être la même personne';
      return;
    }

    try {
      this.loading = true;
      const response = await this.affectationService.saveAffectation(request).toPromise();
      
      if (response?.success) {
        this.successMessage = 'Affectation enregistrée avec succès';
        this.showNewForm = false;
        this.newAffectationForm.reset();
        await this.loadData(); // Recharger les données
      } else {
        this.error = response?.error || 'Erreur lors de l\'enregistrement';
      }
    } catch (error: any) {
      console.error('Erreur lors de la sauvegarde:', error);
      this.error = error?.error?.message || error?.message || 'Erreur lors de l\'enregistrement';
    } finally {
      this.loading = false;
    }
  }

  /**
   * Activer le mode édition pour une ligne
   */
  editAffectation(affectation: TableRow): void {
    affectation.isEditing = true;
  }

  /**
   * Annuler l'édition
   */
  cancelEdit(affectation: TableRow): void {
    affectation.isEditing = false;
    // Recharger pour annuler les changements
    this.loadData();
  }

  /**
   * Sauvegarder les modifications
   */
  async saveAffectation(affectation: TableRow): Promise<void> {
    const request: AffectationRequest = {
      serviceId: affectation.serviceId,
      chefAId: affectation.chefA?.id,
      chefBId: affectation.chefB?.id
    };

    // Validation
    if (request.chefAId && request.chefBId && request.chefAId === request.chefBId) {
      this.error = 'Chef A et Chef B ne peuvent pas être la même personne';
      return;
    }

    try {
      this.loading = true;
      const response = await this.affectationService.updateAffectation(affectation.serviceId, request).toPromise();
      
      if (response?.success) {
        this.successMessage = 'Affectation modifiée avec succès';
        affectation.isEditing = false;
        await this.loadData();
      } else {
        this.error = response?.error || 'Erreur lors de la modification';
      }
    } catch (error: any) {
      console.error('Erreur lors de la modification:', error);
      this.error = error?.error?.message || error?.message || 'Erreur lors de la modification';
    } finally {
      this.loading = false;
    }
  }

  /**
   * Supprimer une affectation
   */
  async deleteAffectation(affectation: TableRow): Promise<void> {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette affectation ?')) {
      return;
    }

    try {
      this.loading = true;
      const response = await this.affectationService.deleteAffectation(affectation.serviceId).toPromise();
      
      if (response?.success) {
        this.successMessage = 'Affectation supprimée avec succès';
        await this.loadData();
      } else {
        this.error = response?.error || 'Erreur lors de la suppression';
      }
    } catch (error: any) {
      console.error('Erreur lors de la suppression:', error);
      this.error = error?.error?.message || error?.message || 'Erreur lors de la suppression';
    } finally {
      this.loading = false;
    }
  }

  /**
   * Mettre à jour la sélection de Chef A
   */
  onChefAChange(affectation: TableRow, chefId: string): void {
    if (chefId) {
      const chef = this.allChefs.find(c => c.id === parseInt(chefId));
      affectation.chefA = chef || null;
    } else {
      affectation.chefA = null;
    }
  }

  /**
   * Mettre à jour la sélection de Chef B
   */
  onChefBChange(affectation: TableRow, chefId: string): void {
    if (chefId) {
      const chef = this.allChefs.find(c => c.id === parseInt(chefId));
      affectation.chefB = chef || null;
    } else {
      affectation.chefB = null;
    }
  }

  /**
   * Effacer les messages d'erreur/succès
   */
  clearMessages(): void {
    this.error = null;
    this.successMessage = null;
  }

  /**
   * Récupérer le nom du service par ID
   */
  getServiceName(serviceId: number): string {
    const service = this.services.find(s => s.idService === serviceId);
    return service ? service.nomService : '';
  }

  /**
   * Vérifier si un chef peut être sélectionné
   */
  canSelectChef(chef: Chef, affectation: TableRow, position: 'A' | 'B'): boolean {
    // Permettre le chef actuel
    if (position === 'A' && affectation.chefA?.id === chef.id) return true;
    if (position === 'B' && affectation.chefB?.id === chef.id) return true;
    
    // Vérifier si le chef n'est pas déjà affecté ailleurs
    const isAffectedElsewhere = this.affectations.some(aff => 
      aff.serviceId !== affectation.serviceId &&
      ((aff.chefA && aff.chefA.id === chef.id) || 
       (aff.chefB && aff.chefB.id === chef.id))
    );
    
    return !isAffectedElsewhere;
  }

  /**
   * TrackBy function pour optimiser les performances du ngFor
   */
  trackByServiceId(index: number, affectation: TableRow): number {
    return affectation.serviceId;
  }

  /**
   * Compter les chefs A assignés
   */
  getChefACount(): number {
    return this.affectations.filter(a => a.chefA).length;
  }

  /**
   * Compter les chefs B assignés
   */
  getChefBCount(): number {
    return this.affectations.filter(a => a.chefB).length;
  }
}