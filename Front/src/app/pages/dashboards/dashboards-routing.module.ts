import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RhDashboardComponent } from './rh-dashboard/rh-dashboard.component';
import { ChefDashboardComponent } from './chef-dashboard/chef-dashboard.component';

const routes: Routes = [
    {
        path: 'default',
        component: DefaultComponent
    },
    {
        path: 'admin',
        component: AdminDashboardComponent
    },
    {
        path: 'rh',
        component: RhDashboardComponent
    },
    {
        path: 'chef',
        component: ChefDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
