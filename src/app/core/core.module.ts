import { NgModule, PLATFORM_ID } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
  TransferState,
} from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DT_DOCUMENT, DT_WINDOW } from './constants';
import { isPlatformBrowser } from '@angular/common';
import { SplashScreenService } from './services/splash-screen.service';
import { StateService } from './services/state.service';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';

import {
  CloudinaryConfiguration,
  CloudinaryModule,
} from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { translateBrowserLoaderFactory } from './translate-loader/translate-loader-browser';

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
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState],
      },
    }),
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
    SplashScreenService,
    StateService,
  ],
})
export class CoreModule {
  constructor(private readonly splashScreenService: SplashScreenService) {}
}
