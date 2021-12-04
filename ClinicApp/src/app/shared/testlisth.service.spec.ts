import { TestBed } from '@angular/core/testing';

import { TestlisthService } from './testlisth.service';

describe('TestlisthService', () => {
  let service: TestlisthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestlisthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
