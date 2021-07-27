import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewDashAnalyticsComponent} from './newdash-analytics.component';

const routes: Routes = [
  {
    path: '',
    component: NewDashAnalyticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDashAnalyticsRoutingModule { }
