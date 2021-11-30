import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPrescriptionHistoryComponent } from './patient-prescription-history.component';

describe('PatientPrescriptionHistoryComponent', () => {
  let component: PatientPrescriptionHistoryComponent;
  let fixture: ComponentFixture<PatientPrescriptionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPrescriptionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPrescriptionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
