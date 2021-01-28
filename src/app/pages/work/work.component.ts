import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Lightbox } from 'ngx-lightbox';
import { BehaviorSubject } from 'rxjs';
import { images } from './images';
import * as AOS from 'aos';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  public readonly images = images;
  private readonly albums = [];
  public currentDir = 'rtl';
  isResponsive$ = new BehaviorSubject<boolean>(null);

  constructor(
    private readonly lightbox: Lightbox,
    private readonly mediaObserver: MediaObserver,
    private readonly translate: TranslateService
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.images.forEach((image) => {
      this.albums.push({
        src: image,
        caption: null,
        thumb: null,
      });
    });

    this.mediaObserver.media$.subscribe((mediaChange) => {
      if (mediaChange.mqAlias === 'xs') {
        this.isResponsive$.next(true);
      } else {
        this.isResponsive$.next(false);
      }
    });

    this.translate.onLangChange.subscribe({
      next: (event: LangChangeEvent) => {
        if (event.lang === 'ar') {
          this.currentDir = 'rtl';
        } else {
          this.currentDir = 'ltr';
        }
      },
    });
  }

  open(index: number): void {
    this.lightbox.open(this.albums, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
