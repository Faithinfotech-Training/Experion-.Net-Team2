import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../shared/test.service';
import { Location } from '@angular/common';
import { TestdetailsService } from '../shared/testdetails.service';
import { LabreportService } from '../shared/labreport.service';
import { TestlisthService } from '../shared/testlisth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public testService: TestService,
     private router: Router,
    private route: ActivatedRoute, private location:Location,
    public tService: TestdetailsService, public labService: LabreportService,
    public tstlstService: TestlisthService) { }

  ngOnInit(): void {
    console.log("Loadin Test HTML");
    
    //this.testService.formTest.ReportNo=this.labService.getRepo.ReportNo;
    //console.log(this.testService.formTest.ReportNo);

    this.labService.bindListReports();
    this.testService.formTest.TestNo = this.tService.testdet.TestNo;      
  }


  onSubmit(labForm: NgForm) {
  console.log(labForm.value);
    //from insertEmployee reached here
    let addId = this.testService.formTest.TestId;
    this.testService.formTest.Isactive=true;
   

    if (addId == 0 || addId == null) {
      //INSERT
      labForm.value.TestNo= this.tService.testdet.TestNo;
      this.insertTest(labForm);
      
      
    }
    else {
      labForm.value.TestNo= this.tService.testdet.TestNo;
      labForm.value.ReportNo=Number(sessionStorage.getItem("ReportNo"));
      //UPDATE
      this.updateTest(labForm);
    }

    
  }




  //INSERT
  insertTest(labForm?: NgForm) {
    
      console.log('Inserting test list');
      labForm.value.Isactive = true;
      labForm.value.TestListNo = this.testService.TLIDtoModify;

      console.log('----------- ERRORRRR ------------------');
      console.log(labForm.value);
    //call the service
    this.testService.insertTest(labForm.value).subscribe(
      (result) => {
        console.log(result);
      }
    );    
    console.log("Inserting a test ...");
    labForm.value.Isactive=true;
    this.testService.GetTestListsById(this.testService.TLIDtoModify);
    this.router.navigate(['../technicianhome']);
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
    window.alert("Test record has been updated");
    window.location.reload();
  }

  back(){
    this.location.back();
  }

}
