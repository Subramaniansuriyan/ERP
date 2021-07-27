import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DateWiseComponent} from './date-wise.component';

const routes: Routes = [
  {
    path: '',
    component: DateWiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateWiseRoutingModule { }
