import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../shared/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public testService: TestService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    
  }
  onSubmit(labForm: NgForm) {
  console.log(labForm.value);
    //from insertEmployee reached here
    let addId = this.testService.formTest.TestId;


    if (addId == 0 || addId == null) {
      //INSERT
      this.insertTest(labForm);
    }
    else {
      //UPDATE
      this.updateTest(labForm);
    }
  }




  //INSERT
  insertTest(labForm?: NgForm) {
    console.log("Inserting a test ...");
    //call the service
    this.testService.insertTest(labForm.value).subscribe(
      (result) => {
        console.log(result);
        //at time of submit we need to call this method so go to onSubmit
      }
    );
  }



  //UPDATE
  updateTest(labForm?: NgForm) {
    console.log("Updating a test ...");
    //call the service
    this.testService.updateTest(labForm.value).subscribe(
      (result) => {
        console.log(result);
        //at time of submit we need to call this method so go to onSubmit
      }
    );
    window.alert("Employee record has been updated");
    window.location.reload();
  }

}
