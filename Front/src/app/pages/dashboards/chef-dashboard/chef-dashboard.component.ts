import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { CongeService } from 'src/app/pages/tables/conge.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chef-dashboard',
  templateUrl: './chef-dashboard.component.html',
  styleUrls: ['./chef-dashboard.component.scss']
})
export class ChefDashboardComponent implements OnInit, OnDestroy {
  user: any;
  departmentName: string = '';
  pendingCount = 0;
  pendingDemandes: any[] = [];
  employees: any[] = [];
  selectedEmployee: any = null;
  employeeConges: any[] = [];
  // track comment boxes per conge id
  activeCommentFor: { [congeId: string]: { decision: string, text: string } } = {};

  private sub: Subscription;

  constructor(
    private token: TokenStorage, 
    private congeService: CongeService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.user = this.token.getUser();
    // Récupérer le nom du département/service
    this.departmentName = this.user?.service?.nom || 'Service non défini';
    
    // Assurer que la langue est définie en français
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
    
    this.loadPending();
    this.loadEmployees();

    // refresh when a new demande is submitted
    this.sub = this.congeService.demandeSubmitted$.subscribe(() => this.loadPending());
  }

  loadPending() {
    this.congeService.getDemandesPourChefMy().subscribe(list => {
      const arr = Array.isArray(list) ? list : [];
      // compute level: if repChefsNiveau1 == 'EN_ATTENTE' -> level 1, else level 2
      this.pendingDemandes = arr.map((c: any) => ({
        ...c,
        _approvalLevel: c.repChefsNiveau1 === 'EN_ATTENTE' ? 1 : (c.repChefsNiveau1 === 'APPROUVE' && c.repChefsNiveau2 === 'EN_ATTENTE' ? 2 : 0)
      }));
      this.pendingCount = this.pendingDemandes.length;
    }, err => {
      console.debug('Erreur chargement demandes pending', err);
    });
  }

  loadEmployees() {
    this.congeService.getEmployeesForChef().subscribe(list => {
      this.employees = Array.isArray(list) ? list : [];
    }, err => console.debug('Erreur chargement employés', err));
  }

  approve(d: any) {
    const id = d.idConge || d.id;
    if (!id) return;
    // show approve comment box
    this.activeCommentFor[id] = { decision: 'APPROUVE', text: '' };
  }

  reject(d: any) {
    const id = d.idConge || d.id;
    if (!id) return;
    this.activeCommentFor[id] = { decision: 'REFUSE', text: '' };
  }

  submitDecision(d: any) {
    const id = d.idConge || d.id;
    if (!id) return;
    const payload = this.activeCommentFor[id];
    if (!payload) return;
    this.congeService.chefDecisionSimple(id, payload.decision, payload.text).subscribe(() => {
      // refresh lists
      this.loadPending();
      if (this.selectedEmployee) this.loadEmployeeConges(this.selectedEmployee.matriculeP);
      delete this.activeCommentFor[id];
    }, err => {
      console.error(err);
    });
  }

  cancelComment(d: any) {
    const id = d.idConge || d.id;
    if (!id) return;
    delete this.activeCommentFor[id];
  }

  loadEmployeeConges(matricule: string) {
    this.congeService.GetCongeByMat(matricule).subscribe(list => {
      this.employeeConges = Array.isArray(list) ? list : [];
    }, err => console.debug('Erreur chargement congés employé', err));
  }

  selectEmployee(e: any) {
    this.selectedEmployee = e;
    this.loadEmployeeConges(e.matriculeP);
  }

  clearEmployeeFilter() {
    this.selectedEmployee = null;
    this.employeeConges = [];
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
