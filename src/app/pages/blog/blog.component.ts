import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public currentDir: string;
  public blogs: {
    categoryName: string;
    id: number;
    date: string;
    title: string;
    paragraph: string;
    image: string;
  }[];

  constructor(
    private readonly blogService: BlogService,
    private readonly translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.currentDir = this.translate.currentLang === 'ar' ? 'rtl' : 'ltr';

    this.translate.onLangChange.subscribe({
      next: (event: LangChangeEvent) => {
        if (event.lang === 'ar') {
          this.currentDir = 'rtl';
        } else {
          this.currentDir = 'ltr';
        }
      },
    });

    this.blogs = this.blogService.getBlogs();
  }
}
