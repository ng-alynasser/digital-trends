import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { DT_DIRECTION, DTLayoutDirection, DT_DOCUMENT } from '../constants';
import { share } from 'rxjs/operators';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from './translation-loader.service';

@Injectable()
export class DirectionService {
  private directionChange$ = new ReplaySubject(1);

  constructor(
    @Optional() @Inject(DT_DIRECTION) private direction: DTLayoutDirection,
    @Inject(DT_DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly translateService: TranslateService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const currentLanguage = localStorage.getItem('DTuiLanguage');
      currentLanguage === Languages.AR
        ? this.setDirection(DTLayoutDirection.RTL)
        : this.setDirection(DTLayoutDirection.LTR);
    }
  }

  isLtr(): boolean {
    return this.direction === DTLayoutDirection.LTR;
  }

  isRtl(): boolean {
    return this.direction === DTLayoutDirection.RTL;
  }

  setDirection(direction: DTLayoutDirection): void {
    if (isPlatformBrowser(this.platformId)) {
      const htmlElement = this.document.getElementsByTagName('html')[0];

      if (direction === DTLayoutDirection.RTL) {
        localStorage.setItem('DTuiLanguage', Languages.AR);
        this.translateService.use(Languages.AR);
        htmlElement.setAttribute('dir', DTLayoutDirection.RTL);
        htmlElement.setAttribute('lang', 'ar');
      } else {
        localStorage.setItem('DTuiLanguage', Languages.EN);
        this.translateService.use(Languages.EN);
        htmlElement.setAttribute('dir', DTLayoutDirection.LTR);
        htmlElement.setAttribute('lang', 'en');
      }
    }

    this.direction = direction;
    this.directionChange$.next(direction);
  }

  onDirectionChange(): Observable<DTLayoutDirection> {
    return this.directionChange$.pipe(share<DTLayoutDirection>());
  }
}
