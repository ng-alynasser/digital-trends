import { Direction, Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Language } from './language.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class I18NService {
  constructor(
    private readonly translate: TranslateService,
    private readonly localStorageService: LocalStorageService,
    private readonly directionality: Directionality,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  init(defaultLanguage: Language, availableLanguages: Language[]): void {
    this.translate.setDefaultLang(
      defaultLanguage.code || this.translate.getBrowserCultureLang()
    );

    this.translate.addLangs(
      availableLanguages.map((lang: Language) => lang.code)
    );

    this.translate.onLangChange.subscribe({
      next: (event: LangChangeEvent) => {
        this.localStorageService.set('uiLanguageCode', event.lang);
        this.document.documentElement.dir = this.getDirectionByCode(
          event.lang,
          availableLanguages
        );
        this.document.documentElement.lang = event.lang;
      },
    });

    if (this.localStorageService.get('uiLanguageCode')) {
      this.translate.use(this.localStorageService.get('uiLanguageCode'));
    } else {
      this.translate.use('en');
    }
  }

  getDirectionByCode(code: string, availableLanguages: Language[]): Direction {
    const index = availableLanguages.findIndex(
      (language) => language.code === code
    );

    return index >= 0
      ? availableLanguages[index].dir
      : this.directionality.value;
  }
}
