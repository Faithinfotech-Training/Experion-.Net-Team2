import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { LabtechnicianService } from '../shared/labtechnician.service';

@Component({
  selector: 'app-technicianhomepage',
  templateUrl: './technicianhomepage.component.html',
  styleUrls: ['./technicianhomepage.component.css']
})
export class TechnicianhomepageComponent implements OnInit {
  loggedUserName: string;

  constructor(public labTechService: LabtechnicianService, private router: Router,
    private route: ActivatedRoute,private authService: AuthService) { }

  ngOnInit(): void {
    this.loggedUserName = localStorage.getItem("UserName");
  }

   //LogOut
   logout() {
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }

}
