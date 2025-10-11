import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { ChartService } from '../../chart/chart.service';
import { CongeApiService } from '../../conges/conge-api.service';

@Component({
  selector: 'app-conge-chart',
  templateUrl: './conge-chart.component.html',
  styleUrls: ['./conge-chart.component.scss']
})
export class CongeChartComponent implements OnInit {

  @ViewChild(BaseChartDirective, { static: false }) chart: BaseChartDirective | undefined;
  
  public barChartLabels: Label[] = [];
  public chartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public lstNbr: number[] = [];
  
  public barChartData: ChartDataSets[] = [
    { 
      data: [], 
      label: 'Mes congés',
      backgroundColor: 'rgba(63, 81, 181, 0.5)',
      borderColor: 'rgba(63, 81, 181, 1)',
      borderWidth: 2
    }
  ];
  
  list: any[] = [];
  breadCrumbItems: Array<{}>;

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: { 
          display: false 
        },
        scaleLabel: { 
          display: true, 
          labelString: 'Mois',
          fontColor: '#666'
        },
        ticks: {
          fontColor: '#666',
          fontSize: 14
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#666',
          fontSize: 14,
          stepSize: 5
        },
        gridLines: { 
          color: '#eee'  
        },
        scaleLabel: { 
          display: true, 
          labelString: 'Jours de congés',
          fontColor: '#666'
        }
      }]
    },
    plugins: {
      legend: { 
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 14
          }
        }
      },
      tooltip: { 
        backgroundColor: 'rgba(0,0,0,0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12
      }
    }
  };

  public barChartLegend = true;
  public barChartColors: Color[] = [
    {
      borderColor: 'rgba(63, 81, 181, 1)',
      backgroundColor: 'rgba(63, 81, 181, 0.5)',
    }
  ];

  constructor(
    private serv: ChartService,
    private congeApiService: CongeApiService,
    private cdRef: ChangeDetectorRef,
    private token: TokenStorage
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Charts' }, { label: 'Chartjs chart', active: true }];
    this.getChart();
  }

  getChart() {
    this.barChartLabels = [];
    this.lstNbr = [];

    console.log('📊 Chargement des données du graphique de congés');

    // Vérifier le rôle de l'utilisateur
    const user = this.token.getUser();
    const isAdminOrRh = user?.roles?.some((role: any) => 
      role.nom === 'ROLE_ADMIN' || role.nom === 'ROLE_RH'
    );

    if (isAdminOrRh) {
      // Admin/RH voit les données de tous les employés
      console.log('👑 Admin/RH - Chargement de toutes les données');
      this.serv.GetAllConge().subscribe({
        next: (data: Object[][]) => {
          this.processChartData(data, 'Congés de tous les employés');
        },
        error: (err) => {
          console.error('❌ Erreur lors du chargement des données admin:', err);
          this.handleChartError();
        }
      });
    } else {
      // Utilisateur normal voit seulement ses congés
      console.log('👤 Utilisateur normal - Chargement des données personnelles');
      this.congeApiService.getMesDemandesConges().subscribe({
        next: (demandes) => {
          console.log('📋 Demandes reçues:', demandes);
          // Convertir les demandes en format pour le graphique
          const chartData = this.convertDemandesForChart(demandes);
          this.processChartData(chartData, 'Mes congés');
        },
        error: (err) => {
          // Si non authentifié, informer et proposer la connexion
          if (err?.status === 401) {
            console.warn('401 Unauthorized while loading conge chart');
            // Afficher une alerte claire
            try {
              (window as any).Swal?.fire?.('Non authentifié', 'Vous devez être connecté(e) avec un compte autorisé pour voir ce graphique.', 'warning');
            } catch (e) {
              console.log('SweetAlert not available, using console warning');
            }
            // redirect to login
            setTimeout(() => window.location.href = '/account/login', 1200);
          } else {
            console.error('❌ Erreur lors du chargement des données de congé:', err?.message || err);
          }

          // Initialiser avec des données vides pour éviter les erreurs d'affichage
          this.handleChartError();
        }
      });
    }
  }

  private convertDemandesForChart(demandes: any[]): any[][] {
    // Grouper par mois et compter les jours
    const monthlyData: { [key: number]: number } = {};
    
    demandes.forEach(demande => {
      if (demande.statut === 'APPROUVE' && demande.dateDebut) {
        const date = new Date(demande.dateDebut);
        const month = date.getMonth() + 1; // 1-12
        const jours = demande.duree || 1;
        
        monthlyData[month] = (monthlyData[month] || 0) + jours;
      }
    });
    
    // Convertir en format [count, month]
    return Object.entries(monthlyData).map(([month, count]) => [count, parseInt(month)]);
  }

  private processChartData(data: any[][], label: string) {
    this.list = data;

    data.forEach((element: any[]) => {
      this.lstNbr.push(element[0]);
      this.barChartLabels.push(this.getMonthName(element[1]));
    });

    this.barChartData = [
      {
        data: this.lstNbr,
        label: label,
        backgroundColor: 'rgba(63, 81, 181, 0.5)',
        borderColor: 'rgba(63, 81, 181, 1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(63, 81, 181, 0.7)'
      }
    ];
    
    this.cdRef.detectChanges();
  }

  private handleChartError() {
    // Afficher des données vides en cas d'erreur
    this.barChartLabels = [];
    this.lstNbr = [];
    this.barChartData = [{
      data: [],
      label: 'Aucune donnée',
      backgroundColor: 'rgba(63, 81, 181, 0.5)',
      borderColor: 'rgba(63, 81, 181, 1)',
      borderWidth: 2
    }];
    this.cdRef.detectChanges();
  }

  private getMonthName(monthNumber: number): string {
    const months = [
      'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun',
      'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'
    ];
    return months[monthNumber - 1] || 'Inconnu';
  }

  // Événements du graphique
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log('Chart clicked:', event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log('Chart hovered:', event, active);
  }

  public randomize(): void {
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40
    ];
    
    this.barChartData = [{
      ...this.barChartData[0],
      data: data
    }];
  }
}