import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewByIdHComponent } from './patient-view-by-id-h.component';

describe('PatientViewByIdHComponent', () => {
  let component: PatientViewByIdHComponent;
  let fixture: ComponentFixture<PatientViewByIdHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientViewByIdHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewByIdHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
