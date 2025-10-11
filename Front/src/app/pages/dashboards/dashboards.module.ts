import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular';

import { DefaultComponent } from './default/default.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RhDashboardComponent } from './rh-dashboard/rh-dashboard.component';
import { ChefDashboardComponent } from './chef-dashboard/chef-dashboard.component';
import { ChartModule } from '../chart/chart.module';
import { CongeChartComponent } from './conge-chart/conge-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [DefaultComponent, AdminDashboardComponent, RhDashboardComponent, ChefDashboardComponent, CongeChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DashboardsRoutingModule,
    UIModule,
    ChartsModule,

    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    WidgetModule,
    ChartModule,
    NgApexchartsModule,
    SimplebarAngularModule
  ]
})
export class DashboardsModule { }
