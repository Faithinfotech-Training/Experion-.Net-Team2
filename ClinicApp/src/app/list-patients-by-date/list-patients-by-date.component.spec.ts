import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatientsByDateComponent } from './list-patients-by-date.component';

describe('ListPatientsByDateComponent', () => {
  let component: ListPatientsByDateComponent;
  let fixture: ComponentFixture<ListPatientsByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPatientsByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPatientsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
