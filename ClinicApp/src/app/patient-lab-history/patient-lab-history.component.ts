import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {DoctorHelperService} from '../shared/doctor-helper.service';
import {PrescriptionHistory} from '../shared/PrescriptionHistory';
import { Location } from '@angular/common';
@Component({
  selector: 'app-patient-lab-history',
  templateUrl: './patient-lab-history.component.html',
  styleUrls: ['./patient-lab-history.component.css']
})
export class PatientLabHistoryComponent implements OnInit {

  page : number = 1;
  filter : string;

  constructor(public doctorHelperService : DoctorHelperService,              
              private router: Router, private location:Location) { }

  ngOnInit(): void {
  }

  populateForm(item : PrescriptionHistory)
  {
    // console.log(item);
  }
  back(){
    this.location.back();
  }

}
