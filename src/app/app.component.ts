import { Component, OnInit } from '@angular/core';
import { StateService } from './core/services/state.service';
import { merge, Observable } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { I18NService } from './core/services/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  navMenuVisible$: Observable<boolean>;

  constructor(
    private readonly i18nService: I18NService,
    private readonly stateService: StateService,
    private readonly router: Router,
    private readonly translationService: TranslateService,
    private readonly route: ActivatedRoute,
    private readonly titleService: Title
  ) {}

  ngOnInit(): void {
    this.i18nService.init(
      {
        code: 'en',
        name: 'English',
        culture: 'en-US',
        dir: 'ltr',
      },
      [
        {
          code: 'en',
          name: 'English',
          culture: 'en-US',
          dir: 'ltr',
        },
        {
          code: 'ar',
          name: 'العربية',
          culture: 'ar-EG',
          dir: 'rtl',
        },
      ]
    );
    this.navMenuVisible$ = this.stateService.select(
      (state) => state.mobileNavMenuIsOpen
    );

    const onNavigationEnd$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );

    merge(this.translationService.onLangChange, onNavigationEnd$)
      .pipe(
        map(() => {
          let route = this.route;
          while (route.firstChild) {
            route = route.firstChild;
          }

          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data)
      )
      .subscribe((event) => {
        const { titleEN, titleAR } = event;
        if (document.dir === 'rtl') {
          this.titleService.setTitle(titleAR);
        } else {
          this.titleService.setTitle(titleEN);
        }
      });
  }
}
