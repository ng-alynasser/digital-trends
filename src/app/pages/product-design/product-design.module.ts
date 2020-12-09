import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDesignRoutingModule } from './product-design-routing.module';
import { ProductDesignComponent } from './product-design.component';


@NgModule({
  declarations: [ProductDesignComponent],
  imports: [
    CommonModule,
    ProductDesignRoutingModule
  ]
})
export class ProductDesignModule { }
