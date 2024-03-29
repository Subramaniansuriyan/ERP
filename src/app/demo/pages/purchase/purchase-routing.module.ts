import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bulkupload',
        loadChildren: () => import('./bulk-upload/bulk-upload.module').then(module => module.BulkUploadModule)
      },
      {
        path: 'manualupload',
        loadChildren: () => import('./manual-upload/manual-upload.module').then(module => module.ManualUploadModule)
      }
      /*{
        path: 'reset-password',
        loadChildren: () => import('./auth-reset-password/auth-reset-password.module').then(module => module.AuthResetPasswordModule)
      },
      {
        path: 'change-password',
        loadChildren: () => import('./auth-change-password/auth-change-password.module').then(module => module.AuthChangePasswordModule)
      }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
