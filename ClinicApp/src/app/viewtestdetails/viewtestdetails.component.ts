import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../shared/test.service';
import { TestdetailsService } from '../shared/testdetails.service';

@Component({
  selector: 'app-viewtestdetails',
  templateUrl: './viewtestdetails.component.html',
  styleUrls: ['./viewtestdetails.component.css']
})
export class ViewtestdetailsComponent implements OnInit {

  filter: string;
  constructor(public testService: TestService,public testDetailService: TestdetailsService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.testDetailService.bindListTestDetail();
  }





}
