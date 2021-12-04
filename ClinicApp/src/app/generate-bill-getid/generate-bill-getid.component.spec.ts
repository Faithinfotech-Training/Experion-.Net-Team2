import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBillGetidComponent } from './generate-bill-getid.component';

describe('GenerateBillGetidComponent', () => {
  let component: GenerateBillGetidComponent;
  let fixture: ComponentFixture<GenerateBillGetidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateBillGetidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBillGetidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
