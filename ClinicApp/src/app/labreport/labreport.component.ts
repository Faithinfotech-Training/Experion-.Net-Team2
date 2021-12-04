import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabreportService } from '../shared/labreport.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-labreport',
  templateUrl: './labreport.component.html',
  styleUrls: ['./labreport.component.css']
})
export class LabreportComponent implements OnInit {

  
  constructor(public labService: LabreportService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.labService.bindListReports();
    this.labService.bindListPatients();
  }

  onSubmit(labForm: NgForm) {
    console.log(labForm.value);
    //from insertReport reached here
    let addId = this.labService.formLab.ReportNo;
    

if(addId == 0 || addId == null)
{
  this.insertLabReport(labForm);
}
else
{
  this.updateReport(labForm);
}
    
this.router.navigate[('./getreportlab')]
//onSubmit(labgetForm: NgForm){
  //let pdId=this.labService.formLab.PatientId;
    //console.log(pdId);
//}
 window.location.reload();

  }


  //INSERT
  insertLabReport(labForm?: NgForm) {
    console.log("Inserting a report ...");
    //call the service
    this.labService.insertReport(labForm.value).subscribe(
      (result) => {
        console.log(result);
        //form reset
        //at time of submit we need to call this method so go to onSubmit
      }
    );


  }


  //update method
  updateReport(labForm?: NgForm) {
    console.log("Updating a test ...");
    //call the service
    this.labService.updateReport(labForm.value).subscribe(
      (result) => {
        console.log(result);
        //at time of submit we need to call this method so go to onSubmit
      }
    );
    window.alert("Report has been updated");
    window.location.reload();
    }

    
  //delete method
  deleteReport(id: number){
    console.log("Deleting a report");
  
    if(confirm('Are you sure you want to delete'))
    {
      this.labService.deleteReport(id).subscribe(
        (result) => {
          console.log("result"+result);
          this.labService.bindListReports();
  
        },
        (error) => {
          console.log("error");
        }
      );
    }
    
  }
  
}
