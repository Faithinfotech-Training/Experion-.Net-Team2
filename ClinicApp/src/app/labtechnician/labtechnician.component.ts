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
    labForm.value.LabtechnicianId=0;
    labForm.value.Isactive=true;
    labForm.value.StaffId=Number(sessionStorage.getItem("StaffId"));
    console.log(labForm.value.StaffId);
    this.techService.insertTechnician(labForm.value);
    this.router.navigate(['./admin']);

    
  }
}
