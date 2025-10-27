import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { CongeService } from 'src/app/pages/tables/conge.service';
import { CongeApiService } from 'src/app/pages/conges/conge-api.service';
import { CongeResponse, ValidationCongeRequest } from 'src/app/pages/conges/conge-api.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
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
    private http: HttpClient,
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
    
    // Test utilisateur connecté
    this.testCurrentUser();
    
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
      action: decision === 'APPROUVE' ? 'APPROUVER' : 'REFUSER',
      commentaire: commentaire
    };
    
    console.log('📋 Données de validation envoyées:', validationData);

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
        console.error('Status:', error.status);
        console.error('Error response:', error.error);
        
        let errorMessage = 'Une erreur est survenue lors de la validation';
        
        if (error.status === 400) {
          if (typeof error.error === 'string') {
            errorMessage = error.error;
          } else if (error.error?.message) {
            errorMessage = error.error.message;
          } else {
            errorMessage = 'Données de validation invalides';
          }
        } else if (error.status === 401) {
          errorMessage = 'Vous n\'êtes pas autorisé à effectuer cette action';
        } else if (error.status === 403) {
          errorMessage = 'Accès refusé - vérifiez vos permissions';
        } else if (error.status === 404) {
          errorMessage = 'Demande de congé non trouvée';
        } else if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        Swal.fire({
          title: 'Erreur de validation',
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

  /**
   * Test l'utilisateur connecté via l'endpoint de debug
   */
  testCurrentUser() {
    console.log('🔍 Test utilisateur connecté...');
    this.http.get(`${environment.apiUrl}/conge/validation/debug/current-user`, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('auth-token')}`,
        'Content-Type': 'application/json'
      }
    }).subscribe({
      next: (user) => {
        console.log('✅ Utilisateur connecté:', user);
      },
      error: (error) => {
        console.error('❌ Erreur test utilisateur:', error);
      }
    });
  }

  /**
   * Détermine si l'utilisateur peut valider cette demande
   */
  canValidate(demande: any): boolean {
    if (!demande || !demande.statut) return false;
    
    // Utiliser le service CongeApiService pour déterminer les droits
    const userRole = this.getCurrentUserRole();
    return this.congeApiService.peutValider(demande, userRole);
  }

  /**
   * Obtient le rôle de l'utilisateur connecté
   */
  private getCurrentUserRole(): string {
    // Cette logique doit être adaptée selon votre système d'authentification
    const token = sessionStorage.getItem('auth-token');
    if (!token) return '';
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.roles?.[0] || payload.role || '';
    } catch (error) {
      console.error('Erreur parsing token:', error);
      return '';
    }
  }

  /**
   * Retourne le libellé du statut
   */
  getStatutLibelle(statut: string): string {
    return this.congeApiService.getStatutLibelle(statut);
  }

  /**
   * Retourne la couleur du badge pour le statut
   */
  getStatutColorClass(statut: string): string {
    const color = this.congeApiService.getStatutColor(statut);
    return `badge bg-${color}`;
  }

  /**
   * Retourne un message explicatif selon l'étape du workflow
   */
  getWorkflowMessage(demande: any): string {
    if (!demande || !demande.statut) {
      return 'Statut indéterminé';
    }

    switch (demande.statut) {
      case 'EN_ATTENTE_CHEF_A':
        return 'En attente de validation par Chef A';
      case 'EN_ATTENTE_CHEF_B':
        return 'En attente de validation par Chef B';
      case 'EN_ATTENTE_RH':
        return 'En attente de validation par RH';
      case 'VALIDE':
        return 'Demande validée';
      case 'REFUSE_PAR_CHEF_A':
        return 'Refusé par Chef A';
      case 'REFUSE_PAR_CHEF_B':
        return 'Refusé par Chef B';
      case 'REFUSE_PAR_RH':
        return 'Refusé par RH';
      default:
        return 'En cours de traitement...';
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
