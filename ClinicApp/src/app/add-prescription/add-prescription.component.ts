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
      this.doctorHelperService.addPrescription(form.value);
    }
    else
    {
      form.value.isActive = true;
      form.value.doctorId = Number(sessionStorage.getItem("DoctorID"));
      form.value.patientId = Number(sessionStorage.getItem("CurrentPatientId"));
      //console.log(this.doctorHelperService.addPrescription(form.value));
      console.log("submit");
    }
    
  }
 


}
