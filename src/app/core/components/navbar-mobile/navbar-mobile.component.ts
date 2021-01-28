import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import {
  faLinkedinIn,
  faGoogle,
  faFacebookF,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { StateService } from '../../services/state.service';
import { DTLayoutDirection } from '../../constants';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMobileComponent {
  @HostBinding('class.visible')
  @Input()
  visible: boolean;
  closeIcon = faTimes;
  faLinkedIn = faLinkedinIn;
  faGoogle = faGoogle;
  faFacebook = faFacebookF;
  faTwitter = faTwitter;

  constructor(
    private readonly stateService: StateService,
    private readonly translate: TranslateService
  ) {}

  toggleLanguage(): void {
    if (this.translate.currentLang === 'en') {
      this.translate.use('ar');
    } else {
      this.translate.use('en');
    }
  }

  close(): void {
    this.stateService.setState('mobileNavMenuIsOpen', false);
  }

  triggerScrollToContactUs(): void {
    this.close();
    this.stateService.setState('triggerScrollToContactUs', true);
  }
}
