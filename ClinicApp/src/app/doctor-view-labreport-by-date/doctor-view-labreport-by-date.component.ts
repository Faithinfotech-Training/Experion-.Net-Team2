import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from '../shared/doctor.service';
import { DoctorViewLabReport } from '../shared/doctorviewlabreport';

@Component({
  selector: 'app-doctor-view-labreport-by-date',
  templateUrl: './doctor-view-labreport-by-date.component.html',
  styleUrls: ['./doctor-view-labreport-by-date.component.css']
})
export class DoctorViewLabreportByDateComponent implements OnInit {
  //declare variables
  reportForm!: FormGroup;
  isSubmitted = false;
  filter:string;
  page=1;
  report: DoctorViewLabReport = new DoctorViewLabReport;
  response:any=new DoctorViewLabReport();

  constructor(private formBuilder: FormBuilder, private router: Router,
    public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      ReportDate: ['', [Validators.required]],
      //PatientName:['',[Validators.required]]

    });

  }

  //get controls
  get formControls() {
    return this.reportForm.controls;
  }

  LabReportByDate() {
    this.isSubmitted = true;
    console.log(this.reportForm.value);

    // invalid
    if (this.reportForm.invalid)
      return;

    //valid
    if (this.reportForm.valid) {
      this.doctorService.getLabReportByDate(this.reportForm.value).subscribe(
        (result) => {
          console.log(result);
          this.response=result;
          

          //this.response=result;
         

        }
      );
     

    }


  }


}
