import { Component, OnInit } from '@angular/core';
import { RhService } from '../rh.service';

interface DashboardStats {
  totalUsers: number;
  totalServices: number;
  totalTypeConges: number;
  pendingConges: number;
  approvedConges: number;
  rejectedConges: number;
  recentDecisions: any[];
}

@Component({
  selector: 'app-rh-dashboard',
  templateUrl: './rh-dashboard.component.html',
  styleUrls: ['./rh-dashboard.component.scss']
})
export class RhDashboardComponent implements OnInit {
  stats: DashboardStats = {
    totalUsers: 0,
    totalServices: 0,
    totalTypeConges: 0,
    pendingConges: 0,
    approvedConges: 0,
    rejectedConges: 0,
    recentDecisions: []
  };
  
  loading = false;
  errorMsg = '';

  constructor(private rhService: RhService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.loading = true;
    this.errorMsg = '';

    // Charger toutes les données en parallèle
    Promise.all([
      this.rhService.GetUser().toPromise(),
      this.rhService.getService().toPromise(),
      this.rhService.getTypeConge().toPromise(),
      this.rhService.getPendingCongesRh().toPromise(),
      this.rhService.getHistoriqueRh().toPromise()
    ]).then(([users, services, typeConges, pendingConges, historique]) => {
      this.stats.totalUsers = users?.length || 0;
      this.stats.totalServices = services?.length || 0;
      this.stats.totalTypeConges = typeConges?.length || 0;
      this.stats.pendingConges = pendingConges?.length || 0;
      
      // Calculer les congés approuvés et refusés
      const allConges = historique || [];
      this.stats.approvedConges = allConges.filter(c => c.repRh === 'APPROUVE').length;
      this.stats.rejectedConges = allConges.filter(c => c.repRh === 'REFUSE').length;
      
      // Récupérer les 5 dernières décisions
      this.stats.recentDecisions = allConges
        .filter(c => c.repRh && c.repRh !== 'EN_ATTENTE')
        .sort((a, b) => new Date(b.dateDecision || b.dateCng).getTime() - new Date(a.dateDecision || a.dateCng).getTime())
        .slice(0, 5);
      
      this.loading = false;
    }).catch(error => {
      console.error('Erreur lors du chargement des données:', error);
      this.errorMsg = 'Erreur lors du chargement des données du dashboard';
      this.loading = false;
    });
  }

  getBadgeClass(status?: string): string {
    switch(status) {
      case 'APPROUVE': return 'success';
      case 'REFUSE': return 'danger';
      case 'EN_ATTENTE': return 'warning';
      default: return 'secondary';
    }
  }

  getStatusText(status?: string): string {
    switch(status) {
      case 'APPROUVE': return 'Approuvé';
      case 'REFUSE': return 'Refusé';
      case 'EN_ATTENTE': return 'En attente';
      default: return 'Non défini';
    }
  }

  refresh(): void {
    this.loadDashboardData();
  }
}

