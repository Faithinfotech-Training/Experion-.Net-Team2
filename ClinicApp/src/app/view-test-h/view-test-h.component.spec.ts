import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestHComponent } from './view-test-h.component';

describe('ViewTestHComponent', () => {
  let component: ViewTestHComponent;
  let fixture: ComponentFixture<ViewTestHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTestHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTestHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
