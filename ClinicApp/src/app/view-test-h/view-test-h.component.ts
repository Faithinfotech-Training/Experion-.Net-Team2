import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from '../shared/test';
import { TestService } from '../shared/test.service';
import { TestdetailsService } from '../shared/testdetails.service';

@Component({
  selector: 'app-view-test-h',
  templateUrl: './view-test-h.component.html',
  styleUrls: ['./view-test-h.component.css']
})
export class ViewTestHComponent implements OnInit {

 
  //assign default page
  page: number = 1;
  filter: string;

  constructor(public testService: TestService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.testService.bindListTest();
  }

  //GET Test BY ID

  onSubmit(testgetForm: NgForm) {
    console.log(testgetForm.value);
    let addId = this.testService.formTest.TestId;
    console.log(addId);
    
    if(addId !=0 || addId !=null)
    {
      //console.log("Hello");
      this.testService.GetTestById(addId);
      console.log(this.testService.test);
       
    }
}

populateForm(emp: Test)
  {
    console.log(emp);


    this.testService.formTest=emp;
  }


}
