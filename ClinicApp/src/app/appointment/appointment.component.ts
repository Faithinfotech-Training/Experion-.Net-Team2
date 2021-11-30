import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../shared/appointment';
import { AppointmentList } from '../shared/AppointmentList';
import { FrontofficeService } from '../shared/frontoffice.service'

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointmentNo: number;
  appointmentDate: Date;
  doctorId:number;
  appointment: Appointment = new Appointment();
  appointmentList: AppointmentList = new AppointmentList();

  constructor(public frontOfficeService: FrontofficeService,
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
/*
    //get appointmentNo and appointmentDate from ActivatedRoute
    this.appointmentNo = this.route.snapshot.params['appointmentNo'];
    this.appointmentDate = this.route.snapshot.params['appointmentDate'];
    this.doctorId = this.route.snapshot.params['doctorId'];

    if (this.doctorId != 0 || this.doctorId != null && this.appointmentDate != null) {
      console.log(this.appointmentNo);
      //getAppointment
      this.frontOfficeService.appointmentByDocIdDate(this.doctorId, this.appointmentDate).subscribe(
        data => {
          console.log(data);
          //date format
          var datePipe = new DatePipe("en-UK");
          //dateOfJoinig
          let formatedDate: any = datePipe.transform(data.AppointmentDate, 'yyyy-MM-dd');
          data.AppointmentDate = formatedDate;

          this.frontOfficeService.formData = Object.assign({}, data);
        },
        error =>
          console.log(error)
      );
    }
*/
  }

  onSubmit(form: NgForm) {
    console.log(form.value)

    let addId = this.frontOfficeService.formData.AppointmentNo;

    //insert
    if (addId == 0 || addId == null) {
      this.insertAppointmentRecord(form);
    }
    else {
      //update
      console.log("Updating record...");
      this.updateAppointmentRecord(form)
    }
  }

  //clear all contents at initialization
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //Insert
  insertAppointmentRecord(form?: NgForm) {
    console.log("Inserting a record...");
    this.frontOfficeService.insertAppointment(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        //this.toastrService.success('Staff record has been inserted', 'StaffApp v2021');
      }
    );
    //window.location.reload();
  }

  //Update
  updateAppointmentRecord(form?: NgForm) {
    console.log("Updateing a record...");
    this.frontOfficeService.updateAppointment(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        this.frontOfficeService.bindListAppointments();
        //this.toastrService.success('Staff record has been updated', 'StaffApp v2021');
      }
    );
    window.alert("Staff record has been updated")
    window.location.reload();
  }

}
