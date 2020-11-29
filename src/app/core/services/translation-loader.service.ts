import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export enum Languages {
  AR = 'ar-EG',
  EN = 'en-US',
}

@Injectable()
export class TranslationLoaderService {
  constructor(
    private readonly translateService: TranslateService,
    private readonly http: HttpClient
  ) {}

  loadTranslation(): void {
    this.translateService.addLangs([Languages.AR, Languages.EN]);
    this.translateService.setDefaultLang(Languages.AR);

    this.http
      .get('./assets/locale/en-US.json')
      .subscribe((data) =>
        this.translateService.setTranslation(Languages.EN, data, true)
      );

    this.http
      .get('./assets/locale/ar-EG.json')
      .subscribe((data) =>
        this.translateService.setTranslation(Languages.AR, data, true)
      );
  }
}
