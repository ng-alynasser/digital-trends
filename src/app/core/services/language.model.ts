import { Direction } from '@angular/cdk/bidi';

export interface Language {
  code: string;
  name: string;
  culture: string;
  dir: Direction;
}
