import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { RhService } from 'src/app/core/services/rh.service';

interface CongeVM {
  id: number;
  personnel?: any;
  dateDeb?: string;
  dateFin?: string;
  nbJours?: string;
  repChefsNiveau1?: string;
  repChefsNiveau2?: string;
  repRh?: string;
  motif?: string;
}

interface SummaryCard {
  label: string;
  value: number;
  icon: string;
  variant: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  hint: string;
}

interface QuickAction {
  label: string;
  description: string;
  icon: string;
  route: string;
  variant: string;
}

@Component({
  selector: 'app-rh-dashboard',
  templateUrl: './rh-dashboard.component.html',
  styleUrls: ['./rh-dashboard.component.scss']
})
export class RhDashboardComponent implements OnInit {
  user: any;
  today = new Date();

  services: any[] = [];
  allChefs: any[] = [];
  allEmployees: any[] = [];
  pendingConges: CongeVM[] = [];
  recentDecisions: CongeVM[] = [];

  summaryCards: SummaryCard[] = [];
  quickActions: QuickAction[] = [];

  loadingOverview = false;
  loadingServices = false;
  errorMessage = '';

  selectedChefByService: Record<number, number | null> = {};
  selectedEmployeeByService: Record<number, number | null> = {};

  constructor(
    private token: TokenStorage, 
    private rh: RhService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.user = this.token.getUser();
    // Assurer que la langue est définie en français
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
    
    this.buildQuickActions();
    this.refreshOverview();
  }

  private buildQuickActions() {
    this.quickActions = [
      {
        label: 'Consulter / valider les congés',
        description: 'Accéder aux demandes en attente et les traiter',
        icon: 'bx-task',
        route: '/RH/validation-conges',
        variant: 'primary'
      },
      {
        label: 'Historique des décisions',
        description: 'Consulter les validations / refus récents',
        icon: 'bx-history',
        route: '/RH/historique-decisions',
        variant: 'info'
      },
      {
        label: 'Affectations services',
        description: 'Associer chefs et collaborateurs aux services',
        icon: 'bx-merge',
        route: '/RH/affectations',
        variant: 'success'
      },
      {
        label: 'Gestion des services',
        description: 'Créer et maintenir la structure des services',
        icon: 'bx-building-house',
        route: '/RH/Service',
        variant: 'warning'
      },
      {
        label: 'Gestion des utilisateurs',
        description: 'Créer / modifier les comptes salariés',
        icon: 'bx-user-circle',
        route: '/RH/gestionUtilisateur',
        variant: 'secondary'
      }
    ];
  }

  refreshOverview() {
    this.loadingOverview = true;
    this.errorMessage = '';
    forkJoin({
      services: this.rh.getServices(),
      pending: this.rh.getPendingCongesRh(),
      history: this.rh.getHistoriqueRh(),
      chefs: this.rh.getChefs(),
      employees: this.rh.getEmployees()
    }).subscribe({
      next: ({ services, pending, history, chefs, employees }) => {
        this.services = Array.isArray(services) ? services : [];
        this.pendingConges = Array.isArray(pending) ? pending.slice(0, 5) : [];
        this.recentDecisions = Array.isArray(history) ? history.slice(0, 5) : [];

        this.allChefs = this.resolveChefs(chefs);
        this.allEmployees = this.resolveEmployees(employees);

        this.computeSummaryCards();
      },
      error: err => {
        console.error('Erreur chargement dashboard RH', err);
        this.errorMessage = "Impossible de charger les données du tableau de bord";
      },
      complete: () => this.loadingOverview = false
    });
  }

  private resolveChefs(raw: any): any[] {
    if (Array.isArray(raw) && raw.length) return raw;
    const allPersonnels = new Set<any>();
    this.services.forEach(s => {
      if (s.personnels) {
        s.personnels.forEach((p: any) => allPersonnels.add(p));
      }
    });
    return Array.from(allPersonnels).filter((p: any) => this.hasRole(p, 'ROLE_CHEF_SERVICE'));
  }

  private resolveEmployees(raw: any): any[] {
    if (Array.isArray(raw) && raw.length) return raw;
    const employeesMap = new Map<number, any>();
    this.services.forEach(s => {
      if (Array.isArray(s.personnels)) {
        s.personnels.forEach((p: any) => {
          if (p?.id && !employeesMap.has(p.id)) {
            employeesMap.set(p.id, p);
          }
        });
      }
    });
    return Array.from(employeesMap.values());
  }

  private hasRole(personnel: any, role: string): boolean {
    if (!personnel || !personnel.roles) return false;
    return personnel.roles.some((r: any) => {
      if (!r) return false;
      if (typeof r === 'string') return r === role;
      if (r.nomRole) return r.nomRole === role;
      if (r.name) return r.name === role;
      return false;
    });
  }

  private computeSummaryCards() {
    const totalServices = this.services.length;
    const chefsSet = new Set<number>();
    const employeesSet = new Set<number>();

    this.services.forEach(service => {
      if (service.chef?.id) chefsSet.add(service.chef.id);
      (service.personnels || []).forEach((p: any) => employeesSet.add(p.id));
    });

    const pendingCount = this.pendingConges.length;
    const approvedThisMonth = (this.recentDecisions || []).filter(c => c.repRh === 'APPROUVE' && this.isCurrentMonth(c.dateFin || c.dateDeb)).length;

    this.summaryCards = [
      {
        label: 'Services actifs',
        value: totalServices,
        icon: 'bx-layout',
        variant: 'primary',
        hint: 'Nombre total de services opérationnels'
      },
      {
        label: 'Chefs nommés',
        value: chefsSet.size,
        icon: 'bx-user-voice',
        variant: 'success',
        hint: 'Chefs de service actuellement affectés'
      },
      {
        label: 'Collaborateurs suivis',
        value: employeesSet.size,
        icon: 'bx-group',
        variant: 'info',
        hint: 'Effectif total rattaché aux services'
      },
      {
        label: 'Congés en attente',
        value: pendingCount,
        icon: 'bx-time-five',
        variant: 'warning',
        hint: 'Demandes nécessitant une validation RH'
      },
      {
        label: 'Décisions ce mois',
        value: approvedThisMonth,
        icon: 'bx-calendar-check',
        variant: 'danger',
        hint: 'Nombre d’approbations réalisées ce mois'
      }
    ];
  }

  private isCurrentMonth(dateStr?: string): boolean {
    if (!dateStr) return false;
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return false;
    const now = new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }

  assignChef(serviceId: number, personnelId: number | null) {
    if (!personnelId) return;
    this.loadingServices = true;
    this.rh.assignChef(serviceId, personnelId).subscribe({
      next: () => {
        this.selectedChefByService[serviceId] = null;
        this.refreshOverview();
      },
      error: err => {
        console.error('Affectation chef échouée', err);
        this.errorMessage = "Impossible d'affecter le chef";
      },
      complete: () => this.loadingServices = false
    });
  }

  assignEmployee(serviceId: number, personnelId: number | null) {
    if (!personnelId) return;
    this.loadingServices = true;
    this.rh.assignEmployee(serviceId, personnelId).subscribe({
      next: () => {
        this.selectedEmployeeByService[serviceId] = null;
        this.refreshOverview();
      },
      error: err => {
        console.error('Affectation employé échouée', err);
        this.errorMessage = "Impossible d'affecter l'employé";
      },
      complete: () => this.loadingServices = false
    });
  }

  initials(person?: any): string {
    if (!person) return '';
    const name = `${person.prenom || ''} ${person.nom || ''}`.trim();
    return name.split(' ').map(part => part.charAt(0)).join('').substring(0, 2).toUpperCase();
  }

  statusBadge(status?: string): string {
    switch (status) {
      case 'APPROUVE':
      case 'ACCEPTE':
        return 'success';
      case 'REFUSE':
        return 'danger';
      case 'EN_ATTENTE':
        return 'warning';
      default:
        return 'secondary';
    }
  }

  statusLabel(status?: string | null): string {
    switch (status) {
      case 'APPROUVE':
      case 'ACCEPTE':
        return 'Accepté';
      case 'REFUSE':
        return 'Refusé';
      case 'EN_ATTENTE':
      default:
        return 'En attente';
    }
  }

  trackById(_: number, item: any) { return item?.id; }
}
