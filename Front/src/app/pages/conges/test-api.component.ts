import { Component, OnInit } from '@angular/core';
import { CongeApiService } from './conge-api.service';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';

@Component({
  selector: 'app-test-api',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4>🧪 Test des APIs de congé</h4>
            </div>
            <div class="card-body">
              
              <div class="alert alert-info">
                <strong>Token utilisateur:</strong> {{ isAuthenticated ? '✅ Connecté' : '❌ Non connecté' }}
              </div>

              <div class="row">
                
                <!-- Test API Demandes en cours -->
                <div class="col-md-6">
                  <div class="card border-primary">
                    <div class="card-header bg-primary text-white">
                      📋 Demandes en cours
                    </div>
                    <div class="card-body">
                      <button class="btn btn-primary mb-3" (click)="testerDemandesEnCours()">
                        🔄 Tester API Demandes En Cours
                      </button>
                      
                      <div *ngIf="loadingEnCours" class="text-center">
                        <div class="spinner-border text-primary" role="status">
                          <span class="visually-hidden">Chargement...</span>
                        </div>
                      </div>
                      
                      <div *ngIf="!loadingEnCours && demandesEnCours.length > 0">
                        <h6>✅ {{ demandesEnCours.length }} demande(s) en cours:</h6>
                        <ul class="list-group">
                          <li class="list-group-item" *ngFor="let demande of demandesEnCours">
                            <strong>{{ demande.typeConge }}</strong><br>
                            <small>{{ demande.dateDebut }} → {{ demande.dateFin }} ({{ demande.duree }} jours)</small><br>
                            <span class="badge bg-{{ getStatusColor(demande.statut) }}">{{ demande.statut }}</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div *ngIf="!loadingEnCours && demandesEnCours.length === 0" class="alert alert-info">
                        📭 Aucune demande en cours
                      </div>
                      
                      <div *ngIf="errorEnCours" class="alert alert-danger">
                        ❌ {{ errorEnCours }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Test API Historique -->
                <div class="col-md-6">
                  <div class="card border-success">
                    <div class="card-header bg-success text-white">
                      📚 Historique des congés
                    </div>
                    <div class="card-body">
                      <button class="btn btn-success mb-3" (click)="testerHistoriqueCongs()">
                        🔄 Tester API Historique
                      </button>
                      
                      <div *ngIf="loadingHistorique" class="text-center">
                        <div class="spinner-border text-success" role="status">
                          <span class="visually-hidden">Chargement...</span>
                        </div>
                      </div>
                      
                      <div *ngIf="!loadingHistorique && historiqueConges.length > 0">
                        <h6>✅ {{ historiqueConges.length }} congé(s) dans l'historique:</h6>
                        <ul class="list-group">
                          <li class="list-group-item" *ngFor="let demande of historiqueConges">
                            <strong>{{ demande.typeConge }}</strong><br>
                            <small>{{ demande.dateDebut }} → {{ demande.dateFin }} ({{ demande.duree }} jours)</small><br>
                            <span class="badge bg-{{ getStatusColor(demande.statut) }}">{{ demande.statut }}</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div *ngIf="!loadingHistorique && historiqueConges.length === 0" class="alert alert-info">
                        📭 Aucun historique trouvé
                      </div>
                      
                      <div *ngIf="errorHistorique" class="alert alert-danger">
                        ❌ {{ errorHistorique }}
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>

              <!-- Test API Toutes les demandes -->
              <div class="row mt-4">
                <div class="col-12">
                  <div class="card border-info">
                    <div class="card-header bg-info text-white">
                      🗂️ Toutes les demandes (API de base)
                    </div>
                    <div class="card-body">
                      <button class="btn btn-info mb-3" (click)="testerToutesLesDemandes()">
                        🔄 Tester API Toutes Demandes
                      </button>
                      
                      <div *ngIf="loadingToutesdemandes" class="text-center">
                        <div class="spinner-border text-info" role="status">
                          <span class="visually-hidden">Chargement...</span>
                        </div>
                      </div>
                      
                      <div *ngIf="!loadingToutesdemandes && toutesLesDemandes.length > 0">
                        <h6>✅ {{ toutesLesDemandes.length }} demande(s) totale(s):</h6>
                        
                        <div class="table-responsive">
                          <table class="table table-sm">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Type</th>
                                <th>Période</th>
                                <th>Statut</th>
                                <th>Classification</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr *ngFor="let demande of toutesLesDemandes">
                                <td>#{{ demande.id }}</td>
                                <td>{{ demande.typeConge }}</td>
                                <td>{{ demande.dateDebut }} → {{ demande.dateFin }}</td>
                                <td><span class="badge bg-{{ getStatusColor(demande.statut) }}">{{ demande.statut }}</span></td>
                                <td>
                                  <span class="badge bg-{{ classifierDemande(demande) === 'EN_COURS' ? 'primary' : 'secondary' }}">
                                    {{ classifierDemande(demande) }}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      <div *ngIf="!loadingToutesdemandes && toutesLesDemandes.length === 0" class="alert alert-info">
                        📭 Aucune demande trouvée
                      </div>
                      
                      <div *ngIf="errorToutesdemandes" class="alert alert-danger">
                        ❌ {{ errorToutesdemandes }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      margin-bottom: 20px;
    }
  `]
})
export class TestApiComponent implements OnInit {
  
  // État d'authentification
  isAuthenticated = false;
  
  // Données des APIs
  demandesEnCours: any[] = [];
  historiqueConges: any[] = [];
  toutesLesDemandes: any[] = [];
  
  // États de chargement
  loadingEnCours = false;
  loadingHistorique = false;
  loadingToutesdemandes = false;
  
  // Erreurs
  errorEnCours: string | null = null;
  errorHistorique: string | null = null;
  errorToutesdemandes: string | null = null;

  constructor(
    private congeApiService: CongeApiService,
    private tokenStorage: TokenStorage
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = !!this.tokenStorage.getToken();
    console.log('🔐 État d\'authentification:', this.isAuthenticated);
  }

  testerDemandesEnCours() {
    console.log('🧪 Test API: Demandes en cours');
    this.loadingEnCours = true;
    this.errorEnCours = null;
    
    this.congeApiService.getDemandesEnCours().subscribe({
      next: (demandes) => {
        console.log('✅ Demandes en cours récupérées:', demandes);
        this.demandesEnCours = demandes;
        this.loadingEnCours = false;
      },
      error: (error) => {
        console.error('❌ Erreur demandes en cours:', error);
        this.errorEnCours = error?.error?.message || error?.message || 'Erreur inconnue';
        this.loadingEnCours = false;
      }
    });
  }

  testerHistoriqueCongs() {
    console.log('🧪 Test API: Historique des congés');
    this.loadingHistorique = true;
    this.errorHistorique = null;
    
    this.congeApiService.getHistoriqueConges().subscribe({
      next: (historique) => {
        console.log('✅ Historique récupéré:', historique);
        this.historiqueConges = historique;
        this.loadingHistorique = false;
      },
      error: (error) => {
        console.error('❌ Erreur historique:', error);
        this.errorHistorique = error?.error?.message || error?.message || 'Erreur inconnue';
        this.loadingHistorique = false;
      }
    });
  }

  testerToutesLesDemandes() {
    console.log('🧪 Test API: Toutes les demandes');
    this.loadingToutesdemandes = true;
    this.errorToutesdemandes = null;
    
    this.congeApiService.getMesDemandesConges().subscribe({
      next: (demandes) => {
        console.log('✅ Toutes les demandes récupérées:', demandes);
        this.toutesLesDemandes = demandes;
        this.loadingToutesdemandes = false;
      },
      error: (error) => {
        console.error('❌ Erreur toutes demandes:', error);
        this.errorToutesdemandes = error?.error?.message || error?.message || 'Erreur inconnue';
        this.loadingToutesdemandes = false;
      }
    });
  }

  getStatusColor(statut: string): string {
    switch (statut) {
      case 'APPROUVE': return 'success';
      case 'REFUSE': return 'danger';
      case 'EN_ATTENTE': return 'warning';
      case 'ANNULE': return 'secondary';
      default: return 'dark';
    }
  }

  classifierDemande(demande: any): string {
    if (demande.statut === 'EN_ATTENTE') {
      return 'EN_COURS';
    }
    
    if (demande.statut === 'APPROUVE') {
      const aujourdhui = new Date();
      aujourdhui.setHours(0, 0, 0, 0);
      const dateFin = new Date(demande.dateFin);
      dateFin.setHours(0, 0, 0, 0);
      return dateFin >= aujourdhui ? 'EN_COURS' : 'HISTORIQUE';
    }
    
    return 'HISTORIQUE';
  }
}