import { TestBed, inject } from '@angular/core/testing';

import { AddsystemcodeService } from './addsystemcode.service';

describe('AddsystemcodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddsystemcodeService]
    });
  });

  it('should be created', inject([AddsystemcodeService], (service: AddsystemcodeService) => {
    expect(service).toBeTruthy();
  }));
});
