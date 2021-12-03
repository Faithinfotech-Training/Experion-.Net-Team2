import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/doctor.service';
import { Staff } from 'src/app/shared/staff';
import { StaffService } from 'src/app/shared/staff.service';
import { StaffList } from 'src/app/shared/stafflist';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  //assign default page
  page: number = 1;
  filter: string;

  constructor(public staffService: StaffService,
    private router: Router, public doctorService: DoctorService) { }

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
          this.staffService.formData.Isactive = false;
          console.log(this.staffService.formData.Isactive);
          //this.toastrService.success('Staff record has been deleted', 'StaffApp v2021');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  //update isactive
  updateIsactive(staffId: number) {
    if (staffId != 0 || staffId != null) {
      //console.log(this.staffId);
      console.log("Hi");
      //getStaff
      this.staffService.updateIsActive(staffId).subscribe(
        data => {
          console.log(data);
        }
      );
    }
    this.router.navigate[('/stafflist')];

  }

  //update an staff
  updateStaff(staffId: number) {
    if (staffId != 0 || staffId != null) {
      //console.log(this.staffId);
      console.log("Hi");
      //getStaff
      this.staffService.getStaff(staffId).subscribe(
        data => {
          console.log(data);
          if (data.RoleName == 'Doctor' || data.RoleName == 'Lab Technician') {
            //console.log("hello doctor");
            this.router.navigate(['./editstaff', staffId]);
          } else if (data.RoleName == 'Admin' || data.RoleName == 'Front Office') {
            this.router.navigate(['./staff', staffId]);
          }

        });

      console.log(staffId);

    }
  }

  //Back to admin page
  back() {
    this.router.navigate(['./admin']);
  }
}
