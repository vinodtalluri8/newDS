import { TestBed, inject } from '@angular/core/testing';

import { UpdatesystemcodeService } from './updatesystemcode.service';

describe('UpdatesystemcodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatesystemcodeService]
    });
  });

  it('should be created', inject([UpdatesystemcodeService], (service: UpdatesystemcodeService) => {
    expect(service).toBeTruthy();
  }));
});
