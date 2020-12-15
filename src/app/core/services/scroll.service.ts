import { Injectable } from '@angular/core';
import {
  ScrollToConfigOptions,
  ScrollToService,
} from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private readonly scrollToService: ScrollToService) {}

  triggerScrollToContactUs(): void {
    const config: ScrollToConfigOptions = {
      target: 'contact-us',
    };

    this.scrollToService.scrollTo(config);
  }
}
