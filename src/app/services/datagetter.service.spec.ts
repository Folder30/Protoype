import { TestBed, inject } from '@angular/core/testing';

import { DatagetterService } from './datagetter.service';

describe('DatagetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatagetterService]
    });
  });

  it('should be created', inject([DatagetterService], (service: DatagetterService) => {
    expect(service).toBeTruthy();
  }));
});
