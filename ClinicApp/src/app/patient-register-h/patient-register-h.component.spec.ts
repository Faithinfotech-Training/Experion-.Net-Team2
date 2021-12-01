import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegisterHComponent } from './patient-register-h.component';

describe('PatientRegisterHComponent', () => {
  let component: PatientRegisterHComponent;
  let fixture: ComponentFixture<PatientRegisterHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRegisterHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRegisterHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
