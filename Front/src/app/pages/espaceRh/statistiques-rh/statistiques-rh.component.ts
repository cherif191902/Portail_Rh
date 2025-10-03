import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RhService } from '../rh.service';
import { TokenStorage } from '../../../core/services/tokenservice.service';

interface StatisticData {
  totalUsers: number;
  totalServices: number;
  totalTypeConges: number;
  pendingConges: number;
  approvedConges: number;
  rejectedConges: number;
  congesByMonth: any[];
  congesByService: any[];
  congesByType: any[];
}

@Component({
  selector: 'app-statistiques-rh',
  templateUrl: './statistiques-rh.component.html',
  styleUrls: ['./statistiques-rh.component.scss']
})
export class StatistiquesRhComponent implements OnInit {
  statistics: StatisticData = {
    totalUsers: 0,
    totalServices: 0,
    totalTypeConges: 0,
    pendingConges: 0,
    approvedConges: 0,
    rejectedConges: 0,
    congesByMonth: [],
    congesByService: [],
    congesByType: []
  };
  
  loading = false;
  errorMsg = '';
  selectedPeriod = '30'; // 30, 90, 365 jours

  constructor(
    private rhService: RhService,
    public router: Router,
    private tokenStorage: TokenStorage
  ) {}

  ngOnInit(): void {
    // Vérifier l'authentification d'abord
    const token = this.tokenStorage.getToken();
    if (!token) {
      this.loadDemoData();
      return;
    }
    this.loadStatistics();
  }

  loadDemoData(): void {
    this.loading = true;
    this.errorMsg = 'Mode démonstration - Veuillez vous connecter pour voir les vraies données';
    
    // Données de démonstration
    setTimeout(() => {
      this.statistics = {
        totalUsers: 156,
        totalServices: 12,
        totalTypeConges: 8,
        pendingConges: 5,
        approvedConges: 45,
        rejectedConges: 3,
        congesByMonth: [
          { month: 'Jan', count: 12 },
          { month: 'Fév', count: 18 },
          { month: 'Mar', count: 15 },
          { month: 'Avr', count: 22 },
          { month: 'Mai', count: 28 },
          { month: 'Juin', count: 25 }
        ],
        congesByService: [
          { name: 'IT', conges: 15, color: 'primary' },
          { name: 'RH', conges: 12, color: 'success' },
          { name: 'Finance', conges: 8, color: 'info' },
          { name: 'Marketing', conges: 6, color: 'warning' }
        ],
        congesByType: [
          { name: 'Congés payés', count: 25, color: 'primary' },
          { name: 'Maladie', count: 8, color: 'warning' },
          { name: 'Maternité', count: 3, color: 'info' }
        ]
      };
      this.loading = false;
    }, 1000);
  }

  loadStatistics(): void {
    this.loading = true;
    this.errorMsg = '';

    // Vérifier l'authentification avant de charger les données
    const token = this.tokenStorage.getToken();
    if (!token) {
      this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
      setTimeout(() => {
        this.router.navigate(['/account/login']);
      }, 2000);
      this.loading = false;
      return;
    }

    // Charger toutes les données en parallèle en utilisant les endpoints existants
    Promise.all([
      this.rhService.GetUser().toPromise().catch(err => {
        console.warn('Erreur lors du chargement des utilisateurs:', err);
        return [];
      }),
      this.rhService.getService().toPromise().catch(err => {
        console.warn('Erreur lors du chargement des services:', err);
        return [];
      }),
      this.rhService.getTypeConge().toPromise().catch(err => {
        console.warn('Erreur lors du chargement des types de congés:', err);
        return [];
      }),
      this.rhService.getPendingCongesRh().toPromise().catch(err => {
        console.warn('Erreur lors du chargement des congés en attente:', err);
        return [];
      }),
      this.rhService.getHistoriqueRh().toPromise().catch(err => {
        console.warn('Erreur lors du chargement de l\'historique:', err);
        return [];
      })
    ]).then(([users, services, typeConges, pendingConges, historique]) => {
      // Mettre à jour les statistiques de base
      this.statistics.totalUsers = users?.length || 0;
      this.statistics.totalServices = services?.length || 0;
      this.statistics.totalTypeConges = typeConges?.length || 0;
      this.statistics.pendingConges = pendingConges?.length || 0;
      
      // Calculer les congés approuvés et refusés
      const allConges = historique || [];
      this.statistics.approvedConges = allConges.filter(c => c.repRh === 'APPROUVE').length;
      this.statistics.rejectedConges = allConges.filter(c => c.repRh === 'REFUSE').length;
      
      // Générer des données de démonstration pour les graphiques
      this.statistics.congesByMonth = this.generateCongesByMonth(allConges);
      this.statistics.congesByService = this.generateCongesByService(allConges, services);
      this.statistics.congesByType = this.generateCongesByType(allConges, typeConges);
      
      this.loading = false;
    }).catch(error => {
      console.error('Erreur lors du chargement des statistiques:', error);
      if (error.status === 401) {
        this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
        setTimeout(() => {
          this.router.navigate(['/account/login']);
        }, 2000);
      } else {
        this.errorMsg = 'Erreur lors du chargement des statistiques. Veuillez réessayer.';
      }
      this.loading = false;
    });
  }

  onPeriodChange(period: string): void {
    this.selectedPeriod = period;
    this.loadStatistics();
  }

  refresh(): void {
    this.loadStatistics();
  }

  getApprovalRate(): number {
    const total = this.statistics.approvedConges + this.statistics.rejectedConges;
    if (total === 0) return 0;
    return Math.round((this.statistics.approvedConges / total) * 100);
  }

  generateCongesByMonth(conges: any[]): any[] {
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    const currentYear = new Date().getFullYear();
    
    return months.map((month, index) => {
      const monthConges = conges.filter(conge => {
        const congeDate = new Date(conge.dateDeb || conge.dateCng);
        return congeDate.getFullYear() === currentYear && congeDate.getMonth() === index;
      });
      return { month, count: monthConges.length };
    });
  }

  generateCongesByService(conges: any[], services: any[]): any[] {
    const colors = ['primary', 'success', 'info', 'warning', 'danger', 'secondary'];
    
    return services?.slice(0, 6).map((service, index) => {
      const serviceConges = conges.filter(conge => 
        conge.personnel?.service?.id === service.id || 
        conge.personnel?.serviceId === service.id
      );
      return {
        name: service.nom || service.name || `Service ${index + 1}`,
        conges: serviceConges.length,
        color: colors[index % colors.length]
      };
    }) || [];
  }

  generateCongesByType(conges: any[], typeConges: any[]): any[] {
    const colors = ['primary', 'success', 'info', 'warning', 'danger'];
    
    return typeConges?.slice(0, 5).map((type, index) => {
      const typeCongesCount = conges.filter(conge => 
        conge.typeConge?.id === type.id || 
        conge.typeCongeId === type.id
      );
      return {
        name: type.nom || type.name || `Type ${index + 1}`,
        count: typeCongesCount.length,
        color: colors[index % colors.length]
      };
    }) || [];
  }

  exportToExcel(): void {
    // Implémentation future pour l'export Excel
    console.log('Export Excel en cours de développement');
  }
}
