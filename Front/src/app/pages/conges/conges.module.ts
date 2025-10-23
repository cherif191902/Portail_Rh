import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { NgbNavModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule, NgbCollapseModule, NgbDatepickerModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

// Simple Bar
import { SimplebarAngularModule } from 'simplebar-angular';

// Component pages
import { CongesRoutingModule } from './conges-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DemandeCongeComponent } from './demande';
import { SuiviDemandesComponent } from './suivi';
import { HistoriqueCongesComponent } from './historique';
import { MesDemandesComponent } from './mes-demandes/mes-demandes.component';

@NgModule({
  declarations: [
    DemandeCongeComponent,
    SuiviDemandesComponent,
    HistoriqueCongesComponent,
    MesDemandesComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CongesRoutingModule,
    SharedModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbPaginationModule,
    SimplebarAngularModule
  ]
})
export class CongesModule {}