import { TestBed } from '@angular/core/testing';

import { LabreportService } from './labreport.service';

describe('LabreportService', () => {
  let service: LabreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
