import { TestBed, inject } from '@angular/core/testing';

import { SystemvaluetypelistService } from './systemvaluetypelist.service';

describe('SystemvaluetypelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemvaluetypelistService]
    });
  });

  it('should be created', inject([SystemvaluetypelistService], (service: SystemvaluetypelistService) => {
    expect(service).toBeTruthy();
  }));
});
