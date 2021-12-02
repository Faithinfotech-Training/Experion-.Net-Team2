import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {DoctorHelperService} from '../shared/doctor-helper.service';
import { AppointmentList } from '../shared/AppointmentList'
import { PatientLabHistory } from '../shared/PatientLabHistory'; 
import sp from 'synchronized-promise'


@Component({
  selector: 'app-list-patients-by-date',
  templateUrl: './list-patients-by-date.component.html',
  styleUrls: ['./list-patients-by-date.component.css']
})
export class ListPatientsByDateComponent implements OnInit {


  

  page : number = 1;
  filter : string;


  constructor(public doctorHelperService : DoctorHelperService,              
              private router: Router) { }

  ngOnInit(): void {

    this.doctorHelperService.test = true;
    
    this.doctorHelperService.refreshAppointmentByDocIdDate(
      Number(sessionStorage.getItem("DoctorID")),      
      (sessionStorage.getItem("DateofAppointment")));
    
      /*
    while(this.doctorHelperService.test)
    {
      console.log(this.doctorHelperService.test);
    }
    */
    console.log("Back in component");
    
  }

  populateForm(item : AppointmentList)
  {
    //console.log(item);
  }

  renderPrescriptionHistory(item : AppointmentList)
  {
    //console.log(item);
    this.doctorHelperService.patientPrescriptionHistorybyId(item.PatientId);
    sessionStorage.setItem("CurrentPatientId", item.PatientId.toString());
    this.router.navigate(['patientPrescriptionHistory'])
  }

  renderLabHistory(item : AppointmentList)
  {
    // console.log(item);
    this.doctorHelperService.patientLabHistorybyId(item.PatientId);
    this.router.navigate(['patientLabHistory']);
  }

  addPrescription(item : AppointmentList)
  {
    //console.log(item)
    this.doctorHelperService.refreshAvailableTests();
    sessionStorage.setItem("CurrentPatientId", item.PatientId.toString());
    this.router.navigate(['addPrescription']);
  }

  deleteItem(item : AppointmentList)
  {
    console.log(item);
  }

}
