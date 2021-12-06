import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {DoctorHelperService} from '../shared/doctor-helper.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-patient-prescription-history',
  templateUrl: './patient-prescription-history.component.html',
  styleUrls: ['./patient-prescription-history.component.css']
})
export class PatientPrescriptionHistoryComponent implements OnInit {

  page : number = 1;
  filter : string;

  constructor(public doctorHelperService : DoctorHelperService,              
              private router: Router, private location:Location) { }

  ngOnInit(): void {
  }
  /*
  back(){
    this.location.back();
  }*/

}
