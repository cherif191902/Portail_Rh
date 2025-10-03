import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CongeRequestComponent } from './conge-request.component';

@NgModule({
  declarations: [CongeRequestComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild([{ path: '', component: CongeRequestComponent }])]
})
export class CongeRequestModule { }
