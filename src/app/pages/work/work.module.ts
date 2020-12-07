import { NgModule } from '@angular/core';

import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { SharedModule } from '../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [WorkComponent],
  imports: [WorkRoutingModule, SharedModule, FlexLayoutModule],
})
export class WorkModule {}
