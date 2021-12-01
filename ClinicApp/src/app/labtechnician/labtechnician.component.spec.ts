import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtechnicianComponent } from './labtechnician.component';

describe('LabtechnicianComponent', () => {
  let component: LabtechnicianComponent;
  let fixture: ComponentFixture<LabtechnicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtechnicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
