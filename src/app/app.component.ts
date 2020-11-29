import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from './core/services/translation-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private translationLoaderService: TranslationLoaderService) {}

  ngOnInit(): void {
    this.translationLoaderService.loadTranslation();
  }
}
