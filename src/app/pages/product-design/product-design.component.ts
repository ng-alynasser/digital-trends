import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'app-product-design',
  templateUrl: './product-design.component.html',
  styleUrls: ['./product-design.component.scss'],
})
export class ProductDesignComponent implements OnInit {
  public currentDir = 'rtl';

  constructor(
    private readonly translate: TranslateService,
    private readonly stateService: StateService
  ) {}

  ngOnInit(): void {
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
