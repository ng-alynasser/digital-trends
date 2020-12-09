import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandingRoutingModule } from './branding-routing.module';
import { BrandingComponent } from './branding.component';
import { SharedModule } from '../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CloudinaryModule } from '@cloudinary/angular-5.x';

@NgModule({
  declarations: [BrandingComponent],
  imports: [
    SharedModule,
    CloudinaryModule,
    BrandingRoutingModule,
    FlexLayoutModule,
  ],
})
export class BrandingModule {}
