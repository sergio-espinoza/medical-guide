import { NgModule } from '@angular/core';

import { InmunizationRoutingModule } from './inmunization-routing.module';
import { InmunizationComponent } from './inmunization.component';
import { SharedModule } from '../../../shared/shared.module';
import { InmunizationListComponent } from './inmunization-list/inmunization-list.component';
import { InmunizationDetailComponent } from './inmunization-detail/inmunization-detail.component';
import { InmunizationFormComponent } from './inmunization-form/inmunization-form.component';
import {
  InmunizationDetailDialogComponent
} from './inmunization-detail/inmunization-detail.dialog.component';

@NgModule({
  declarations: [
    InmunizationComponent,
    InmunizationListComponent,
    InmunizationDetailComponent,
    InmunizationDetailDialogComponent,
    InmunizationFormComponent
  ],
  imports: [
    SharedModule,
    InmunizationRoutingModule,
  ],
  entryComponents: [
    InmunizationDetailDialogComponent
  ]
})
export class InmunizationModule { }
