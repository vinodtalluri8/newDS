import { TestBed, inject } from '@angular/core/testing';

import { DeletecodeService } from './deletecode.service';

describe('DeletecodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeletecodeService]
    });
  });

  it('should be created', inject([DeletecodeService], (service: DeletecodeService) => {
    expect(service).toBeTruthy();
  }));
});
