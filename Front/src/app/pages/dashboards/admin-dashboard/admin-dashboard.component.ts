import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  user: any;

  // Statistiques principales
  totalUsers = 247;
  newUsersThisMonth = 12;
  pendingRequests = 23;
  urgentRequests = 5;
  totalDepartments = 8;
  activeTeams = 15;
  activityRate = 92;

  // Répartition des utilisateurs par rôle
  employeeCount = 180;
  managerCount = 45;
  hrCount = 18;
  adminCount = 4;

  // Statistiques globales
  totalActiveUsers = 235;
  totalLeaveRequests = 67;
  averageProcessingTime = '2.3 jours';
  systemUptime = 99.8;

  // Demandes récentes
  recentRequests = [
    {
      id: 1,
      employeeName: 'Marie Dupont',
      department: 'Développement',
      type: 'Congé annuel',
      period: '15-20 Oct',
      status: 'En attente'
    },
    {
      id: 2,
      employeeName: 'Pierre Martin',
      department: 'Marketing',
      type: 'Congé maladie',
      period: '18 Oct',
      status: 'Urgent'
    },
    {
      id: 3,
      employeeName: 'Sophie Laurent',
      department: 'Finance',
      type: 'Congé maternité',
      period: '1 Nov - 28 Fév',
      status: 'À valider'
    }
  ];

  constructor(
    private token: TokenStorage,
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.token.getUser();
    // Assurer que la langue est définie en français
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
    
    // Charger les données du dashboard
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    // Ici vous pouvez appeler vos services pour récupérer les vraies données
    // Pour l'instant, nous utilisons des données de démonstration
  }

  // Méthodes de navigation
  navigateToUserManagement(): void {
    this.router.navigate(['/admin/users/list']);
  }

  navigateToLeaveValidation(): void {
    this.router.navigate(['/RH/validation-conges']);
  }

  navigateToDepartments(): void {
    this.router.navigate(['/admin/departments']);
  }

  generateReports(): void {
    this.router.navigate(['/admin/reports/workforce']);
  }

  // Méthodes utilitaires
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'urgent':
        return 'badge-soft-danger';
      case 'en attente':
        return 'badge-soft-warning';
      case 'à valider':
        return 'badge-soft-info';
      case 'approuvé':
        return 'badge-soft-success';
      default:
        return 'badge-soft-secondary';
    }
  }

  reviewRequest(request: any): void {
    // Navigation vers la page de détail de la demande
    this.router.navigate(['/RH/validation-conges'], { 
      queryParams: { requestId: request.id } 
    });
  }
}
