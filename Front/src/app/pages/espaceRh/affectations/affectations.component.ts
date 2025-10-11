import { Component, OnInit } from '@angular/core';
import { AffectationChefsServiceService, ServiceEntity, AffectationChefsDto } from '../../../services/affectation-chefs-service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-affectations',
  templateUrl: './affectations.component.html',
  styleUrls: ['./affectations.component.scss']
})
export class AffectationsComponent implements OnInit {
  // Données pour l'affectation des chefs aux services
  services: ServiceEntity[] = [];
  chefsDisponiblesServices: import('../../../services/affectation-chefs-service.service').Personnel[] = [];
  
  // Variables de sélection pour l'affectation des services
  selectedChefsParService: { [key: number]: { chefAId?: number, chefBId?: number } } = {};
  
  // État de l'interface
  loadingServices = false;
  messageServices = '';

  constructor(
    private affectationChefsService: AffectationChefsServiceService
  ) { }

  ngOnInit(): void {
    this.loadServicesData();
  }

  loadServicesData() {
    this.loadingServices = true;
    this.messageServices = '';

    forkJoin({
      services: this.affectationChefsService.getAllServices(),
      chefs: this.affectationChefsService.getChefsDisponibles()
    }).subscribe({
      next: (data) => {
        this.services = data.services;
        this.chefsDisponiblesServices = data.chefs;
        
        // Initialiser les sélections pour chaque service
        this.services.forEach(service => {
          this.selectedChefsParService[service.idService] = {
            chefAId: service.chefA?.id || undefined,
            chefBId: service.chefB?.id || undefined
          };
        });

        this.loadingServices = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des services:', error);
        this.messageServices = 'Erreur lors du chargement des services';
        this.loadingServices = false;
      }
    });
  }

  affecterChefsService(serviceId: number) {
    const selectedChefs = this.selectedChefsParService[serviceId];
    
    if (!selectedChefs) {
      this.messageServices = 'Aucune sélection trouvée pour ce service';
      return;
    }

    // Validation : s'assurer qu'une personne n'est pas Chef A et Chef B en même temps
    if (selectedChefs.chefAId && selectedChefs.chefBId && selectedChefs.chefAId === selectedChefs.chefBId) {
      this.messageServices = 'Une même personne ne peut pas être Chef A et Chef B du même service';
      return;
    }

    // Validation : vérifier qu'un chef ne soit pas déjà affecté à un autre service
    const validationResult = this.validateChefUniqueness(serviceId, selectedChefs.chefAId, selectedChefs.chefBId);
    if (!validationResult.isValid) {
      this.messageServices = validationResult.message;
      return;
    }

    this.loadingServices = true;
    this.messageServices = '';

    const affectation: AffectationChefsDto = {
      chefAId: selectedChefs.chefAId,
      chefBId: selectedChefs.chefBId
    };

    this.affectationChefsService.affecterChefs(serviceId, affectation)
      .subscribe({
        next: (response) => {
          this.messageServices = response.message || 'Chefs affectés avec succès';
          this.loadServicesData(); // Recharger les données
        },
        error: (error) => {
          console.error('Erreur lors de l\'affectation des chefs:', error);
          this.messageServices = error.error?.message || 'Erreur lors de l\'affectation des chefs';
          this.loadingServices = false;
        }
      });
  }

  refreshServicesData() {
    this.messageServices = '';
    this.loadServicesData();
  }

  resetServiceForm(serviceId: number) {
    const service = this.services.find(s => s.idService === serviceId);
    if (service) {
      this.selectedChefsParService[serviceId] = {
        chefAId: service.chefA?.id || undefined,
        chefBId: service.chefB?.id || undefined
      };
    }
  }

  /**
   * Valide qu'un chef ne soit pas déjà affecté à un autre service
   */
  validateChefUniqueness(currentServiceId: number, chefAId?: number, chefBId?: number): {isValid: boolean, message: string} {
    // Vérifier Chef A
    if (chefAId) {
      const conflictingService = this.services.find(service => 
        service.idService !== currentServiceId && 
        (service.chefA?.id === chefAId || service.chefB?.id === chefAId)
      );
      
      if (conflictingService) {
        const chefName = this.chefsDisponiblesServices.find(chef => chef.id === chefAId);
        const roleName = conflictingService.chefA?.id === chefAId ? 'Chef A' : 'Chef B';
        return {
          isValid: false,
          message: `${chefName?.prenom} ${chefName?.nom} est déjà ${roleName} du service "${conflictingService.nomService}"`
        };
      }
    }

    // Vérifier Chef B
    if (chefBId) {
      const conflictingService = this.services.find(service => 
        service.idService !== currentServiceId && 
        (service.chefA?.id === chefBId || service.chefB?.id === chefBId)
      );
      
      if (conflictingService) {
        const chefName = this.chefsDisponiblesServices.find(chef => chef.id === chefBId);
        const roleName = conflictingService.chefA?.id === chefBId ? 'Chef A' : 'Chef B';
        return {
          isValid: false,
          message: `${chefName?.prenom} ${chefName?.nom} est déjà ${roleName} du service "${conflictingService.nomService}"`
        };
      }
    }

    return { isValid: true, message: '' };
  }

  /**
   * Obtient des informations sur les conflits d'affectation pour l'affichage dans l'interface
   */
  getChefConflictInfo(serviceId: number, chefId: number): string | null {
    if (!chefId) return null;
    
    const conflictingService = this.services.find(service => 
      service.idService !== serviceId && 
      (service.chefA?.id === chefId || service.chefB?.id === chefId)
    );
    
    if (conflictingService) {
      const roleName = conflictingService.chefA?.id === chefId ? 'Chef A' : 'Chef B';
      return `⚠️ Déjà ${roleName} du service "${conflictingService.nomService}"`;
    }
    
    return null;
  }

  /**
   * Vérifie si un chef peut être sélectionné pour un service donné
   */
  isChefAvailable(serviceId: number, chefId: number): boolean {
    if (!chefId) return true;
    
    const conflictingService = this.services.find(service => 
      service.idService !== serviceId && 
      (service.chefA?.id === chefId || service.chefB?.id === chefId)
    );
    
    return !conflictingService;
  }

  /**
   * Vérifie si l'affectation actuelle pour un service est valide (pas de conflits)
   */
  isAffectationValid(serviceId: number): boolean {
    const selectedChefs = this.selectedChefsParService[serviceId];
    if (!selectedChefs) return false;

    // Vérifier que Chef A et Chef B ne sont pas la même personne
    if (selectedChefs.chefAId && selectedChefs.chefBId && selectedChefs.chefAId === selectedChefs.chefBId) {
      return false;
    }

    // Vérifier les conflits d'unicité
    const validationResult = this.validateChefUniqueness(serviceId, selectedChefs.chefAId, selectedChefs.chefBId);
    return validationResult.isValid;
  }

  /**
   * Obtient un résumé des conflits d'affectation
   */
  getConflictsSummary(): { hasConflicts: boolean, message: string, conflictCount: number } {
    let conflictCount = 0;
    const conflicts: string[] = [];

    // Parcourir tous les services pour détecter les conflits
    this.services.forEach(service => {
      const selectedChefs = this.selectedChefsParService[service.idService];
      if (selectedChefs) {
        // Vérifier Chef A
        if (selectedChefs.chefAId) {
          const conflictInfo = this.getChefConflictInfo(service.idService, selectedChefs.chefAId);
          if (conflictInfo) {
            conflicts.push(`Service "${service.nomService}": ${conflictInfo}`);
            conflictCount++;
          }
        }
        
        // Vérifier Chef B
        if (selectedChefs.chefBId) {
          const conflictInfo = this.getChefConflictInfo(service.idService, selectedChefs.chefBId);
          if (conflictInfo) {
            conflicts.push(`Service "${service.nomService}": ${conflictInfo}`);
            conflictCount++;
          }
        }

        // Vérifier si Chef A et Chef B sont identiques
        if (selectedChefs.chefAId && selectedChefs.chefBId && selectedChefs.chefAId === selectedChefs.chefBId) {
          conflicts.push(`Service "${service.nomService}": Même personne pour Chef A et Chef B`);
          conflictCount++;
        }
      }
    });

    const hasConflicts = conflictCount > 0;
    let message = '';
    
    if (hasConflicts) {
      message = `${conflictCount} conflit${conflictCount > 1 ? 's' : ''} détecté${conflictCount > 1 ? 's' : ''}. Résolvez les conflits avant d'affecter les chefs.`;
    }

    return { hasConflicts, message, conflictCount };
  }
}
