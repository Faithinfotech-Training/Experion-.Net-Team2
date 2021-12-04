import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../shared/test.service';
import { TestdetailsService } from '../shared/testdetails.service';
import { Testdetails } from '../shared/TestdetailsJ';

@Component({
  selector: 'app-viewtestdetails',
  templateUrl: './viewtestdetails.component.html',
  styleUrls: ['./viewtestdetails.component.css']
})
export class ViewtestdetailsComponent implements OnInit {

  filter: string;
  page:number=1;
  constructor(public testService: TestService,public testDetailService: TestdetailsService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.testDetailService.bindListTestDetail();
  }


  onSubmit(testdetailgetForm: NgForm) {
    console.log(testdetailgetForm.value);
    let addId = this.testDetailService.formLabT.TestNo;
    console.log(addId);
    
    if(addId !=0 || addId !=null)
    {
      //console.log("Hello");
      this.testDetailService.GetTestDetailByNo(addId);
      console.log(this.testDetailService.testdetails);
       
    }
  }
  populateForm(emp: Testdetails)
  {
    console.log(emp);
    this.testDetailService.formLabT=emp;
  }




}
