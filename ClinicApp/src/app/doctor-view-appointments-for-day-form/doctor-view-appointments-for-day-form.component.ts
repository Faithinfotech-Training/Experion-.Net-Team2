import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {DoctorHelperService} from '../shared/doctor-helper.service';

@Component({
  selector: 'app-doctor-view-appointments-for-day-form',
  templateUrl: './doctor-view-appointments-for-day-form.component.html',
  styleUrls: ['./doctor-view-appointments-for-day-form.component.css']
})
export class DoctorViewAppointmentsForDayFormComponent implements OnInit {

  loggedUserName: string;

  constructor(public doctorHelperService : DoctorHelperService,
              public router: Router) { }

  ngOnInit(): void {
    this.loggedUserName = localStorage.getItem("UserName")
  }

  readForm(form : NgForm)
  {
    // console.log(form.value)
    // console.log(this.doctorHelperService.currentDoctor.DoctorId);
    //sessionStorage.setItem("DoctorID", this.doctorHelperService.currentDoctor.DoctorId.toString());
    sessionStorage.setItem("DoctorID", "1");
    sessionStorage.setItem("DateofAppointment", this.doctorHelperService.currentDoctor.DateOfAppointment.toString());
    // this.doctorHelperService.refreshAppointmentByDocIdDate(this.doctorHelperService.currentDoctor.DoctorId,
    // this.doctorHelperService.currentDoctor.DateOfAppointment);
    this.router.navigate(['doctorListPatientsByDate'])
  }

}
