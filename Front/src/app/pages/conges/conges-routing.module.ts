import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemandeCongeComponent } from './demande/demande-conge.component';
import { SuiviDemandesComponent } from './suivi/suivi-demandes.component';
import { HistoriqueCongesComponent } from './historique/historique-conges.component';
import { MesDemandesComponent } from './mes-demandes/mes-demandes.component';

const routes: Routes = [
    {
        path: 'demande',
        component: DemandeCongeComponent
    },
    {
        path: 'mes-demandes',
        component: MesDemandesComponent
    },
    {
        path: 'list',
        redirectTo: 'mes-demandes',
        pathMatch: 'full'
    },
    {
        path: 'suivi',
        component: SuiviDemandesComponent
    },
    {
        path: 'historique',
        component: HistoriqueCongesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CongesRoutingModule { }