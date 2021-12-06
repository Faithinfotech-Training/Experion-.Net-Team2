import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestListViewModel } from '../shared/testlisth';
import { TestlisthService } from '../shared/testlisth.service';
import { Location } from '@angular/common';
import { TestdetailsService } from '../shared/testdetails.service';
import { TestService } from '../shared/test.service';

@Component({
  selector: 'app-testlist-tone',
  templateUrl: './testlist-tone.component.html',
  styleUrls: ['./testlist-tone.component.css']
})
export class TestlistTOneComponent implements OnInit {

  page: number=1;
  filter: string;
  constructor(public tstlstService: TestlisthService, public tService: TestdetailsService, 
    private testService:TestService,  private router: Router,
    private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
  }


  onSubmit(testdetailgetForm: NgForm) {
    console.log(testdetailgetForm.value);
    let addId = this.tstlstService.formP.PatientId
    console.log(addId);
    
    if(addId !=0 || addId !=null)
    {
      //console.log("Hello");
      this.tstlstService.GetTestListByPatientId(addId);
      console.log(this.tstlstService.testlist);       
    }
  }
  populateForm(emp: TestListViewModel)
  {
    console.log(emp);
    this.testService.TLIDtoModify = emp.Id;
    console.log('---------------- ABCD --------------');
    console.log(this.testService.TLIDtoModify);
    console.log(emp.Id);

    this.tstlstService.formTl=emp;
    sessionStorage.setItem("TestNo", emp.TestNo.toString());
    this.tService.GetTestDetailByNoH(Number(sessionStorage.getItem("TestNo")));
//console.log("Test Number"+Number(sessionStorage.getItem("TestNo")));
    //this.testService.formTest.TestNo=this.tService.testdet.TestNo;
    //this.router.navigate(['test']);

  }

  back(){
    this.location.back();
  }

}
