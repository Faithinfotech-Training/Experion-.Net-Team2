import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrontofficeService } from '../shared/frontoffice.service'

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(public frontOfficeService:FrontofficeService,
    public router: Router) { }

  ngOnInit(): void {
  }
/*
  readForm(form : NgForm)
  {
    // console.log(form.value)
    // console.log(this.doctorHelperService.currentDoctor.DoctorId);
    sessionStorage.setItem("DoctorID", this.frontOfficeService.currentDoctor.DoctorId.toString());
    sessionStorage.setItem("DateofAppointment", this.frontOfficeService.currentDoctor.DateOfAppointment.toString());
    // this.doctorHelperService.refreshAppointmentByDocIdDate(this.doctorHelperService.currentDoctor.DoctorId,
    // this.doctorHelperService.currentDoctor.DateOfAppointment);
    this.router.navigate(['doctorListPatientsByDate'])
  }
*/
}
