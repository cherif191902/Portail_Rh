import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { AdvancedtableComponent } from './advancedtable/advancedtable.component';
import { PointagesComponent } from './pointages/pointages.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
const routes: Routes = [
    {
        path: 'basic',
        component: BasicComponent
    },
    {
        path: 'advanced',
        component: AdvancedtableComponent
    },
     {
    path: 'pointages',
    component: PointagesComponent
  },
  { path: 'profile-settings', component: ProfileSettingsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }
