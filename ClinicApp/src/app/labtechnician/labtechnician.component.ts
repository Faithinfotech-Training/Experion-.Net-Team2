import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabtechnicianService } from '../shared/labtechnician.service';

@Component({
  selector: 'app-labtechnician',
  templateUrl: './labtechnician.component.html',
  styleUrls: ['./labtechnician.component.css']
})
export class LabtechnicianComponent implements OnInit {


  techId: number;
  constructor(public techService: LabtechnicianService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.techService.bindCmbDepartment();
    
  }


  onSubmit(labForm: NgForm) {
    console.log(labForm.value);
    //from insertEmployee reached here
    labForm.value.StaffId=Number(sessionStorage.getItem("StaffId"));
    console.log(labForm.value.StaffId);
    let addId = this.techService.formLabT.LabtechnicianId;


    if (addId == 0 || addId == null) {
      //INSERT
      this.techService.insertTechnician(labForm.value);
      //labForm.value.StaffId=Number(sessionStorage.getItem("StaffId"));
      console.log(labForm.value.StaffId);
    }
    else {
      //UPDATE
      this.techService.updateTechnician(labForm.value);
    }

  }

  //INSERT
  //insertTechnician(labForm?: NgForm) {
    //console.log("Inserting a record ...");
    //call the service
    //this.techService.insertTechnician(labForm.value).subscribe(
      //(result) => {
        //console.log(result);
        //at time of submit we need to call this method so go to onSubmit
      //}
      //this.techService.formstaff.StaffId=Number(sessionStorage.getItem("StaffId"));
    //);
  //}



  //UPDATE

  //updateTechnician(labForm?: NgForm) {
    //console.log("Updating a record ...");
    //call the service
    //this.techService.updateTechnician(labForm.value).subscribe(
      //(result) => {
        //console.log(result);
        //at time of submit we need to call this method so go to onSubmit
      //}
    //);
    //window.alert("Employee record has been updated");
   // window.location.reload();
  //}

}
