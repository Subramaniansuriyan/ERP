import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualUploadRoutingModule } from './manual-upload-routing.module';
import { ManualUploadComponent } from './manual-upload.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { GlobalModule } from 'src/app/demo/common/global.module';
//import { FilterPipe } from '../../../common/filter.pipe.ts';

@NgModule({
  imports: [
    CommonModule,
    ManualUploadRoutingModule,
    SharedModule,
    NgbDropdownModule,
    GlobalModule
  ],
  declarations: [ManualUploadComponent]
})
export class ManualUploadModule { }
