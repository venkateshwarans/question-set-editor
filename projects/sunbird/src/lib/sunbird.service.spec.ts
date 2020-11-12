import { TestBed, inject } from '@angular/core/testing';

import { SunbirdService } from './sunbird.service';

describe('SunbirdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SunbirdService]
    });
  });

  it('should be created', inject([SunbirdService], (service: SunbirdService) => {
    expect(service).toBeTruthy();
  }));
});
