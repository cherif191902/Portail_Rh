import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef, ViewChild } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { ChartService } from '../../chart/chart.service';
@Component({
  selector: 'app-conge-chart',
  templateUrl: './conge-chart.component.html',
  styleUrls: ['./conge-chart.component.scss']
})
export class CongeChartComponent implements OnInit {

  @ViewChild("baseChart", { static: false }) chart: BaseChartDirective;
  public barChartLabels: Label[] = [];
  public chartLabels: Label[] = [];

  public barChartType: ChartType = 'bar';
  lstNbr:number[];
  lstNbrr:number[];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Series A' },

  ];
  list:any[]=[]
  breadCrumbItems: Array<{}>;



  constructor(private serv :ChartService,private cdRef: ChangeDetectorRef,private token:TokenStorage) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Charts' }, { label: 'Chartjs chart', active: true }];

  
    this.chart
    this.getChart()

  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{ticks: {  beginAtZero: true }}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        font: {
          size: 20,
        }
      }
    }
  };
  public barChartLegend = true;

  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(30, 136, 229, 0.5)',
      borderColor: 'rgba(30, 136, 229, 1)',
      borderWidth: 1
    }
  ];
  
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  
  }

  

  // Modifier la méthode getChart() pour récupérer les données de tous les employés
getChart() {
    this.barChartLabels = [];
    this.lstNbr = [];

    this.serv.GetAllConge().subscribe({
      next: (data: Object[][]) => {
        this.list = data;

        data.forEach((element: any[]) => {
            this.lstNbr.push(element[0]);
            this.barChartLabels.push(this.getMonthName(element[1])); // Convertir le numéro en nom de mois
        });

        this.barChartData = [
            {
                data: this.lstNbr,
                label: 'Jours de congés',
                backgroundColor: 'rgba(63, 81, 181, 0.5)',
                borderColor: 'rgba(63, 81, 181, 1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(63, 81, 181, 0.7)',
                barPercentage: 0.6,
                categoryPercentage: 0.8
            }
        ];
        
        this.barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{ // <-- Syntaxe v2
            gridLines: { 
                display: false 
            },
            scaleLabel: { 
                display: true, 
                labelString: 'Mois',
                fontColor: '#666'
            },  ticks: {
        fontColor: '#666',
        fontSize: 14
      }
        }],
        yAxes: [{ // <-- Syntaxe v2
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
        
        this.cdRef.detectChanges();
      },
      error: (err) => {
        // Si non authentifié, informer et proposer la connexion
        if (err?.status === 401) {
          console.warn('401 Unauthorized while loading conge chart');
          // try to sign out if token stored and redirect to login
          try {
            // token service may exist in app; use window redirect to keep it simple
            // eslint-disable-next-line no-undef
            // Afficher une alerte claire
            (window as any).Swal?.fire?.('Non authentifié', 'Vous devez être connecté(e) avec un compte autorisé (chef/RH) pour voir ce graphique.', 'warning');
          } catch (e) {}
          // redirect to login
          setTimeout(() => window.location.href = '/account/login', 1200);
        } else {
          console.error('❌ Erreur lors du chargement des données de congé:', err?.message || err);
        }

        // Initialiser avec des données vides pour éviter les erreurs d'affichage
        this.barChartLabels = [];
        this.lstNbr = [];
        this.barChartData = [{
          data: [],
          label: 'Jours de congés',
          backgroundColor: 'rgba(63, 81, 181, 0.5)',
          borderColor: 'rgba(63, 81, 181, 1)',
          borderWidth: 2
        }];
        this.cdRef.detectChanges();
      }
    });
}

private getMonthName(monthNumber: string): string {
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    return months[parseInt(monthNumber) - 1] || '';
}
  
}