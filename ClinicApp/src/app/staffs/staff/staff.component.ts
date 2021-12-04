import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/shared/staff';
import { StaffService} from 'src/app/shared/staff.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staffId:number;
  staff: Staff =new Staff();

  constructor(public staffService:StaffService,
    private router:Router,
    private route:ActivatedRoute,
    private location:Location) { }

  ngOnInit(): void {

    //get staffId from ActivatedRoute
    this.staffId=this.route.snapshot.params['staffId'];

    if(this.staffId!=0 || this.staffId!=null){
      //console.log(this.staffId);
      console.log("Hi");
      //getStaff
      this.staffService.getStaff(this.staffId).subscribe(
        data=>{
          console.log(data);
          //date format
          var datePipe=new DatePipe("en-UK");
          //dateOfBirth
          let formatedDate1: any = datePipe.transform(data.DateOfBirth, 'yyyy-MM-dd');
          data.DateOfBirth = formatedDate1;
          //dateOfJoinig
          let formatedDate2: any = datePipe.transform(data.DateOfJoin, 'yyyy-MM-dd');
          data.DateOfJoin = formatedDate2;

          this.staffService.formData =Object.assign({},data);
        },
        error =>
        console.log(error)
      );
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value)

    let addId = this.staffService.formData.StaffId;

    //insert
    if (addId == 0 || addId == null) {
      this.insertStaffRecord(form);
    }
    else {
      //update
      console.log("Updating record...");
      this.updateStaffRecord(form)
    }
    this.router.navigate(['/addLogin']);
  }

  //clear all contents at initialization
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //Insert
  insertStaffRecord(form?: NgForm) {
    console.log("Inserting a record...");
    this.staffService.insertStaff(form.value).subscribe(
      (result) => {
        console.log(result);
        //console.log(this.staffService.formData.StaffId);
        sessionStorage.setItem("StaffId",result.toString());
        this.resetForm(form);
        //this.toastrService.success('Staff record has been inserted', 'StaffApp v2021');
      }
    );
    window.alert("Staff record has been inserted");
    //window.location.reload();
  }

  //Update
  updateStaffRecord(form?: NgForm) {
    console.log("Updateing a record...");
    this.staffService.updateStaff(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        this.staffService.bindListStaffs();
        //this.toastrService.success('Staff record has been updated', 'StaffApp v2021');
      }
    );
    window.alert("Staff record has been updated");
    //window.location.reload();
  }
  //Back to admin page
  back(){
    //this.router.navigate(['/admin']);
    this.location.back()
  }
}
