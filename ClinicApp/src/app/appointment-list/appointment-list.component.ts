import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from '../shared/appointment';
import { FrontofficeService } from '../shared/frontoffice.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  //assign default page
  page: number =1;
  filter: string;

  constructor(public frontOfficeService:FrontofficeService,
    public router: Router) { }

  ngOnInit(): void {
    this.frontOfficeService.bindListAppointments();
  }

  
  //populate form by clicking the column fields
  populateForm(appointment: Appointment) {
    console.log(appointment)

    //date format
    var datePipe = new DatePipe("en-UK");
    //appointmentDate
    let formatedDate: any = datePipe.transform(appointment.AppointmentDate, 'yyyy-MM-dd');
    appointment.AppointmentDate = formatedDate;

    this.frontOfficeService.formData = Object.assign({}, appointment)
  }

  //delete
  deleteAppointment(id: number) {

    console.log(id);
    if (confirm("Are you sure to DELETE this record?")) {
      console.log("Deleting a record...");
      this.frontOfficeService.deleteAppointment(id).subscribe(
        (result) => {
          console.log(result);
          this.frontOfficeService.bindListAppointments();
          //this.toastrService.success('Staff record has been deleted', 'StaffApp v2021');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  //update an staff
  updateAppointment(AppointmentNo: number) {
    console.log(AppointmentNo);
    this.router.navigate(['appointment', AppointmentNo]);
  }

  readForm(form : NgForm)
  {
    sessionStorage.setItem("DoctorID", this.frontOfficeService.currentDoctor.DoctorId.toString());
    sessionStorage.setItem("DateofAppointment", this.frontOfficeService.currentDoctor.DateOfAppointment.toString());
    this.router.navigate(['doctorListPatientsByDate'])
  }


}
