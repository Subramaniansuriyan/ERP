import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManualUploadComponent} from './manual-upload.component';

const routes: Routes = [
  {
    path: '',
    component: ManualUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualUploadRoutingModule { }
