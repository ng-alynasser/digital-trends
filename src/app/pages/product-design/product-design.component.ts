import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'app-product-design',
  templateUrl: './product-design.component.html',
  styleUrls: ['./product-design.component.scss'],
})
export class ProductDesignComponent implements OnInit {
  public currentDir: string;

  constructor(
    private readonly translate: TranslateService,
    private readonly stateService: StateService
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
  }

  triggerScrollToContactUs(): void {
    this.stateService.setState('triggerScrollToContactUs', true);
  }
}
