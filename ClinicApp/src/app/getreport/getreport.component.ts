import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Labreport } from '../shared/labreport';
import { LabreportService } from '../shared/labreport.service';

@Component({
  selector: 'app-getreport',
  templateUrl: './getreport.component.html',
  styleUrls: ['./getreport.component.css']
})
export class GetreportComponent implements OnInit {

  

  constructor(public labService: LabreportService, private router: Router,
    private route: ActivatedRoute) { }

    id: number;
    isSubmitted: boolean=false;


  ngOnInit(): void {
    this.labService.bindListReports();
  }

  //get labreport by id method


  onSubmit(labForm: NgForm) {
    console.log(labForm.value);
    let addId = this.labService.formLab.PatientId;
    console.log(addId);
    
    if(addId !=0 || addId !=null)
    {
      console.log("Hello");
      this.labService.GetReportById(addId);
      console.log(this.labService.getReports);
       
    }
    
    
   
  }


  

    



  

}
