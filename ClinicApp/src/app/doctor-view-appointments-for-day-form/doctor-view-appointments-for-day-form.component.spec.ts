import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewAppointmentsForDayFormComponent } from './doctor-view-appointments-for-day-form.component';

describe('DoctorViewAppointmentsForDayFormComponent', () => {
  let component: DoctorViewAppointmentsForDayFormComponent;
  let fixture: ComponentFixture<DoctorViewAppointmentsForDayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorViewAppointmentsForDayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorViewAppointmentsForDayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
