import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianhomepageComponent } from './technicianhomepage.component';

describe('TechnicianhomepageComponent', () => {
  let component: TechnicianhomepageComponent;
  let fixture: ComponentFixture<TechnicianhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicianhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
