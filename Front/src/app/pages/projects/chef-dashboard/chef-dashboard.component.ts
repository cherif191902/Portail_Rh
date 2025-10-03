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
  activeTab: 'team' | 'pointage' = 'team';
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
    if (!this.chefMatricule) return;
    // Use CongeService via chefServ (or inject CongeService directly) — chefServ has wrapper
    this.congeService.getDemandesPourChef().subscribe({
      next: (data:any) => this.demandesChef = Array.isArray(data) ? data : [],
      error: (err:any) => console.error('Failed to load demandes for chef', err)
    });
  }

  approveRequest(id: number) {
    if (!confirm('Approuver cette demande ?')) return;
    this.congeService.chefDecisionSimple(id, 'APPROUVE').subscribe({
      next: ()=> this.loadDemandesPourChef(),
      error: (err:any)=> Swal.fire('Erreur','Impossible d\'approuver','error')
    });
  }

  rejectRequest(id: number) {
    if (!confirm('Refuser cette demande ?')) return;
    this.congeService.chefDecisionSimple(id, 'REFUSE').subscribe({
      next: ()=> this.loadDemandesPourChef(),
      error: (err:any)=> Swal.fire('Erreur','Impossible de refuser','error')
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
  switchTab(tab: 'team' | 'pointage') {
    this.activeTab = tab;
    if (tab === 'pointage') {
      this.loadPointages();
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
