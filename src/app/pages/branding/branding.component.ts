import { Component, OnInit } from '@angular/core';
import { DirectionService } from '../../core/services/direction.service';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss'],
})
export class BrandingComponent implements OnInit {
  public currentDir = 'rtl';

  constructor(private readonly directionService: DirectionService) {}

  ngOnInit(): void {
    this.directionService
      .onDirectionChange()
      .subscribe((dir) => (this.currentDir = dir));
  }
}
