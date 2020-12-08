import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { NgModule } from '@angular/core';

import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { SharedModule } from '../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [WorkComponent],
  imports: [
    WorkRoutingModule,
    SharedModule,
    FlexLayoutModule,
    CloudinaryModule,
    LightboxModule,
  ],
})
export class WorkModule {}
