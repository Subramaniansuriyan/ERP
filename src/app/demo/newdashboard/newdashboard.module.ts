import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewDashboardRoutingModule } from './newdashboard-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    NewDashboardRoutingModule,
    SharedModule,
    ChartsModule,
  ],
})
export class NewDashboardModule { }
