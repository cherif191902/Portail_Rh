import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ChefServiceService } from '../chef-service.service';
import { CongeService } from 'src/app/pages/tables/conge.service';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { GroupedPointage, Pointage } from 'src/app/pages/tables/advancedtable/advanced.model'; 
import { Observable, of } from 'rxjs';
// ...existing imports
@Component({
  selector: 'app-chef-dashboard',
  templateUrl: './chef-dashboard.component.html',
  styleUrls: ['./chef-dashboard.component.scss']
})
export class ChefDashboardComponent implements OnInit {
  subordinates: any[] = [];
  chefMatricule: string; // Get this from your auth service or localStorage
  pointages: any[] = [];
    activeTab: 'equipe' | 'projets' | 'conges' = 'equipe';
  pointages$: Observable<Pointage[]>;
  groupedPointages$: Observable<GroupedPointage[]>;
selectedDate: Date = new Date();
  isLoading = false;

  constructor(private chefServ:ChefServiceService, private congeService: CongeService, private token:TokenStorage) { 


    const currentUser = this.token.getUser();
    this.chefMatricule = currentUser?.matriculeP; //
  }

  ngOnInit(): void {
    this.loadSubordinates();
  this.loadDemandesPourChef();
    // Debug log
  }

  demandesChef: any[] = [];

  loadDemandesPourChef() {
    this.chefMatricule = this.chefMatricule || this.token.getUser()?.matriculeP;
    if (!this.chefMatricule) {
      console.error('❌ Aucun matricule chef trouvé');
      return;
    }

    console.log('🔄 Chargement des demandes pour chef:', this.chefMatricule);
    
    // Utiliser le nouvel endpoint hiérarchique
    this.congeService.getMyPendingDemandes().subscribe({
      next: (data: any) => {
        this.demandesChef = Array.isArray(data) ? data : [];
        console.log('✅ Demandes chargées:', this.demandesChef.length);
        
        // Log détaillé pour debugging
        if (this.demandesChef.length > 0) {
          console.log('📋 Première demande:', this.demandesChef[0]);
        } else {
          console.warn('⚠️ Aucune demande trouvée - Lancement du diagnostic');
          this.runDiagnostic();
        }
      },
      error: (err: any) => {
        console.error('❌ Erreur lors du chargement des demandes:', err);
        if (err.status === 401) {
          console.error('🔒 Erreur d\'authentification - Token JWT invalide?');
          // Vérifier le token
          const token = sessionStorage.getItem('auth-token');
          console.log('🔑 Token présent:', !!token);
          console.log('🔑 Token longueur:', token?.length || 0);
        }
      }
    });
  }

  /**
   * Diagnostic pour identifier pourquoi aucune demande n'apparaît
   */
  runDiagnostic() {
    console.log('🔍 Lancement du diagnostic Chef A...');
    
    this.congeService.getDiagnosticChefA().subscribe({
      next: (diagnostic: any) => {
        console.log('📊 Diagnostic Chef A:', diagnostic);
        
        // Afficher une alerte avec les résultats
        Swal.fire({
          title: 'Diagnostic Chef A',
          html: `
            <div class="text-start">
              <strong>Chef:</strong> ${diagnostic.chefA_nom} (ID: ${diagnostic.chefA_id})<br>
              <strong>Matricule:</strong> ${diagnostic.chefA_matricule}<br>
              <strong>Total demandes assignées:</strong> ${diagnostic.total_demandes_assignees}<br>
              <strong>Demandes par statut:</strong><br>
              ${Object.entries(diagnostic.demandes_par_statut || {}).map(([statut, count]) => 
                `&nbsp;&nbsp;• ${statut}: ${count}`).join('<br>')}
              <br><br>
              <strong>Demandes EN_ATTENTE_CHEF_A:</strong> ${diagnostic.en_attente_chef_a?.length || 0}
            </div>
          `,
          icon: 'info',
          confirmButtonText: 'OK'
        });
      },
      error: (err: any) => {
        console.error('❌ Erreur diagnostic:', err);
      }
    });
  }

  runDiagnosticServices(): void {
    console.log('🔍 Lancement du diagnostic des services...');
    this.congeService.getDiagnosticServices().subscribe({
      next: (diagnostic) => {
        console.log('📊 Diagnostic Services:', diagnostic);
        let servicesHtml = `<p><strong>Total services:</strong> ${diagnostic.total_services}</p><br>`;
        
        diagnostic.services.forEach((service: any) => {
          servicesHtml += `
            <div style="border: 1px solid #ddd; padding: 10px; margin: 5px 0;">
              <h4>${service.nom} (ID: ${service.id})</h4>
              <p><strong>Chef A:</strong> ${service.chef_a?.nom || 'Non assigné'}</p>
              <p><strong>Chef B:</strong> ${service.chef_b?.nom || 'Non assigné'}</p>
              <p><strong>RH:</strong> ${service.rh?.nom || 'Non assigné'}</p>
              <p><strong>Employés:</strong> ${service.nb_employes}</p>
            </div>
          `;
        });
        
        Swal.fire({
          title: 'Diagnostic des Services',
          html: `<div style="text-align: left; max-height: 400px; overflow-y: auto;">${servicesHtml}</div>`,
          icon: 'info',
          width: '800px'
        });
      },
      error: (error) => {
        console.error('❌ Erreur diagnostic services:', error);
        Swal.fire('Erreur', 'Impossible d\'exécuter le diagnostic des services', 'error');
      }
    });
  }

  approveRequest(id: number) {
    Swal.fire({
      title: 'Valider cette demande ?',
      text: 'La demande sera transmise au niveau suivant (Chef B)',
      input: 'textarea',
      inputPlaceholder: 'Commentaire (optionnel)',
      showCancelButton: true,
      confirmButtonText: '✅ Valider',
      cancelButtonText: '❌ Annuler',
      confirmButtonColor: '#28a745'
    }).then((result) => {
      if (result.isConfirmed) {
        // Utiliser l'API CongeApiService pour la validation hiérarchique
        const validationData = {
          action: 'VALIDER',
          commentaire: result.value || 'Validé par Chef A'
        };
        
        // TODO: Intégrer CongeApiService.validerChefA() ici
        // Pour l'instant, utiliser l'ancienne méthode
        this.congeService.chefDecisionSimple(id, 'APPROUVE', result.value).subscribe({
          next: () => {
            Swal.fire('Validé !', 'Demande transmise au Chef B', 'success');
            this.loadDemandesPourChef();
          },
          error: (err: any) => {
            console.error('❌ Erreur validation:', err);
            Swal.fire('Erreur', 'Impossible de valider la demande', 'error');
          }
        });
      }
    });
  }

  rejectRequest(id: number) {
    Swal.fire({
      title: 'Refuser cette demande ?',
      text: 'Cette action refusera définitivement la demande',
      input: 'textarea',
      inputPlaceholder: 'Motif du refus (obligatoire)',
      inputValidator: (value) => {
        if (!value) {
          return 'Veuillez indiquer un motif de refus !';
        }
        return null;
      },
      showCancelButton: true,
      confirmButtonText: '❌ Refuser',
      cancelButtonText: '↶ Annuler',
      confirmButtonColor: '#dc3545'
    }).then((result) => {
      if (result.isConfirmed) {
        this.congeService.chefDecisionSimple(id, 'REFUSE', result.value).subscribe({
          next: () => {
            Swal.fire('Refusé !', 'Demande refusée définitivement', 'success');
            this.loadDemandesPourChef();
          },
          error: (err: any) => {
            console.error('❌ Erreur refus:', err);
            Swal.fire('Erreur', 'Impossible de refuser la demande', 'error');
          }
        });
      }
    });
  }
  loadSubordinates() {
    console.log("Chef Matricule:", this.chefMatricule); // Debug log
    if (this.chefMatricule) {
      this.chefServ.getSubordinates(this.chefMatricule).subscribe(
        (data) => {
          console.log("API Response:", data); // Debug log
          this.subordinates = data;
        },
        (error) => {
          console.error("API Error:", error); // Debug log
          Swal.fire('Error', 'Failed to load subordinates', 'error');
        }
      );
    }
  }
  getUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
  switchTab(tab: 'team' | 'conges' | 'pointage') {
    // Mapper les anciens noms vers les nouveaux
    if (tab === 'team') {
      this.activeTab = 'equipe';
    } else if (tab === 'pointage') {
      this.activeTab = 'projets';
      this.loadPointages();
    } else if (tab === 'conges') {
      this.activeTab = 'conges';
      this.loadDemandesPourChef();
    }
  }
  loadPointages() {
    this.isLoading = true;
    if (this.chefMatricule) {
      this.chefServ.getSubordinatesPointage(this.chefMatricule, this.selectedDate)
        .subscribe({
          next: (data: Pointage[]) => {
            this.pointages = data;
            this.groupedPointages$ = of(this.groupByMatricule(data));
          },
          error: (err) => this.handleError('Failed to load pointage records'),
          complete: () => this.isLoading = false
        });
    }
  }
  private handleError(message: string) {
    console.error(message);
    Swal.fire('Error', message, 'error');
  }
  private groupByMatricule(pointages: Pointage[]): GroupedPointage[] {
    const groups = new Map<string, GroupedPointage>();
    
    pointages.sort((a, b) => 
      a.matricule.localeCompare(b.matricule) || 
      new Date(a.datePoint).getTime() - new Date(b.datePoint).getTime()
    );
  
    pointages.forEach(p => {
      if (!groups.has(p.matricule)) {
        groups.set(p.matricule, {
          matricule: p.matricule,
          pointages: [],
          totalEntries: 0
        });
      }
      const group = groups.get(p.matricule)!;
      group.pointages.push(p);
      group.totalEntries++;
    });
  
    return Array.from(groups.values());
  }

  formatTime(heures: number, minutes: number): string {
    return `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

    onDateChange(newDate: Date) {
    this.selectedDate = newDate;
    this.loadPointages();
  }

  // Add today button handler
  loadToday() {
    this.selectedDate = new Date();
    this.loadPointages();
  }
formatMinutes(minutes: number | undefined | null): string {
  if (minutes == null || isNaN(minutes)) {
    return '';
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}
 getStatusDisplay(status: string): string {
  switch(status?.toUpperCase()) {
    case 'PRESENT': return 'Present';
    case 'HALF_DAY': return 'Demi-journée';
    case 'ABSENT': return 'Absent';
    default: return status;
  }
}
}
