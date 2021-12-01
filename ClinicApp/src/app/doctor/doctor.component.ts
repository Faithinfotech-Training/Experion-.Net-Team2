import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from '../shared/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(public doctorService:DoctorService,private router:Router) { }

  ngOnInit(): void {
    this.doctorService.bindCmbDepartment();
  }
  onSubmit(form : NgForm){
    form.value.DoctorId=0;
    form.value.Isactive=true;
    form.value.StaffId=sessionStorage.getItem("StaffId");
    console.log(form.value);
    this.doctorService.insertDoctor(form.value);


  }

}
