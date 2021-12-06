import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlistTOneComponent } from './testlist-tone.component';

describe('TestlistTOneComponent', () => {
  let component: TestlistTOneComponent;
  let fixture: ComponentFixture<TestlistTOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestlistTOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestlistTOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
