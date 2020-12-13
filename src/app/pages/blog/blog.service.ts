import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
  private _blogs = [
    {
      categoryName: 'BLOGS.FIRST_BLOG.CATEGORY_NAME',
      id: 1,
      date: 'BLOGS.FIRST_BLOG.DATE',
      title: 'BLOGS.FIRST_BLOG.TITLE',
      paragraph: 'BLOGS.FIRST_BLOG.PARAGRAPH',
      cover:
        'https://res.cloudinary.com/alynasser/image/upload/v1607851312/blogs/blog-detail-4-min_qrunjc.png',

      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1607820731/blogs/6-min_d9dwpo.png',
      mainContent: {
        mainParagraphs: [
          'BLOGS.FIRST_BLOG.CONTENT.PARAGRAPH_1',
          'BLOGS.FIRST_BLOG.CONTENT.PARAGRAPH_2',
        ],
        secondaryTitle: 'BLOGS.FIRST_BLOG.CONTENT.SECONDARY_TITLE',
        secondaryContent: [
          {
            title: 'BLOGS.FIRST_BLOG.CONTENT.SECONDARY_TITLE_1',
            paragraph: 'BLOGS.FIRST_BLOG.CONTENT.SECONDARY_PARAGRAPH_1',
          },
          {
            title: 'BLOGS.FIRST_BLOG.CONTENT.SECONDARY_TITLE_2',
            paragraph: 'BLOGS.FIRST_BLOG.CONTENT.SECONDARY_PARAGRAPH_2',
          },
          {
            title: 'BLOGS.FIRST_BLOG.CONTENT.SECONDARY_TITLE_3',
            paragraph: 'BLOGS.FIRST_BLOG.CONTENT.SECONDARY_PARAGRAPH_3',
          },
          {
            title: 'BLOGS.FIRST_BLOG.CONTENT.SECONDARY_TITLE_4',
            paragraph: 'BLOGS.FIRST_BLOG.CONTENT.SECONDARY_PARAGRAPH_4',
          },
        ],
      },
    },
    {
      categoryName: 'BLOGS.SECOND_BLOG.CATEGORY_NAME',
      id: 2,
      date: 'BLOGS.SECOND_BLOG.DATE',
      title: 'BLOGS.SECOND_BLOG.TITLE',
      paragraph: 'BLOGS.SECOND_BLOG.PARAGRAPH',
      cover:
        'https://res.cloudinary.com/alynasser/image/upload/v1607851312/blogs/blog-detail-4-min_qrunjc.png',

      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1607820818/blogs/4-min_ohecu4.png',
      mainContent: {
        mainParagraphs: [
          'BLOGS.SECOND_BLOG.CONTENT.PARAGRAPH_1',
          'BLOGS.SECOND_BLOG.CONTENT.PARAGRAPH_2',
        ],
        secondaryTitle: 'BLOGS.SECOND_BLOG.CONTENT.SECONDARY_TITLE',
        secondaryContent: [
          {
            title: 'BLOGS.SECOND_BLOG.CONTENT.SECONDARY_TITLE_1',
            paragraph: 'BLOGS.SECOND_BLOG.CONTENT.SECONDARY_PARAGRAPH_1',
          },
          {
            title: 'BLOGS.SECOND_BLOG.CONTENT.SECONDARY_TITLE_2',
            paragraph: 'BLOGS.SECOND_BLOG.CONTENT.SECONDARY_PARAGRAPH_2',
          },
          {
            title: 'BLOGS.SECOND_BLOG.CONTENT.SECONDARY_TITLE_3',
            paragraph: 'BLOGS.SECOND_BLOG.CONTENT.SECONDARY_PARAGRAPH_3',
          },
          {
            title: 'BLOGS.SECOND_BLOG.CONTENT.SECONDARY_TITLE_4',
            paragraph: 'BLOGS.SECOND_BLOG.CONTENT.SECONDARY_PARAGRAPH_4',
          },
          {
            paragraph: 'BLOGS.SECOND_BLOG.CONTENT.SECONDARY_PARAGRAPH_5',
          },
        ],
      },
    },
    {
      categoryName: 'BLOGS.THIRD_BLOG.CATEGORY_NAME',
      id: 3,
      date: 'BLOGS.THIRD_BLOG.DATE',
      title: 'BLOGS.THIRD_BLOG.TITLE',
      paragraph: 'BLOGS.THIRD_BLOG.PARAGRAPH',
      cover:
        'https://res.cloudinary.com/alynasser/image/upload/v1607851312/blogs/blog-detail-4-min_qrunjc.png',

      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1607820850/blogs/3-min_ao0lwg.png',
      mainContent: {
        mainParagraphs: [
          'BLOGS.THIRD_BLOG.CONTENT.PARAGRAPH_1',
          'BLOGS.THIRD_BLOG.CONTENT.PARAGRAPH_2',
          'BLOGS.THIRD_BLOG.CONTENT.PARAGRAPH_3',
        ],
        secondaryTitle: 'BLOGS.THIRD_BLOG.CONTENT.SECONDARY_TITLE',
        secondaryContent: [
          {
            paragraph: 'BLOGS.THIRD_BLOG.CONTENT.SECONDARY_PARAGRAPH_1',
          },
          {
            paragraph: 'BLOGS.THIRD_BLOG.CONTENT.SECONDARY_PARAGRAPH_2',
          },
        ],
      },
    },
    {
      categoryName: 'BLOGS.FOURTH_BLOG.CATEGORY_NAME',
      id: 4,
      date: 'BLOGS.FOURTH_BLOG.DATE',
      title: 'BLOGS.FOURTH_BLOG.TITLE',
      paragraph: 'BLOGS.FOURTH_BLOG.PARAGRAPH',
      cover:
        'https://res.cloudinary.com/alynasser/image/upload/v1607851312/blogs/blog-detail-4-min_qrunjc.png',

      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1607820884/blogs/2-min_csp15r.png',
      mainContent: {
        mainParagraphs: [
          'BLOGS.FOURTH_BLOG.CONTENT.PARAGRAPH_1',
          'BLOGS.FOURTH_BLOG.CONTENT.PARAGRAPH_2',
        ],
        secondaryTitle: 'BLOGS.FOURTH_BLOG.CONTENT.SECONDARY_TITLE',
        secondaryContent: [
          {
            paragraph: 'BLOGS.FOURTH_BLOG.CONTENT.SECONDARY_PARAGRAPH_1',
          },
          {
            paragraph: 'BLOGS.FOURTH_BLOG.CONTENT.SECONDARY_PARAGRAPH_2',
          },
        ],
      },
    },
    {
      categoryName: 'BLOGS.FIFTH_BLOG.CATEGORY_NAME',
      id: 5,
      date: 'BLOGS.FIFTH_BLOG.DATE',
      title: 'BLOGS.FIFTH_BLOG.TITLE',
      paragraph: 'BLOGS.FIFTH_BLOG.PARAGRAPH',
      cover:
        'https://res.cloudinary.com/alynasser/image/upload/v1607851312/blogs/blog-detail-4-min_qrunjc.png',

      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1607820918/blogs/5-min_pbqwct.png',
      mainContent: {
        mainParagraphs: [
          'BLOGS.FIFTH_BLOG.CONTENT.PARAGRAPH_1',
          'BLOGS.FIFTH_BLOG.CONTENT.PARAGRAPH_2',
          'BLOGS.FIFTH_BLOG.CONTENT.PARAGRAPH_3',
        ],
        secondaryTitle: 'BLOGS.FIFTH_BLOG.CONTENT.SECONDARY_TITLE',
        secondaryContent: [
          {
            paragraph: 'BLOGS.FIFTH_BLOG.CONTENT.SECONDARY_PARAGRAPH_1',
          },
          {
            paragraph: 'BLOGS.FIFTH_BLOG.CONTENT.SECONDARY_PARAGRAPH_2',
          },
          {
            paragraph: 'BLOGS.FIFTH_BLOG.CONTENT.SECONDARY_PARAGRAPH_3',
          },
        ],
      },
    },
    {
      categoryName: 'BLOGS.SIXTH_BLOG.CATEGORY_NAME',
      id: 6,
      date: 'BLOGS.SIXTH_BLOG.DATE',
      title: 'BLOGS.SIXTH_BLOG.TITLE',
      paragraph: 'BLOGS.SIXTH_BLOG.PARAGRAPH',
      cover:
        'https://res.cloudinary.com/alynasser/image/upload/v1607851312/blogs/blog-detail-4-min_qrunjc.png',
      image:
        'https://res.cloudinary.com/alynasser/image/upload/v1607820953/blogs/1-min_vfildv.png',
      mainContent: {
        mainParagraphs: ['BLOGS.SIXTH_BLOG.CONTENT.PARAGRAPH_1'],
        secondaryContent: [
          {
            title: 'BLOGS.SIXTH_BLOG.CONTENT.SECONDARY_TITLE_1',
            paragraph: 'BLOGS.SIXTH_BLOG.CONTENT.SECONDARY_PARAGRAPH_1',
          },
          {
            paragraph: 'BLOGS.SIXTH_BLOG.CONTENT.SECONDARY_PARAGRAPH_2',
          },
          {
            title: 'BLOGS.SIXTH_BLOG.CONTENT.SECONDARY_TITLE_3',
            paragraph: 'BLOGS.SIXTH_BLOG.CONTENT.SECONDARY_PARAGRAPH_3',
          },
          {
            title: 'BLOGS.SIXTH_BLOG.CONTENT.SECONDARY_TITLE_4',
            paragraph: 'BLOGS.SIXTH_BLOG.CONTENT.SECONDARY_PARAGRAPH_4',
          },
        ],
      },
    },
  ];

  constructor() {}

  getBlogs(): any[] {
    return this._blogs;
  }

  getBlogById(id: number): any {
    const index = this._blogs.findIndex((blog) => blog.id === id);
    if (index >= 0) {
      return this._blogs[index];
    }
  }
}
