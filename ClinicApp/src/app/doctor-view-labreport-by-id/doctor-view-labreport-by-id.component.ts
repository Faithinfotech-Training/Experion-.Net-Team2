import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../shared/doctor.service';
import { DoctorViewLabReport } from '../shared/doctorviewlabreport';

@Component({
  selector: 'app-doctor-view-labreport-by-id',
  templateUrl: './doctor-view-labreport-by-id.component.html',
  styleUrls: ['./doctor-view-labreport-by-id.component.css']
})
export class DoctorViewLabreportByIdComponent implements OnInit {
  //declare variables
  reportForm!: FormGroup;
  isSubmitted = false;
  filter:string;
  page=1;
  report: DoctorViewLabReport = new DoctorViewLabReport();
  response:any=new DoctorViewLabReport();
  pId:number;

  constructor(private formBuilder: FormBuilder, private router: Router,
    public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      PatientId: [, [Validators.required]]

    });
   

  }

   //get controls
   get formControls() {
    return this.reportForm.controls;
  }
  LabReportById() {
    this.isSubmitted = true;
    console.log(this.reportForm.value);
    

    // invalid
    if (this.reportForm.invalid)
      return;

    //valid
    if (this.reportForm.valid) {
      console.log(this.reportForm.get('PatientId').value);
      this.doctorService.getLabReportById(this.reportForm.get('PatientId').value).subscribe(
        (result) => {
          console.log(result);
         // result.ajax.reload( null, false );
          this.response=result;
          

          //this.response=result;
         

        }
      );
     

    }
  }

}
