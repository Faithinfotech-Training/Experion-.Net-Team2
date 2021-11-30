import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewLabreportByDateComponent } from './doctor-view-labreport-by-date.component';

describe('DoctorViewLabreportByDateComponent', () => {
  let component: DoctorViewLabreportByDateComponent;
  let fixture: ComponentFixture<DoctorViewLabreportByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorViewLabreportByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorViewLabreportByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
