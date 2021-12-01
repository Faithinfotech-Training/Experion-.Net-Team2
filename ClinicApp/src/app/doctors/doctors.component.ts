import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  loggedUserName: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loggedUserName = localStorage.getItem("UserName");
  }

  //log out
  logout() {
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }

}
