import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DTLayoutDirection } from '../../constants';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { StateService } from '../../services/state.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  faBars = faBars;

  constructor(
    private readonly stateService: StateService,
    private readonly translate: TranslateService
  ) {}

  ngOnInit(): void {}

  toggleLanguage(): void {
    if (this.translate.currentLang === 'en') {
      this.translate.use('ar');
    } else {
      this.translate.use('en');
    }
  }

  toggleSidebarMobile(): void {
    this.stateService.setState('mobileNavMenuIsOpen', true);
  }

  triggerScrollToContactUs(): void {
    this.stateService.setState('triggerScrollToContactUs', true);
  }
}
