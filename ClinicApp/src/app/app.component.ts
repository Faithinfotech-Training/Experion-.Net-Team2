import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Experion Medicity';
  userPresent : boolean;

  constructor(public authService : AuthService, public router : Router ) { }

  ngOnInit() {
    console.log('User:' + sessionStorage.getItem('userPresent'));
  }


  logout() {
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }
}
