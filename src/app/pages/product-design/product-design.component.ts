import { Component, OnInit } from '@angular/core';
import { DirectionService } from '../../core/services/direction.service';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'app-product-design',
  templateUrl: './product-design.component.html',
  styleUrls: ['./product-design.component.scss'],
})
export class ProductDesignComponent implements OnInit {
  public currentDir = 'rtl';

  constructor(
    private readonly directionService: DirectionService,
    private readonly stateService: StateService
  ) {}

  ngOnInit(): void {
    this.directionService
      .onDirectionChange()
      .subscribe((dir) => (this.currentDir = dir));
  }

  triggerScrollToContactUs(): void {
    this.stateService.setState('triggerScrollToContactUs', true);
  }
}
