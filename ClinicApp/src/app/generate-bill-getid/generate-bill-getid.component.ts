import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BillGenerateServiceService} from '../shared/bill-generate-service.service';

@Component({
  selector: 'app-generate-bill-getid',
  templateUrl: './generate-bill-getid.component.html',
  styleUrls: ['./generate-bill-getid.component.css']
})
export class GenerateBillGetidComponent implements OnInit {

  loggedUserName: string;

  constructor(public billGenerateServiceService : BillGenerateServiceService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.loggedUserName = localStorage.getItem("UserName")
  }

  readForm(form : NgForm)
  {
    console.log(form.value)
    console.log(this.billGenerateServiceService.bpid);
    this.billGenerateServiceService.billGenerator(this.billGenerateServiceService.bpid);
    this.router.navigate(['bt'])
  }

}
