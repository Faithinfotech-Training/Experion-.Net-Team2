import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorHelperService } from '../shared/doctor-helper.service';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent implements OnInit {

  prescribeCheck : boolean;

  constructor(public doctorHelperService : DoctorHelperService,
    public router: Router) { }

  ngOnInit(): void {
    //console.log("Refereshing Availabale Tests");
    this.doctorHelperService.refreshAvailableTests();
    //console.log(this.doctorHelperService.testDetails);
  }

  readForm(form : NgForm)
  {
    if(this.prescribeCheck)
    {
      //console.log(this.prescribeCheck);
      //console.log(form.value);
      delete form.value.prescribeCheck;
      delete form.value.PrescriptionId;
      form.value.Isactive = true;
      form.value.DoctorId = Number(sessionStorage.getItem("DoctorID"));
      form.value.PatientId = Number(sessionStorage.getItem("CurrentPatientId"));
      //console.log("Before Prescription");      
      this.doctorHelperService.addPrescription(form.value);            
      this.router.navigate(['addMedicineforPrescription']);
    }
    else
    {
      delete form.value.prescribeCheck;
      delete form.value.PrescriptionId;
      form.value.Isactive = true;
      form.value.DoctorId = Number(sessionStorage.getItem("DoctorID"));
      form.value.PatientId = Number(sessionStorage.getItem("CurrentPatientId"));
      //console.log("Before Prescription");      
      this.doctorHelperService.addPrescription(form.value);
      location.reload();
    }    
  }
 


}
