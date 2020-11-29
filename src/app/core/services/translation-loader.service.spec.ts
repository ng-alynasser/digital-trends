/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TranslationLoaderService } from './translation-loader.service';

describe('Service: TranslationLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslationLoaderService]
    });
  });

  it('should ...', inject([TranslationLoaderService], (service: TranslationLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
