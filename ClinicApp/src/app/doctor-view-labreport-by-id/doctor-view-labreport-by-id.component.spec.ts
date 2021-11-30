import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewLabreportByIdComponent } from './doctor-view-labreport-by-id.component';

describe('DoctorViewLabreportByIdComponent', () => {
  let component: DoctorViewLabreportByIdComponent;
  let fixture: ComponentFixture<DoctorViewLabreportByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorViewLabreportByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorViewLabreportByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
