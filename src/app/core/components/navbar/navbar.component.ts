import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DTLayoutDirection } from '../../constants';
import { DirectionService } from '../../services/direction.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  faBars = faBars;

  constructor(
    private readonly directionService: DirectionService,
    private readonly stateService: StateService
  ) {}

  ngOnInit(): void {}

  toggleLanguage(): void {
    this.directionService.isRtl()
      ? this.directionService.setDirection(DTLayoutDirection.LTR)
      : this.directionService.setDirection(DTLayoutDirection.RTL);
  }

  toggleSidebarMobile(): void {
    this.stateService.setState('mobileNavMenuIsOpen', true);
  }
}
