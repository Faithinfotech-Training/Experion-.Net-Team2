import { TestBed } from '@angular/core/testing';

import { PatientRegisterHService } from './patient-register-h.service';

describe('PatientRegisterHService', () => {
  let service: PatientRegisterHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientRegisterHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
