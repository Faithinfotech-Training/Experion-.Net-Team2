import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlabtechnicianhComponent } from './viewlabtechnicianh.component';

describe('ViewlabtechnicianhComponent', () => {
  let component: ViewlabtechnicianhComponent;
  let fixture: ComponentFixture<ViewlabtechnicianhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlabtechnicianhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlabtechnicianhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
