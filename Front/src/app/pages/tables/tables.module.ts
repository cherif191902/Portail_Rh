import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIModule } from '../../shared/ui/ui.module';
import { NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { TablesRoutingModule } from './tables-routing.module';
import { AdvancedSortableDirective } from './advancedtable/advanced-sortable.directive';
import { BasicComponent } from './basic/basic.component';
import { AdvancedtableComponent } from './advancedtable/advancedtable.component';
import { PointagesComponent } from './pointages/pointages.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';


@NgModule({
  declarations: [BasicComponent, AdvancedtableComponent, AdvancedSortableDirective, PointagesComponent, ProfileSettingsComponent],
  imports: [
    CommonModule,
    
    TablesRoutingModule,
    UIModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbCollapseModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    NgxPaginationModule,
  ],
  providers: [DatePipe]

})
export class TablesModule { }
