import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientRegisterHService } from '../shared/patient-register-h.service';

@Component({
  selector: 'app-patient-register-h',
  templateUrl: './patient-register-h.component.html',
  styleUrls: ['./patient-register-h.component.css']
})
export class PatientRegisterHComponent implements OnInit {

  constructor(public patService: PatientRegisterHService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.patService.bindListPatients();
  }



  //Submit

  onSubmit(labForm: NgForm) {
    console.log(labForm.value);

    this.insertPatient(labForm);
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
}
