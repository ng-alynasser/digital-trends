import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DirectionService } from '../../core/services/direction.service';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public currentDir = 'rtl';
  public blogs: {
    categoryName: string;
    id: number;
    date: string;
    title: string;
    paragraph: string;
    image: string;
  }[];

  constructor(
    private readonly directionService: DirectionService,
    private readonly blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.directionService.onDirectionChange().subscribe((dir) => {
      this.currentDir = dir;
    });

    this.blogs = this.blogService.getBlogs();
  }
}
