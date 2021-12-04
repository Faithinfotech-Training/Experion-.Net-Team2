import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../shared/appointment';
import { AppointmentList } from '../shared/AppointmentList';
import { FrontofficeService } from '../shared/frontoffice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointmentNo:number;
  appointment: Appointment =new Appointment();

  constructor(public frontOfficeService: FrontofficeService,
    public router: Router,
    private route: ActivatedRoute,
    private location:Location) { }

  ngOnInit(): void {

    this.frontOfficeService.BindCmbPatient();
    this.frontOfficeService.BindCmbDoctor();
/*
    //get appointmentNo from ActivatedRoute
    this.appointmentNo=this.route.snapshot.params['appointmentNo'];

    if(this.appointmentNo!=0 || this.appointmentNo!=null){
      //console.log(this.appointmentNo);
      console.log("Hi");
      //getStaff
      this.frontOfficeService.getAppointment(this.appointmentNo).subscribe(
        data=>{
          console.log(data);
          //date format
          var datePipe=new DatePipe("en-UK");
          //AppointmentDate
          let formatedDate: any = datePipe.transform(data.AppointmentDate, 'yyyy-MM-dd');
          data.AppointmentDate = formatedDate;

          this.frontOfficeService.formData =Object.assign({},data);
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
      this.router.navigate(['/appointmentlist']);
    }
    else {
      //update
      console.log("Updating record...");
      this.updateAppointmentRecord(form);
      this.router.navigate(['/appointmentlist']);
    }
    //this.router.navigate(['/appointmentlist']);
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
        //this.toastrService.success('Appointment record has been inserted', 'StaffApp v2021');
      }
    );
    window.alert("Appointment record has been inserted")
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
    window.alert("Appointment record has been updated");
    //window.location.reload();
  }
  //Back to admin page
  back(){
    //this.router.navigate(['/frontoffice']);
    this.location.back();
  }
  //view appointment
  view(){
    this.router.navigate(['/appointmentlist'])
  }

}
