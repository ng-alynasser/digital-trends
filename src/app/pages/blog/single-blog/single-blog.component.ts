import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss'],
})
export class SingleBlogComponent implements OnInit {
  public blog: any;
  public moreBlogs: any[];

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.blog = this.blogService.getBlogById(id);
        const allBlogs = this.blogService.getBlogs();
        this.moreBlogs = allBlogs.filter((blog) => blog.id !== id).slice(0, 3);
      }
    });
  }
}
