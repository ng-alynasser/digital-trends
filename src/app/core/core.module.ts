import { NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DT_DOCUMENT, DT_WINDOW } from './constants';
import { isPlatformBrowser } from '@angular/common';
import { DirectionService } from './services/direction.service';
import { TranslationLoaderService } from './services/translation-loader.service';
import { SplashScreenService } from './services/splash-screen.service';
import { StateService } from './services/state.service';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';

import {
  CloudinaryConfiguration,
  CloudinaryModule,
} from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

export function windowFactory(platformId: object): Window | undefined {
  if (isPlatformBrowser(platformId)) {
    return window;
  }

  return undefined;
}

export function documentFactory(platformId: object): Document | undefined {
  if (isPlatformBrowser(platformId)) {
    return document;
  }

  return undefined;
}

@NgModule({
  declarations: [NavbarComponent, FooterComponent, NavbarMobileComponent],
  exports: [NavbarComponent, FooterComponent, NavbarMobileComponent],
  imports: [
    SharedModule,
    OverlayModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    TranslateModule.forRoot(),
    FlexLayoutModule.withConfig({
      ssrObserveBreakpoints: ['xs', 'lt-md'],
    }),
    CloudinaryModule.forRoot({ Cloudinary }, {
      cloud_name: 'alynasser',
    } as CloudinaryConfiguration),
  ],
  providers: [
    {
      provide: DT_DOCUMENT,
      useFactory: documentFactory,
      deps: [PLATFORM_ID],
    },
    {
      provide: DT_WINDOW,
      useFactory: windowFactory,
      deps: [PLATFORM_ID],
    },
    DirectionService,
    TranslationLoaderService,
    SplashScreenService,
    StateService,
  ],
})
export class CoreModule {
  constructor(private readonly splashScreenService: SplashScreenService) {}
}
