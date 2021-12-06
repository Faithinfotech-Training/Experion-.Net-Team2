import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorHelperService } from '../shared/doctor-helper.service';
import { Form, NgForm } from '@angular/forms';
import {Prescriptionformedicine} from '../shared/PrescriptionForMedicine'
import { from } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-prescription-medicine',
  templateUrl: './add-prescription-medicine.component.html',
  styleUrls: ['./add-prescription-medicine.component.css']
})
export class AddPrescriptionMedicineComponent implements OnInit {

  medicineCheck : boolean;
  constructor(public doctorHelperService : DoctorHelperService,
    public router: Router,private location :Location) { }

  ngOnInit(): void {
    this.doctorHelperService.refreshAvailableMedicine();
    console.log(sessionStorage.getItem("currentPrescriptionID"));
  }

  readForm(form : NgForm)
  {
      form.value.PrescriptionNo = 0;
      delete form.value.medicineCheck;
      form.value.Isactive = true;
      form.value.PrescriptionId = sessionStorage.getItem("currentPrescriptionID");
      console.log(form.value);
      this.doctorHelperService.addPrescriptionforMedicine(form.value);
    if(this.medicineCheck)
    {
      location.reload();
    }
    else
    {
      this.router.navigate(['doctorListPatientsByDate']);      
    }    
  }
  back(){
    this.location.back();
  }
}
