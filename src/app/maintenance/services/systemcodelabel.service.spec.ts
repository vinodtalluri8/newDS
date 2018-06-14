import { TestBed, inject } from '@angular/core/testing';

import { SystemcodelabelService } from './systemcodelabel.service';

describe('SystemcodelabelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemcodelabelService]
    });
  });

  it('should be created', inject([SystemcodelabelService], (service: SystemcodelabelService) => {
    expect(service).toBeTruthy();
  }));
});
