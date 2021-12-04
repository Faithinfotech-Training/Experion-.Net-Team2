import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../shared/doctor';
import { DoctorService } from '../shared/doctor.service';
import { Staff } from '../shared/staff';
import { StaffService } from '../shared/staff.service';
import { Location } from '@angular/common';
import { StaffList } from '../shared/stafflist';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {
  //declare variables
  staffForm!:FormGroup;
  staffId:number;
  staff: Staff=new Staff;
  doctor: Doctor=new Doctor;

  constructor(public doctorService:DoctorService,private router:Router,private formBuilder:FormBuilder,
    public staffService:StaffService,  private route:ActivatedRoute, private location:Location) { }
  


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
           this.doctorService.staffdata =Object.assign({},data);
           
           
         },
         
         error =>
         console.log(error)
       );

       this.doctorService.getDoctor(this.staffId).subscribe(
        data=>{
          console.log(data);
          this.doctorService.formData1 =Object.assign({},data);
        });
       
     }
    
   
    //get all doctor
    this.doctorService.bindListDoctors();
    //get all departments
    this.doctorService.bindCmbDepartment();
     //FormGroup
     this.staffForm=new FormGroup({
      StaffId:new FormControl(),
      StaffName:new FormControl(''),
      Gender:new FormControl(''),
      DateOfBirth:new FormControl(),
      DateOfJoin:new FormControl(),
      Address:new FormControl(''),
      Mobile:new FormControl(),
      Experience:new FormControl(),
      DepartmentId:new FormControl(),
      Email:new FormControl(),
      Isactive:new FormControl()

      


    });
   
  }
   //get controls
   get formControls(){
    return this.staffForm.controls;
  }

  editStaff(){
    console.log(this.staffForm.value);
    console.log(this.doctorService.formData1)
    
    this.updateDoctorRecord(this.doctorService.formData1);
    this.updateStaffRecord(this.staffForm.value);
    //this.staff=this.staffForm.value;
    //console.log(data);
    this.router.navigate(['./stafflist']);

  }
  //Update staff
  updateStaffRecord(form:Staff) {
    console.log("Updating a record...");
    console.log(form);
    this.staffService.updateStaff(form).subscribe(
      (result) => {
        console.log(result);
       // this.resetForm(form);
        this.staffService.bindListStaffs();
        //this.toastrService.success('Staff record has been updated', 'StaffApp v2021');
      }
    );
    window.alert("Staff record has been updated");
    //window.location.reload();
  }

  //update doctor
  updateDoctorRecord(form:Doctor) {
    console.log("Updating a record...");
    
    //form.Isactive=true;
    console.log(form);
    this.doctorService.updateDoctor(form).subscribe(
      (result) => {
        console.log(result);
       // this.resetForm(form);
        //this.doctorService.();
        //this.toastrService.success('Staff record has been updated', 'StaffApp v2021');
      }
    );
    //window.alert("Staff record has been updated");
    //window.location.reload();
  }

  back(){
    this.location.back();
  }
  

  
}
