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
import { DirectionService } from '../../services/direction.service';
import { DTLayoutDirection } from '../../constants';
import { Router } from '@angular/router';

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
    private readonly directionService: DirectionService,
    private readonly router: Router
  ) {}

  toggleLanguage(): void {
    this.directionService.isRtl()
      ? this.directionService.setDirection(DTLayoutDirection.LTR)
      : this.directionService.setDirection(DTLayoutDirection.RTL);
  }

  close(): void {
    this.stateService.setState('mobileNavMenuIsOpen', false);
  }
}
