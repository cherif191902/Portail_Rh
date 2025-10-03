import { Component, OnInit } from '@angular/core';
import { RhService } from '../../../core/services/rh.service';

@Component({
  selector: 'app-affectations',
  template: `<div class="card">
  <div class="card-body">
    <h4 class="card-title">Affectations</h4>
    <p class="text-muted">Assigner des chefs et des employés aux services.</p>
    <div *ngIf="message" class="alert alert-info py-2">{{message}}</div>
    <div class="row">
      <div class="col-md-6">
        <h5>Affecter un Chef</h5>
        <div class="mb-2">
          <label class="form-label">Service</label>
          <select class="form-select" [(ngModel)]="selectedServiceForChef">
            <option [ngValue]="null">-- choisir --</option>
            <option *ngFor="let s of services" [ngValue]="s.idService">{{s.nomService}}</option>
          </select>
        </div>
        <div class="mb-2">
          <label class="form-label">Chef</label>
          <select class="form-select" [(ngModel)]="selectedChef">
            <option [ngValue]="null">-- choisir --</option>
            <option *ngFor="let c of employees" [ngValue]="c.id">{{c.prenom}} {{c.nom}}</option>
          </select>
        </div>
        <button class="btn btn-primary" (click)="assignChef()" [disabled]="!selectedServiceForChef || !selectedChef || loading">Affecter Chef</button>
      </div>
      <div class="col-md-6">
        <h5>Affecter un Employé</h5>
        <div class="mb-2">
          <label class="form-label">Service</label>
          <select class="form-select" [(ngModel)]="selectedServiceForEmployee">
            <option [ngValue]="null">-- choisir --</option>
            <option *ngFor="let s of services" [ngValue]="s.idService">{{s.nomService}}</option>
          </select>
        </div>
        <div class="mb-2">
          <label class="form-label">Employé</label>
          <select class="form-select" [(ngModel)]="selectedEmployee">
            <option [ngValue]="null">-- choisir --</option>
            <option *ngFor="let e of employees" [ngValue]="e.id">{{e.prenom}} {{e.nom}}</option>
          </select>
        </div>
        <button class="btn btn-success" (click)="assignEmployee()" [disabled]="!selectedServiceForEmployee || !selectedEmployee || loading">Affecter Employé</button>
      </div>
    </div>
    <hr/>
    <h5>Services</h5>
    <div class="table-responsive" *ngIf="services?.length">
      <table class="table table-sm">
        <thead>
          <tr><th>#</th><th>Nom</th><th>Chef</th><th>Nb Personnels</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let s of services">
            <td>{{s.idService}}</td>
            <td>{{s.nomService}}</td>
            <td>{{s.chef ? (s.chef.prenom + ' ' + s.chef.nom) : '—'}}</td>
            <td>{{s.personnels?.length}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
  styles: [`.card-title{font-weight:600}`]
})
export class AffectationsComponent implements OnInit {
  services: any[] = [];
  chefs: any[] = [];
  employees: any[] = [];
  loading = false;
  message = '';

  selectedServiceForChef: number | null = null;
  selectedChef: number | null = null;

  selectedServiceForEmployee: number | null = null;
  selectedEmployee: number | null = null;

  constructor(private rh: RhService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.loading = true;
    Promise.all([
      this.rh.getServices().toPromise(),
      this.rh.getChefs().toPromise(),
      this.rh.getEmployees().toPromise()
    ]).then(([services, chefs, employees]) => {
      this.services = services || [];
      this.chefs = chefs || [];
      this.employees = employees || [];
    }).catch(err => {
      this.message = 'Erreur chargement données';
      console.error(err);
    }).finally(()=> this.loading = false);
  }

  assignChef() {
    if(!this.selectedServiceForChef || !this.selectedChef) return;
    this.rh.assignChef(this.selectedServiceForChef, this.selectedChef).subscribe({
      next: _ => { this.message = 'Chef affecté'; this.loadAll(); },
      error: e => { this.message = 'Erreur affectation chef'; console.error(e);} 
    });
  }

  assignEmployee() {
    if(!this.selectedServiceForEmployee || !this.selectedEmployee) return;
    this.rh.assignEmployee(this.selectedServiceForEmployee, this.selectedEmployee).subscribe({
      next: _ => { this.message = 'Employé affecté'; this.loadAll(); },
      error: e => { this.message = 'Erreur affectation employé'; console.error(e);} 
    });
  }
}
