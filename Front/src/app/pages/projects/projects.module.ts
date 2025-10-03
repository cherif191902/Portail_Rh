import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { UIModule } from '../../shared/ui/ui.module';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbTooltipModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProjectgridComponent } from './projectgrid/projectgrid.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChefDashboardComponent } from './chef-dashboard/chef-dashboard.component';

@NgModule({
  declarations: [ProjectgridComponent, ProjectlistComponent, ChefDashboardComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
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

export class ProjectsModule { }
