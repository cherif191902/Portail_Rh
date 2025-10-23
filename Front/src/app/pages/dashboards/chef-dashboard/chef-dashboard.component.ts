import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { CongeService } from 'src/app/pages/tables/conge.service';
import { CongeApiService } from 'src/app/pages/conges/conge-api.service';
import { CongeResponse, ValidationCongeRequest } from 'src/app/pages/conges/conge-api.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chef-dashboard',
  templateUrl: './chef-dashboard.component.html',
  styleUrls: ['./chef-dashboard.component.scss']
})
export class ChefDashboardComponent implements OnInit, OnDestroy {
  user: any;
  departmentName: string = '';
  pendingCount = 0;
  pendingDemandes: CongeResponse[] = [];
  employees: any[] = [];
  selectedEmployee: any = null;
  employeeConges: any[] = [];
  // track comment boxes per conge id
  activeCommentFor: { [congeId: string]: { decision: string, text: string } } = {};
  
  // Loading states
  isLoadingDemandes = false;
  isLoadingEmployees = false;

  private sub: Subscription;

  constructor(
    private token: TokenStorage, 
    private congeService: CongeService,
    private congeApiService: CongeApiService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.user = this.token.getUser();
    // Récupérer le nom du département/service
    this.departmentName = this.user?.service?.nom || 'Service non défini';
    
    // Assurer que la langue est définie en français
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
    
    // Diagnostic complet
    console.log('🔍 Lancement diagnostic chef dashboard...');
    this.congeService.diagnostic();
    
    this.loadPending();
    this.loadEmployees();

    // refresh when a new demande is submitted
    this.sub = this.congeService.demandeSubmitted$.subscribe(() => this.loadPending());
  }

  loadPending() {
    this.isLoadingDemandes = true;
    console.log('🔄 Chargement des demandes à valider pour le chef...');
    
    // Utiliser le service CongeService pour la cohérence
    this.congeService.getMyPendingDemandes().subscribe({
      next: (demandes) => {
        console.log('✅ Demandes à valider récupérées:', demandes);
        if (demandes && demandes.length > 0) {
          console.log('📋 Structure première demande:', demandes[0]);
          console.log('🔍 Propriétés disponibles:', Object.keys(demandes[0]));
        }
        this.pendingDemandes = Array.isArray(demandes) ? demandes : [];
        this.pendingCount = this.pendingDemandes.length;
        this.isLoadingDemandes = false;
      },
      error: (error) => {
        console.error('❌ Erreur chargement demandes à valider:', error);
        this.pendingDemandes = [];
        this.pendingCount = 0;
        this.isLoadingDemandes = false;
        
        // Gestion d'erreur améliorée
        let errorMessage = 'Impossible de charger les demandes à valider';
        if (error?.error?.message) {
          errorMessage = error.error.message;
        } else if (error?.message && error.message !== 'OK') {
          errorMessage = error.message;
        }
        
        Swal.fire({
          title: 'Erreur',
          text: errorMessage,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });
  }

  loadEmployees() {
    this.isLoadingEmployees = true;
    console.log('🔄 Chargement des employés du service...');
    
    this.congeService.getEmployeesForChef().subscribe({
      next: (employees) => {
        console.log('✅ Employés du service récupérés:', employees);
        if (employees && employees.length > 0) {
          console.log('👤 Structure premier employé:', employees[0]);
          console.log('🔍 Propriétés disponibles:', Object.keys(employees[0]));
        }
        this.employees = Array.isArray(employees) ? employees : [];
        this.isLoadingEmployees = false;
      },
      error: (error) => {
        console.error('❌ Erreur chargement employés:', error);
        this.employees = [];
        this.isLoadingEmployees = false;
        
        // Gestion d'erreur améliorée
        let errorMessage = 'Impossible de charger les employés du service';
        if (error?.error?.message) {
          errorMessage = error.error.message;
        } else if (error?.message && error.message !== 'OK') {
          errorMessage = error.message;
        }
        
        console.warn('Message d\'erreur traité:', errorMessage);
      }
    });
  }

  approve(demande: any) {
    const id = demande.idConge;
    if (!id) return;
    
    console.log('✅ Préparation approbation demande:', id);
    // show approve comment box
    this.activeCommentFor[id] = { decision: 'APPROUVE', text: '' };
  }

  reject(demande: any) {
    const id = demande.idConge;
    if (!id) return;
    
    console.log('❌ Préparation refus demande:', id);
    this.activeCommentFor[id] = { decision: 'REFUSE', text: '' };
  }

  cancelDecision(demande: any) {
    const id = demande.idConge;
    if (!id) return;
    
    console.log('🔄 Annulation décision demande:', id);
    delete this.activeCommentFor[id];
  }

  submitDecision(demande: any) {
    const id = demande.idConge;
    if (!id || !this.activeCommentFor[id]) return;
    
    const decision = this.activeCommentFor[id].decision;
    const commentaire = this.activeCommentFor[id].text || '';
    
    console.log(`🔄 Soumission ${decision} pour demande:`, id);
    
    // Préparer les données de validation selon le nouveau format hiérarchique
    const validationData: ValidationCongeRequest = {
      action: decision === 'APPROUVE' ? 'VALIDER' : 'REFUSER',
      commentaire: commentaire
    };

    // Utiliser l'endpoint universel qui détermine automatiquement le niveau (Chef A/B)
    this.congeApiService.validerCongeUniversel(id, validationData).subscribe({
      next: (result) => {
        console.log('✅ Décision soumise avec succès:', result);
        
        // Nettoyer l'interface
        delete this.activeCommentFor[id];
        
        // Afficher un message de succès
        const action = decision === 'APPROUVE' ? 'approuvée' : 'refusée';
        Swal.fire({
          title: 'Succès!',
          text: `Demande ${action} avec succès`,
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
        
        // Recharger les demandes
        this.loadPending();
        if (this.selectedEmployee) {
          this.loadEmployeeConges(this.selectedEmployee.matriculeP);
        }
      },
      error: (error) => {
        console.error('❌ Erreur soumission décision:', error);
        
        let errorMessage = 'Une erreur est survenue lors de la validation';
        if (error.error?.message) {
          errorMessage = error.error.message;
        }
        
        Swal.fire({
          title: 'Erreur',
          text: errorMessage,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });
  }

  cancelComment(demande: CongeResponse) {
    const id = demande.id;
    if (!id) return;
    delete this.activeCommentFor[id];
  }

  loadEmployeeConges(matricule: string) {
    console.log('🔄 Chargement des congés pour l\'employé:', matricule);
    
    this.congeService.GetCongeByMat(matricule).subscribe({
      next: (conges) => {
        console.log('✅ Congés employé récupérés:', conges);
        this.employeeConges = Array.isArray(conges) ? conges : [];
      },
      error: (error) => {
        console.error('❌ Erreur chargement congés employé:', error);
        this.employeeConges = [];
      }
    });
  }

  selectEmployee(employee: any) {
    console.log('👤 Sélection employé:', employee);
    this.selectedEmployee = employee;
    this.loadEmployeeConges(employee.matriculeP);
  }

  clearEmployeeFilter() {
    this.selectedEmployee = null;
    this.employeeConges = [];
  }

  /**
   * Convertit le statut enum en texte lisible
   */
  getStatutTexte(statut: string): string {
    const statutsMap: { [key: string]: string } = {
      'EN_ATTENTE_CHEF_A': 'En attente Chef A',
      'EN_ATTENTE_CHEF_B': 'En attente Chef B',
      'EN_ATTENTE_RH': 'En attente RH',
      'APPROUVE_CHEF_A': 'Approuvé Chef A',
      'APPROUVE_CHEF_B': 'Approuvé Chef B',
      'APPROUVE': 'Approuvé',
      'REFUSE_CHEF_A': 'Refusé Chef A',
      'REFUSE_CHEF_B': 'Refusé Chef B',
      'REFUSE': 'Refusé',
      'ANNULE': 'Annulé'
    };
    return statutsMap[statut] || statut || 'En attente';
  }

  /**
   * Obtient la classe CSS pour le statut
   */
  getStatutClass(statut: string): string {
    if (!statut) return 'badge bg-secondary';
    
    if (statut.includes('EN_ATTENTE') || statut.includes('attente')) {
      return 'badge bg-warning text-dark';
    } else if (statut.includes('APPROUVE') || statut.includes('Approuvé')) {
      return 'badge bg-success';
    } else if (statut.includes('REFUSE') || statut.includes('Refusé')) {
      return 'badge bg-danger';
    } else if (statut.includes('ANNULE')) {
      return 'badge bg-secondary';
    }
    
    return 'badge bg-info';
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
