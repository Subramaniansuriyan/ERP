import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkUploadRoutingModule } from './bulk-upload-routing.module';
import { BulkUploadComponent } from './bulk-upload.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import { GlobalModule } from 'src/app/demo/common/global.module';
import {NgbButtonsModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BulkUploadRoutingModule,
    SharedModule,
    NgbButtonsModule, 
    NgbPaginationModule,
    GlobalModule
  ],
  declarations: [BulkUploadComponent]
})
export class BulkUploadModule { }
