import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from './core/services/translation-loader.service';
import { StateService } from './core/services/state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  navMenuVisible$: Observable<boolean>;

  constructor(
    private translationLoaderService: TranslationLoaderService,
    private readonly stateService: StateService
  ) {}

  ngOnInit(): void {
    this.translationLoaderService.loadTranslation();
    this.navMenuVisible$ = this.stateService.select(
      (state) => state.mobileNavMenuIsOpen
    );
  }
}
