import { TestBed } from '@angular/core/testing';

import { TestdetailsService } from './testdetails.service';

describe('TestdetailsService', () => {
  let service: TestdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
