import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardauthService } from '../core/guards/guardauth.service';
import { GuardChefService } from '../core/guards/guard-chef.service';
import { GuardRhService } from '../core/guards/guard-rh.service';

import { DefaultComponent } from './dashboards/default/default.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'chat', component: ChatComponent },

  { path: 'dashboard', component: DefaultComponent, canActivate: [GuardauthService] },

  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },

  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },

  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },

  { path: 'conges', loadChildren: () => import('./conges/conges.module').then(m => m.CongesModule), canActivate: [GuardauthService] },

  { path: 'RH', loadChildren: () => import('./espaceRh/rh.module').then(m => m.RhModule), canLoad:[GuardRhService], canActivate:[GuardRhService] },
  { path: 'conges', loadChildren: () => import('./conges/conges.module').then(m => m.CongesModule), canActivate:[GuardauthService] },
  { path: 'conge-request', loadChildren: () => import('./conge-request').then(m => m.CongeRequestModule), canActivate:[GuardauthService] },
  { path: 'conge-validate-chef', loadChildren: () => import('./conge-validate-chef').then(m => m.CongeValidateChefModule), canLoad:[GuardChefService], canActivate:[GuardChefService] },
  { path: 'conge-validate-rh', loadChildren: () => import('./conge-validate-rh').then(m => m.CongeValidateRhModule), canLoad:[GuardRhService], canActivate:[GuardRhService] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
