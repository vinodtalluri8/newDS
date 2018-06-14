import { TestBed, inject } from '@angular/core/testing';

import { SystemvaluelabelService } from './systemvaluelabel.service';

describe('SystemvaluelabelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemvaluelabelService]
    });
  });

  it('should be created', inject([SystemvaluelabelService], (service: SystemvaluelabelService) => {
    expect(service).toBeTruthy();
  }));
});
