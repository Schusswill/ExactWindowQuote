/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuoteBuilderService } from './quote-builder.service';

describe('Service: QuoteBuilder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteBuilderService]
    });
  });

  it('should ...', inject([QuoteBuilderService], (service: QuoteBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
