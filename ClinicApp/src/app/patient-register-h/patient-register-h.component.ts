import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientRegisterHService } from '../shared/patient-register-h.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patient-register-h',
  templateUrl: './patient-register-h.component.html',
  styleUrls: ['./patient-register-h.component.css']
})
export class PatientRegisterHComponent implements OnInit {

  constructor(public patService: PatientRegisterHService, private router: Router,
    private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.patService.bindListPatients();
  }



  //Submit

  onSubmit(labForm: NgForm) {
    console.log(labForm.value);
    let addId = this.patService.formPatient.PatientId;

    if(addId==0 || addId == null)
    {
      labForm.value.Isactive = true;
      labForm.value.PatientId = 0;
      this.insertPatient(labForm);
    }
    else
    {
      this.updatePatient(labForm);
    }
    this.router.navigate(['../frontoffice']);
    
  }



  
  //INSERT
  insertPatient(labForm?: NgForm) {
    console.log("Inserting a patient ...");
    //call the service
    this.patService.insertPatient(labForm.value).subscribe(
      (result) => {
        console.log(result);
        //form reset
        //at time of submit we need to call this method so go to onSubmit
      }
    );


  }

  //UPDATE
  updatePatient(labForm?: NgForm) {
    console.log("Updating a test ...");
    //call the service
    this.patService.updatePatient(labForm.value).subscribe(
      (result) => {
        console.log(result);
        //at time of submit we need to call this method so go to onSubmit
      }
    );
    window.alert("Patient detail has been updated");
    window.location.reload();
    }

    back(){
      this.location.back();
    }


}
