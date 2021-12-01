import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrescriptionMedicineComponent } from './add-prescription-medicine.component';

describe('AddPrescriptionMedicineComponent', () => {
  let component: AddPrescriptionMedicineComponent;
  let fixture: ComponentFixture<AddPrescriptionMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrescriptionMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrescriptionMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
