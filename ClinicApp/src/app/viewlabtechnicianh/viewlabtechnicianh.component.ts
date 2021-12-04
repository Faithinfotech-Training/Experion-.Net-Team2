import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Labtechnician } from '../shared/labtechnician';
import { LabtechnicianService } from '../shared/labtechnician.service';
import { TechnicianModel } from '../shared/technician-model';

@Component({
  selector: 'app-viewlabtechnicianh',
  templateUrl: './viewlabtechnicianh.component.html',
  styleUrls: ['./viewlabtechnicianh.component.css']
})
export class ViewlabtechnicianhComponent implements OnInit {
  page:number=1;

  //assign default page
  page: number = 1;
  filter: string;

  constructor(public labTechService: LabtechnicianService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.labTechService.bindListTechnician();
  }

  
  onSubmit(testdetailgetForm: NgForm) {
    console.log(testdetailgetForm.value);
    let addId = this.labTechService.formLabT.LabtechnicianId
    console.log(addId);
    
    if(addId !=0 || addId !=null)
    {
      //console.log("Hello");
      this.labTechService.GetCustomLabTechnicianById(addId);
      console.log(this.labTechService.viewtech);
       
    }
  }
  populateForm(emp: TechnicianModel)
  {
    console.log(emp);
    this.labTechService.formTech=emp;
  }

  //Back to admin page
  back() {
    this.router.navigate(['./admin']);
  }

}
