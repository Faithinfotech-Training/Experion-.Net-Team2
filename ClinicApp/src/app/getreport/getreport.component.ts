import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Labreport } from '../shared/labreport';
import { LabreportService } from '../shared/labreport.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-getreport',
  templateUrl: './getreport.component.html',
  styleUrls: ['./getreport.component.css']
})
export class GetreportComponent implements OnInit {

  page: number=1;
  

  constructor(public labService: LabreportService, private router: Router,
    private route: ActivatedRoute, private location: Location) { }

    id: number;
    isSubmitted: boolean=false;


  ngOnInit(): void {
    this.labService.bindListReports();
  }

  //get labreport by id method


  onSubmit(labForm: NgForm) {
    console.log(labForm.value);
    let addId = this.labService.formLab.PatientId;
    console.log(addId);
    
    if(addId !=0 || addId !=null)
    {
      console.log("Hello");
      this.labService.GetReportById(addId);
      console.log(this.labService.getReports);
       
    }

   
  }
  OnDisable(){
    this.labService.edit=false;
  }

  populateForm(emp: Labreport)
  {
    console.log(emp);
    this.labService.formLab=emp;
    sessionStorage.setItem("Edit","true");
    this.labService.edit=true;
  }

  back(){
    this.location.back();
  }

}


