import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorHelperService } from '../shared/doctor-helper.service';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent implements OnInit {

  constructor(public doctorHelperService : DoctorHelperService,
    public router: Router) { }

  ngOnInit(): void {
  }

  readForm(form : Form)
  {
    console.log(form);
  }

}
