import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DirectionService } from '../../core/services/direction.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public currentDir = 'rtl';
  public readonly blogs: {
    categoryName: string;
    id: number;
    date: string;
    title: string;
    paragraph: string;
    image: string;
  }[] = [
    {
      categoryName: 'CATEGORY_NAME',
      id: 1,
      date: 'DATE',
      title: 'TITLE_ONE',
      paragraph: 'PARAGRAPH_ONE',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1607820731/blogs/6-min_d9dwpo.png',
    },
    {
      categoryName: 'CATEGORY_NAME',
      id: 2,
      date: 'DATE',
      title: 'TITLE_TWO',
      paragraph: 'PARAGRAPH_TWO',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1607820818/blogs/4-min_ohecu4.png',
    },
    {
      categoryName: 'CATEGORY_NAME',
      id: 3,
      date: 'DATE',
      title: 'TITLE_THREE',
      paragraph: 'PARAGRAPH_THREE',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1607820850/blogs/3-min_ao0lwg.png',
    },
    {
      categoryName: 'CATEGORY_NAME',
      id: 4,
      date: 'DATE',
      title: 'TITLE_FOUR',
      paragraph: 'PARAGRAPH_FOUR',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1607820884/blogs/2-min_csp15r.png',
    },
    {
      categoryName: 'CATEGORY_NAME',
      id: 5,
      date: 'DATE',
      title: 'TITLE_FIVE',
      paragraph: 'PARAGRAPH_FIVE',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1607820918/blogs/5-min_pbqwct.png',
    },
    {
      categoryName: 'CATEGORY_NAME',
      id: 6,
      date: 'DATE',
      title: 'TITLE_SIX',
      paragraph: 'PARAGRAPH_SIX',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1607820953/blogs/1-min_vfildv.png',
    },
  ];

  constructor(private readonly directionService: DirectionService) {}

  ngOnInit(): void {
    this.directionService.onDirectionChange().subscribe((dir) => {
      this.currentDir = dir;
    });
  }
}
