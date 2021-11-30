import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtestdetailsComponent } from './viewtestdetails.component';

describe('ViewtestdetailsComponent', () => {
  let component: ViewtestdetailsComponent;
  let fixture: ComponentFixture<ViewtestdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtestdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtestdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
