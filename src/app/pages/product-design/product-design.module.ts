import { NgModule } from '@angular/core';

import { ProductDesignRoutingModule } from './product-design-routing.module';
import { ProductDesignComponent } from './product-design.component';
import { SharedModule } from '../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CloudinaryModule } from '@cloudinary/angular-5.x';

@NgModule({
  declarations: [ProductDesignComponent],
  imports: [
    ProductDesignRoutingModule,
    SharedModule,
    CloudinaryModule,
    FlexLayoutModule,
  ],
})
export class ProductDesignModule {}
