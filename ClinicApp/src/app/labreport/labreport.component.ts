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
  }

  onSubmit(labForm: NgForm) {
    console.log(labForm.value);
    //from insertEmployee reached here
    let addId = this.labService.formLab.PatientId;

    this.insertLabReport(labForm);


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
}
