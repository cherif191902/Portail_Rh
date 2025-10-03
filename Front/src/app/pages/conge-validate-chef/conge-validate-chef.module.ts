import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CongeValidateChefComponent } from './conge-validate-chef.component';

@NgModule({
  declarations: [CongeValidateChefComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: CongeValidateChefComponent }])]
})
export class CongeValidateChefModule { }
