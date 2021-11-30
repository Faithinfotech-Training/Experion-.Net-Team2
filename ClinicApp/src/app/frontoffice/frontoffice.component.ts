import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-frontoffice',
  templateUrl: './frontoffice.component.html',
  styleUrls: ['./frontoffice.component.css']
})
export class FrontofficeComponent implements OnInit {

  loggedUserName: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loggedUserName = localStorage.getItem("UserName");
  }

   //LogOut
   logout() {
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }

}
