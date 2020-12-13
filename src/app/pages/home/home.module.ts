import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, FlexLayoutModule, SwiperModule],
})
export class HomeModule {}
