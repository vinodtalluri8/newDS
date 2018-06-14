import { TestBed, inject } from '@angular/core/testing';

import { SystemcodetypelistService } from './systemcodetypelist.service';

describe('SystemcodetypelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemcodetypelistService]
    });
  });

  it('should be created', inject([SystemcodetypelistService], (service: SystemcodetypelistService) => {
    expect(service).toBeTruthy();
  }));
});
