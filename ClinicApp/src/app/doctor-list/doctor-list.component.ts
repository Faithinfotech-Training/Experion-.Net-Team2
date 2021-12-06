import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../shared/doctor.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  //assign default page
  filter:string;
  page:number=1;

  constructor(public doctorService:DoctorService, private router:Router,private location:Location) { }

  ngOnInit(): void {
    //get all doctors through service
    this.doctorService.bindListDoctors();
  }

  //update a doctor
  updateDoctor(DoctorId:number){
    console.log(DoctorId);
    this.router.navigate(['doctors',DoctorId])
  }

  //Back to admin page
  Back(): void{
    this.router.navigate(['../admin']);
    //this.location.back()
  }
}
