import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Labtechnician } from '../shared/labtechnician';
import { LabtechnicianService } from '../shared/labtechnician.service';

@Component({
  selector: 'app-viewlabtechnicianh',
  templateUrl: './viewlabtechnicianh.component.html',
  styleUrls: ['./viewlabtechnicianh.component.css']
})
export class ViewlabtechnicianhComponent implements OnInit {

  page: number=1;

  constructor(public labTechService: LabtechnicianService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.labTechService.bindListTechnician();
  }

  //GET Test BY ID

  onSubmit(testgetForm: NgForm) {
    console.log(testgetForm.value);
    let addId = this.labTechService.formLabT.LabtechnicianId;
    console.log(addId);
    
    if(addId !=0 || addId !=null)
    {
      //console.log("Hello");
      this.labTechService.GetTechnicianById(addId)
      console.log(this.labTechService.technicians);
       
    }
}

populateForm(emp: Labtechnician)
  {
    console.log(emp);


    this.labTechService.formLabT=emp;
  }


}
