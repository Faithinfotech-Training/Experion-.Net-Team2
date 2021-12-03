import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestListViewModel } from '../shared/testlisth';
import { TestlisthService } from '../shared/testlisth.service';

@Component({
  selector: 'app-testlist-tone',
  templateUrl: './testlist-tone.component.html',
  styleUrls: ['./testlist-tone.component.css']
})
export class TestlistTOneComponent implements OnInit {

  page: number=1;
  filter: string;
  constructor(public tstlstService: TestlisthService, private router: Router,
    private route: ActivatedRoute) { }

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
    this.tstlstService.formTl=emp;
  }

}
