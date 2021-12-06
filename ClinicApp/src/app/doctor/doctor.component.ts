import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from '../shared/doctor.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(public doctorService:DoctorService,private router:Router, private location:Location,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    //retrieving departments
    this.doctorService.bindCmbDepartment();
  }
  onSubmit(form : NgForm){
    form.value.DoctorId=0;
    form.value.Isactive=true;
    form.value.StaffId=sessionStorage.getItem("StaffId");
    console.log(form.value);
    this.doctorService.insertDoctor(form.value);
    this.toastrService.success('Department has been inserted');
    this.router.navigate(['./doctorlist']);
    

    //this.router.navigate[('/doctors')];

  }
 /*
  back(){
    this.location.back();
  }*/

}
