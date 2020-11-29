import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DTLayoutDirection, DT_DOCUMENT, DT_WINDOW } from '../../constants';
import { DirectionService } from '../../services/direction.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  displayedLang: string;

  constructor(private readonly directionService: DirectionService) {}

  ngOnInit(): void {
    this.directionService.onDirectionChange().subscribe((direction) => {
      direction === DTLayoutDirection.RTL
        ? (this.displayedLang = 'English')
        : (this.displayedLang = 'عربى');
    });
  }

  toggleLanguage(): void {
    this.displayedLang === 'English'
      ? this.directionService.setDirection(DTLayoutDirection.LTR)
      : this.directionService.setDirection(DTLayoutDirection.RTL);
  }
}
