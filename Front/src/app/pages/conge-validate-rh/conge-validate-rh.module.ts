import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CongeValidateRhComponent } from './conge-validate-rh.component';

@NgModule({
  declarations: [CongeValidateRhComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: CongeValidateRhComponent }])]
})
export class CongeValidateRhModule { }
