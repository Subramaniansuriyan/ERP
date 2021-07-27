import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailySelectionComponent } from './daily-selection/daily-selection.component';
import {FormsModule} from '@angular/forms';
import { WeeklySelectionComponent } from './weekly-selection/weekly-selection.component';
import { MonthlySelectionComponent } from './monthly-selection/monthly-selection.component';



@NgModule({
  declarations: [DailySelectionComponent, WeeklySelectionComponent, MonthlySelectionComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DailySelectionComponent,WeeklySelectionComponent,MonthlySelectionComponent]
})
export class CalendarModule { }
