import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SingleBlogComponent } from './single-blog/single-blog.component';

@NgModule({
  declarations: [BlogComponent, SingleBlogComponent],
  imports: [
    SharedModule,
    BlogRoutingModule,
    FlexLayoutModule,
    CloudinaryModule,
  ],
})
export class BlogModule {}
