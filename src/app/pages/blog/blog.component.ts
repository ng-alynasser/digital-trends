import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public readonly blogs: {
    categoryName: string;
    date: string;
    title: string;
    paragraph: string;
  }[] = [
    {
      categoryName: 'CATEGORY_NAME',
      date: 'DATE',
      title: 'TITLE_ONE',
      paragraph: 'PARAGRAPH_ONE',
    },
    {
      categoryName: 'CATEGORY_NAME',
      date: 'DATE',
      title: 'TITLE_TWO',
      paragraph: 'PARAGRAPH_TWO',
    },
    {
      categoryName: 'CATEGORY_NAME',
      date: 'DATE',
      title: 'TITLE_THREE',
      paragraph: 'PARAGRAPH_THREE',
    },
    {
      categoryName: 'CATEGORY_NAME',
      date: 'DATE',
      title: 'TITLE_FOUR',
      paragraph: 'PARAGRAPH_FOUR',
    },
    {
      categoryName: 'CATEGORY_NAME',
      date: 'DATE',
      title: 'TITLE_FIVE',
      paragraph: 'PARAGRAPH_FIVE',
    },
    {
      categoryName: 'CATEGORY_NAME',
      date: 'DATE',
      title: 'TITLE_SIX',
      paragraph: 'PARAGRAPH_SIX',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
