import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspaceRhComponent } from './espace-rh/espace-rh.component';
import { HistoriqueRhComponent } from './historique-rh/historique-rh.component';
import { GestionutilisateurComponent } from './gestionutilisateur/gestionutilisateur.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';
import { GestionTypeCongeComponent } from './gestion-type-conge/gestion-type-conge.component';
import { AffectationChefsComponent } from './affectation-chefs/affectation-chefs.component';
import { AffectationTableComponent } from '../affectation-table/affectation-table.component';
import { EmployesInfoComponent } from './employes-info/employes-info.component';
import { ValidationCongesComponent } from './validation-conges/validation-conges.component';
import { HistoriqueDecisionsComponent } from './historique-decisions/historique-decisions.component';
import { RhDashboardComponent } from './rh-dashboard/rh-dashboard.component';
import { StatistiquesRhComponent } from './statistiques-rh/statistiques-rh.component';
import { RapportsRhComponent } from './rapports-rh/rapports-rh.component';
import { ConfigurationRhComponent } from './configuration-rh/configuration-rh.component';
import { NotificationsRhComponent } from './notifications-rh/notifications-rh.component';



const routes: Routes = [
    {
        path: '',
        component: RhDashboardComponent
    },
    {
        path: 'dashboard',
        component: RhDashboardComponent
    },
    {
        path: 'demandeRh',
        component: EspaceRhComponent
    },
    {
        path: 'historiqueRh',
        component: HistoriqueRhComponent
    },
    {
        path: 'gestionUtilisateur',
        component: GestionutilisateurComponent
    },
    // {
    //     path: 'create',
    //     component: CreateComponent
    // }
    {
        path: 'Service',
        component: GestionServiceComponent
    },
    {
        path: 'TypeConge',
        component: GestionTypeCongeComponent
    },
    {
        path: 'affectations',
        component: AffectationChefsComponent
    },
    {
        path: 'tableau-affectations',
        component: AffectationTableComponent
    },
    {
        path: 'employes-info',
        component: EmployesInfoComponent
    },
    {
        path: 'validation-conges',
        component: ValidationCongesComponent
    },
    {
        path: 'historique-decisions',
        component: HistoriqueDecisionsComponent
    },
    {
        path: 'statistiques',
        component: StatistiquesRhComponent
    },
    {
        path: 'rapports',
        component: RapportsRhComponent
    },
    {
        path: 'configuration',
        component: ConfigurationRhComponent
    },
    {
        path: 'notifications',
        component: NotificationsRhComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RhRoutingModule {}
