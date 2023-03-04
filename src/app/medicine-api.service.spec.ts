import { TestBed } from '@angular/core/testing';

import { MedicineApiService } from './medicine-api.service';

describe('MedicineApiService', () => {
  let service: MedicineApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
