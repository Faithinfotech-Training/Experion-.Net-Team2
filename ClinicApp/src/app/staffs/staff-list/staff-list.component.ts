import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from 'src/app/shared/staff';
import { StaffService } from 'src/app/shared/staff.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  //assign default page
  page: number =1;
  filter: string;

  constructor(public staffService:StaffService,
    private router:Router) { }

  ngOnInit(): void {

    this.staffService.bindListStaffs();
  }

  //populate form by clicking the column fields
  populateForm(staff: Staff) {
    console.log(staff)

    //date format
    var datePipe = new DatePipe("en-UK");
    //dateOfBirth
    let formatedDate1: any = datePipe.transform(staff.DateOfBirth, 'yyyy-MM-dd');
    staff.DateOfBirth = formatedDate1;
    //dateOfJoin
    let formatedDate2: any = datePipe.transform(staff.DateOfJoin, 'yyyy-MM-dd');
    staff.DateOfJoin = formatedDate2;

    this.staffService.formData = Object.assign({}, staff)
  }

  //delete
  deleteStaff(id: number) {

    console.log(id);
    if (confirm("Are you sure to DELETE this record?")) {
      console.log("Deleting a record...");
      this.staffService.deleteStaff(id).subscribe(
        (result) => {
          console.log(result);
          this.staffService.bindListStaffs();
          //this.toastrService.success('Staff record has been deleted', 'StaffApp v2021');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

    //update an staff
  updateStaff(staffId: number) {
    console.log(staffId);
    this.router.navigate(['staff', staffId]);
  }
}
