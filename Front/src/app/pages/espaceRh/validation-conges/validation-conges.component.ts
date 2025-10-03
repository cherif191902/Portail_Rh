import { Component, OnInit } from '@angular/core';
import { RhService } from '../../../core/services/rh.service';

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

@Component({
  selector: 'app-validation-conges',
  template: `
  <div class="card mb-3">
    <div class="card-body">
      <h4 class="card-title mb-0">Congés en attente (RH)</h4>
      <div class="d-flex gap-2 align-items-center mt-2">
        <input class="form-control" style="max-width:260px" placeholder="Filtrer (matricule/nom)" [(ngModel)]="filterText" />
        <button class="btn btn-sm btn-outline-secondary" (click)="refresh()" [disabled]="loading">Rafraîchir</button>
      </div>
      <div *ngIf="errorMsg" class="alert alert-danger py-1 mt-2">{{errorMsg}}</div>
      <div *ngIf="message" class="alert alert-info py-1 mt-2">{{message}}</div>
      <div class="table-responsive mt-3" *ngIf="pending?.length; else emptyPending">
        <table class="table table-sm align-middle">
          <thead><tr>
            <th>#</th><th>Employé</th><th>Période</th><th>Jours</th><th>Chef1</th><th>Chef2</th><th>RH</th><th>Actions</th>
          </tr></thead>
          <tbody>
            <tr *ngFor="let c of filteredPending()">
              <td>{{c.id}}</td>
              <td>{{c.personnel?.prenom}} {{c.personnel?.nom}}<br><small class="text-muted">{{c.personnel?.matriculeP}}</small></td>
              <td>{{c.dateDeb | date:'dd/MM'}} - {{c.dateFin | date:'dd/MM/yyyy'}}</td>
              <td>{{c.nbJours}}</td>
              <td><span class="badge bg-{{badge(c.repChefsNiveau1)}}">{{c.repChefsNiveau1}}</span></td>
              <td><span class="badge bg-{{badge(c.repChefsNiveau2)}}">{{c.repChefsNiveau2}}</span></td>
              <td><span class="badge bg-{{badge(c.repRh)}}">{{c.repRh}}</span></td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button class="btn btn-success" (click)="decide(c,'APPROUVE')" [disabled]="loading">✔</button>
                  <button class="btn btn-danger" (click)="decide(c,'REFUSE')" [disabled]="loading">✖</button>
                  <button class="btn btn-outline-secondary" (click)="loadHistorique(c)" title="Historique">H</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ng-template #emptyPending>
        <div class="text-muted mt-3">Aucune demande en attente.</div>
      </ng-template>
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h5 class="mb-0">Historique RH <small *ngIf="historique?.length" class="text-muted">({{historique.length}})</small></h5>
        <div class="d-flex gap-2">
          <select [(ngModel)]="histStatus" (change)="loadHistoriqueLastFilter()" class="form-select form-select-sm" style="width:160px">
            <option value="">Tous</option>
            <option value="APPROUVE">Approuvés</option>
            <option value="REFUSE">Refusés</option>
          </select>
          <input class="form-control form-control-sm" placeholder="Filtrer" [(ngModel)]="histFilter" style="width:180px" />
        </div>
      </div>
      <div class="table-responsive" *ngIf="historique?.length; else emptyHist">
        <table class="table table-sm">
          <thead><tr>
            <th>#</th><th>Employé</th><th>Période</th><th>Jours</th><th>Chef1</th><th>Chef2</th><th>RH</th>
          </tr></thead>
          <tbody>
            <tr *ngFor="let c of filteredHistorique()">
              <td>{{c.id}}</td>
              <td>{{c.personnel?.prenom}} {{c.personnel?.nom}}<br><small class="text-muted">{{c.personnel?.matriculeP}}</small></td>
              <td>{{c.dateDeb | date:'dd/MM'}} - {{c.dateFin | date:'dd/MM/yyyy'}}</td>
              <td>{{c.nbJours}}</td>
              <td><span class="badge bg-{{badge(c.repChefsNiveau1)}}">{{c.repChefsNiveau1}}</span></td>
              <td><span class="badge bg-{{badge(c.repChefsNiveau2)}}">{{c.repChefsNiveau2}}</span></td>
              <td><span class="badge bg-{{badge(c.repRh)}}">{{c.repRh}}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <ng-template #emptyHist>
        <div class="text-muted">Pas d'historique encore.</div>
      </ng-template>
    </div>
  </div>
  `,
  styles: [`.card-title{font-weight:600}.badge{min-width:70px}`]
})
export class ValidationCongesComponent implements OnInit {
  pending: CongeVM[] = [];
  historique: CongeVM[] = [];
  loading = false;
  message = '';
  errorMsg = '';
  filterText = '';
  histStatus = '';
  histFilter = '';
  private lastLoadedHistStatus = '';

  constructor(private rh: RhService) {}

  ngOnInit(): void {
    this.refresh();
    this.loadHistoriqueLastFilter();
  }

  refresh() { this.loadPending(); }

  loadPending() {
    this.loading = true; this.errorMsg='';
    this.rh.getPendingCongesRh().subscribe({
      next: data => { this.pending = data || []; },
      error: e => { console.error(e); this.errorMsg='Erreur chargement pending'; },
      complete: () => this.loading=false
    });
  }

  loadHistorique(conge?: CongeVM) {
    // si demandé pour un employé particulier, filtrer côté client après chargement global (simple pour début)
    this.rh.getHistoriqueRh(this.histStatus || undefined).subscribe({
      next: data => {
        this.historique = (data||[]) as CongeVM[];
        if (conge && conge.personnel?.matriculeP) {
          const m = conge.personnel.matriculeP;
            this.historique = this.historique.filter(h => h.personnel?.matriculeP === m);
        }
      },
      error: e => console.error(e)
    });
  }

  loadHistoriqueLastFilter() {
    this.lastLoadedHistStatus = this.histStatus;
    this.loadHistorique();
  }

  decide(c: CongeVM, decision: 'APPROUVE'|'REFUSE') {
    if (this.loading) return;
    this.loading = true; this.message='';
    this.rh.rhDecision(c.id, decision).subscribe({
      next: _ => { this.message = `Décision ${decision}`; this.refresh(); this.loadHistoriqueLastFilter(); },
      error: e => { console.error(e); this.message = 'Erreur décision'; },
      complete: () => this.loading=false
    });
  }

  filteredPending() {
    if(!this.filterText) return this.pending;
    const t = this.filterText.toLowerCase();
    return this.pending.filter(c => (c.personnel?.matriculeP||'').toLowerCase().includes(t) || (c.personnel?.nom||'').toLowerCase().includes(t));
  }

  filteredHistorique() {
    if(!this.histFilter) return this.historique;
    const t = this.histFilter.toLowerCase();
    return this.historique.filter(c => (c.personnel?.matriculeP||'').toLowerCase().includes(t) || (c.personnel?.nom||'').toLowerCase().includes(t));
  }

  badge(status?: string) {
    switch(status){
      case 'APPROUVE': return 'success';
      case 'REFUSE': return 'danger';
      case 'EN_ATTENTE': return 'warning';
      default: return 'secondary';
    }
  }
}
