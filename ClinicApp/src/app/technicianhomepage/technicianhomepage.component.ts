import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LabtechnicianService } from '../shared/labtechnician.service';

@Component({
  selector: 'app-technicianhomepage',
  templateUrl: './technicianhomepage.component.html',
  styleUrls: ['./technicianhomepage.component.css']
})
export class TechnicianhomepageComponent implements OnInit {

  constructor(public labTechService: LabtechnicianService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
