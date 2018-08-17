import { TestBed, inject } from '@angular/core/testing';

import { DatagetService } from './dataget.service';

describe('DatagetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatagetService]
    });
  });

  it('should be created', inject([DatagetService], (service: DatagetService) => {
    expect(service).toBeTruthy();
  }));
});
