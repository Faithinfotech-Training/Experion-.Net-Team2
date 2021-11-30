import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabtechnicianService } from '../shared/labtechnician.service';
import { TestService } from '../shared/test.service';
import { TestdetailsService } from '../shared/testdetails.service';

@Component({
  selector: 'app-testdetails',
  templateUrl: './testdetails.component.html',
  styleUrls: ['./testdetails.component.css']
})
export class TestdetailsComponent implements OnInit {

  constructor(public testService: TestService, public testDetailService: TestdetailsService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  onSubmit(labForm: NgForm) {
    console.log(labForm.value);
    //get the test no
    let addId = this.testDetailService.formLabT.TestNo;

    //get all test details
    this.testDetailService.bindListTestDetail();

      //UPDATE
      this.updateTestDetail(labForm);
  

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


}
