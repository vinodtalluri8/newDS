import { TestBed, inject } from '@angular/core/testing';

import { DeleteValuesService } from './delete-values.service';

describe('DeleteValuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteValuesService]
    });
  });

  it('should be created', inject([DeleteValuesService], (service: DeleteValuesService) => {
    expect(service).toBeTruthy();
  }));
});
