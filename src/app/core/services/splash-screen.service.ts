import {
  animate,
  AnimationBuilder,
  AnimationPlayer,
  style,
} from '@angular/animations';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Injectable()
export class SplashScreenService {
  splashScreenEl: HTMLElement;
  player: AnimationPlayer;

  constructor(
    private readonly animationBuilder: AnimationBuilder,
    private readonly router: Router
  ) {
    this.init();
  }

  private init(): void {
    this.splashScreenEl = document.body.querySelector('#dt-splash-screen');
    if (this.splashScreenEl) {
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          take(1)
        )
        .subscribe(() => setTimeout(() => this.hide(), 500));
    }
  }

  show(): void {
    this.player = this.animationBuilder
      .build([
        style({ opacity: '0', zIndex: '99999' }),
        animate('1000ms ease', style({ opacity: '1' })),
      ])
      .create(this.splashScreenEl);

    setTimeout(() => this.player.play(), 0);
  }

  hide(): void {
    this.player = this.animationBuilder
      .build([
        style({ opacity: '1' }),
        animate(
          '400ms ease',
          style({
            opacity: '0',
            zIndex: '-10',
          })
        ),
      ])
      .create(this.splashScreenEl);

    setTimeout(() => this.player.play(), 0);
  }
}
