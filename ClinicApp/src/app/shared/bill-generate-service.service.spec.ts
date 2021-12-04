import { TestBed } from '@angular/core/testing';

import { BillGenerateServiceService } from './bill-generate-service.service';

describe('BillGenerateServiceService', () => {
  let service: BillGenerateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillGenerateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
