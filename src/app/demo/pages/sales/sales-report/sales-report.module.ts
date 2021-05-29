import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesReportRoutingModule } from './sales-report-routing.module';
import { SalesReportComponent } from './sales-report.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { GlobalModule } from 'src/app/demo/common/global.module';
//import { FilterPipe } from '../../../common/filter.pipe.ts';

@NgModule({
  imports: [
    CommonModule,
    SalesReportRoutingModule,
    SharedModule,
    NgbDropdownModule,
    GlobalModule
  ],
  declarations: [SalesReportComponent]
})
export class SalesReportModule { }
