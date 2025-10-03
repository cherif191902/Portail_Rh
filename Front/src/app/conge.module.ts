// Ce module était utilisé temporairement lors de l'ajout des composants de congé.
// Les composants sont maintenant déclarés dans leurs modules lazy correspondants
// (conge-request.module.ts, conge-validate-chef.module.ts, conge-validate-rh.module.ts)
// Gardons un stub vierge pour éviter les erreurs de build si référencé ailleurs.
import { NgModule } from '@angular/core';

@NgModule({})
export class CongeModule { }
