import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabtechnicianService } from '../shared/labtechnician.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-labtechnician',
  templateUrl: './labtechnician.component.html',
  styleUrls: ['./labtechnician.component.css']
})
export class LabtechnicianComponent implements OnInit {


  techId: number;
  constructor(public techService: LabtechnicianService, private router: Router,
    private route: ActivatedRoute, private location:Location,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.techService.bindCmbDepartment();
    
  }


  onSubmit(labForm: NgForm) {
    console.log(labForm.value);
    //from insertEmployee reached here
    labForm.value.LabtechnicianId=0;
    labForm.value.Isactive=true;
    labForm.value.StaffId=Number(sessionStorage.getItem("StaffId"));
    console.log(labForm.value.StaffId);
    this.techService.insertTechnician(labForm.value);
    this.toastrService.success('Department has been inserted');
    this.router.navigate(['./viewtechnician']);

    
  }

  back(){
    this.location.back();
  }
}
