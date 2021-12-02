import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientRegisterH } from '../shared/patient-register-h';
import { PatientRegisterHService } from '../shared/patient-register-h.service';

@Component({
  selector: 'app-patient-view-by-id-h',
  templateUrl: './patient-view-by-id-h.component.html',
  styleUrls: ['./patient-view-by-id-h.component.css']
})
export class PatientViewByIdHComponent implements OnInit {

  page: number=1;
  constructor(public patService: PatientRegisterHService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.patService.bindListPatients();
  }

  //GET PATIENT BY ID

  onSubmit(labgetForm: NgForm) {
    console.log(labgetForm.value);
    let addId = this.patService.formPatient.PatientId;
    console.log(addId);
    
    if(addId !=0 || addId !=null)
    {
      //console.log("Hello");
      this.patService.GetPatientById(addId);
      console.log(this.patService.getPatients);
       
    }
}

populateForm(emp: PatientRegisterH)
  {
    console.log(emp);
    this.patService.formPatient=emp;
  }

}
