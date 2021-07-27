import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewDashAnalyticsRoutingModule } from './newdash-analytics-routing.module';
import { NewDashAnalyticsComponent } from './newdash-analytics.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbPopoverModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'src/app/calendar/calendar.module';

@NgModule({
  imports: [
    CommonModule,
    NewDashAnalyticsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    NgbPopoverModule,
    CalendarModule,
  ],
  declarations: [
    NewDashAnalyticsComponent,
  ]
})
export class NewDashAnalyticsModule { }
