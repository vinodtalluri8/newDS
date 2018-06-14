import { TestBed, inject } from '@angular/core/testing';

import { AddsystemvaluesService } from './addsystemvalues.service';

describe('AddsystemvaluesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddsystemvaluesService]
    });
  });

  it('should be created', inject([AddsystemvaluesService], (service: AddsystemvaluesService) => {
    expect(service).toBeTruthy();
  }));
});
