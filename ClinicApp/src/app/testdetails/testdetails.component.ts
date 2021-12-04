import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabtechnicianService } from '../shared/labtechnician.service';
import { TestService } from '../shared/test.service';
import { TestdetailsService } from '../shared/testdetails.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-testdetails',
  templateUrl: './testdetails.component.html',
  styleUrls: ['./testdetails.component.css']
})
export class TestdetailsComponent implements OnInit {

  constructor( public testDetailService: TestdetailsService, private router: Router,
    private route: ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    
  }

  onSubmit(labForm: NgForm) {
    console.log(labForm.value);
    //get the test no
    let addId = this.testDetailService.formLabT.TestNo;

    if (addId == 0 || addId == null) {
      //INSERT
      this.insertTestDetail(labForm);
    }
    else {
      //UPDATE
      this.updateTestDetail(labForm);
    }
    //get all test details
    this.testDetailService.bindListTestDetail();

      
  

  }
  
  
  //INSERT
  insertTestDetail(labForm?: NgForm) {
    console.log("Inserting a test detail...");
    //call the service
    this.testDetailService.insertTestDetail(labForm.value).subscribe(
      (result) => {
        console.log(result);
        //at time of submit we need to call this method so go to onSubmit
      }
    );
  }


  //UPDATE
  updateTestDetail(labForm?: NgForm) {
    console.log("Updating a test detail ...");
    //call the service
    this.testDetailService.updateTestDetail(labForm.value).subscribe(
      (result) => {
        console.log(result);
        //at time of submit we need to call this method so go to onSubmit
      }
    );
    window.alert("Employee record has been updated");
    window.location.reload();
  }

  back(){
    this.location.back();
  }


}
