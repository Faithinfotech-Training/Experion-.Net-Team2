import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../shared/appointment';
import { FrontofficeService } from '../shared/frontoffice.service';

@Component({
  selector: 'app-appointment-by-date',
  templateUrl: './appointment-by-date.component.html',
  styleUrls: ['./appointment-by-date.component.css']
})
export class AppointmentByDateComponent implements OnInit {

  page : number = 1;
  filter : string;

  constructor(public frontOfficeService: FrontofficeService,
    private router:Router) { }

  ngOnInit(): void {

    this.frontOfficeService.appointmentByDocIdDate(
      Number(sessionStorage.getItem("DoctorID")),      
      (sessionStorage.getItem("DateofAppointment")));
  }

  populateForm(item : Appointment)
  {
    //console.log(item);
    //date format
    var datePipe = new DatePipe("en-UK");
    //appointmentDate
    let formatedDate: any = datePipe.transform(item.AppointmentDate, 'yyyy-MM-dd');
    item.AppointmentDate = formatedDate;

    this.frontOfficeService.formData = Object.assign({}, item);
    this.router.navigate(['appointment'])
    //this.router.navigate(['appointmentlist'])
  }

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

  //Back to admin page
back(){
  this.router.navigate(['./appointmentlist']);
}
add(){
  this.router.navigate(['./appointment']);
}
}
