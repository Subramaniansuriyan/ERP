import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateWiseRoutingModule } from './date-wise-routing.module';
import { DateWiseComponent } from './date-wise.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import { GlobalModule } from 'src/app/demo/common/global.module';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DateWiseRoutingModule,
    SharedModule,
    NgbButtonsModule, 
    NgbPaginationModule,
    GlobalModule
  ],
  declarations: [DateWiseComponent]
})
export class DateWiseModule { }
