import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { RhRoutingModule } from './rh-routing.module';
import { UIModule } from '../../shared/ui/ui.module';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxPaginationModule } from 'ngx-pagination';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EspaceRhComponent } from './espace-rh/espace-rh.component';
import { HistoriqueRhComponent } from './historique-rh/historique-rh.component';
import { GestionutilisateurComponent } from './gestionutilisateur/gestionutilisateur.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';
import { GestionTypeCongeComponent } from './gestion-type-conge/gestion-type-conge.component';

import { ValidationCongesComponent } from './validation-conges/validation-conges.component';
import { HistoriqueDecisionsComponent } from './historique-decisions/historique-decisions.component';
import { RhDashboardComponent } from './rh-dashboard/rh-dashboard.component';
import { StatistiquesRhComponent } from './statistiques-rh/statistiques-rh.component';
import { RapportsRhComponent } from './rapports-rh/rapports-rh.component';
import { ConfigurationRhComponent } from './configuration-rh/configuration-rh.component';
import { NotificationsRhComponent } from './notifications-rh/notifications-rh.component';
import { AffectationChefsComponent } from './affectation-chefs/affectation-chefs.component';
import { AffectationTableComponent } from '../affectation-table/affectation-table.component';
import { EmployesInfoComponent } from './employes-info/employes-info.component';

@NgModule({
  declarations: [
    EspaceRhComponent,
    HistoriqueRhComponent,
    GestionutilisateurComponent,
    GestionServiceComponent,
    GestionTypeCongeComponent,

    ValidationCongesComponent,
    HistoriqueDecisionsComponent,
    RhDashboardComponent,
    StatistiquesRhComponent,
    RapportsRhComponent,
    ConfigurationRhComponent,
    NotificationsRhComponent,
    AffectationChefsComponent,
    AffectationTableComponent,
    EmployesInfoComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RhRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgApexchartsModule,
    DropzoneModule,
    FormsModule,
    NgbDatepickerModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})

export class RhModule { }
