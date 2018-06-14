import { TestBed, inject } from '@angular/core/testing';

import { UpdatesystemvalueService } from './updatesystemvalue.service';

describe('UpdatesystemvalueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatesystemvalueService]
    });
  });

  it('should be created', inject([UpdatesystemvalueService], (service: UpdatesystemvalueService) => {
    expect(service).toBeTruthy();
  }));
});
