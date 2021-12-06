import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillGenerateServiceService } from '../shared/bill-generate-service.service';
import { MedicineModel } from '../shared/MedicineModel';
import { TestBillModel } from '../shared/TestBillModel';

@Component({
  selector: 'app-bill-table',
  templateUrl: './bill-table.component.html',
  styleUrls: ['./bill-table.component.css']
})
export class BillTableComponent implements OnInit {

  medicineModel : MedicineModel[];
  testBillModel : TestBillModel[];
  medTotal : number = 0;
  testTotal : number = 0;  
  total : number = 0;
  mm : MedicineModel = new MedicineModel();
  tm : TestBillModel = new TestBillModel();

  constructor(private router: Router,
    public billService : BillGenerateServiceService
    ) { }

  ngOnInit(): void {
}

calc(one :any, two : any , three : any)
{
  
  return Number(one) * Number(two) * Number(three);
}

pay()
{
  console.log("clicked");

  for(let i=0;  i<this.billService.medicineModel.length; i++)
  {
    console.log("TEST " + this.billService.medicineModel[i].PrescriptionId);
    this.billService.paymentUpdate(this.billService.medicineModel[i].PrescriptionId);
  }

  for(let i=0;  i<this.billService.testBillModel.length; i++)
  {
    console.log("TEST " + this.billService.testBillModel[i].PrescriptionId);
    this.billService.paymentUpdate(this.billService.testBillModel[i].PrescriptionId);
  }

  this.router.navigate(['frontoffice']);

      
}
back(){
  this.router.navigate(['./frontoffice']);
}


}
