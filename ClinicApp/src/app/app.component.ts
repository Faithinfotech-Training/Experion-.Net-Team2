import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Experion Medicity';
  userPresent : boolean = false;
  

  constructor(public authService : AuthService, public router : Router ) { }

  ngOnInit() {
    this.authService.userPresent = false;
    console.log('User:' + sessionStorage.getItem('userPresent'));
    this.userPresent = this.authService.userPresent;
  }

  updatePresence()
  {
    this.userPresent = this.authService.userPresent;
  }


  logout() {
    console.log('logging out ..');
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }
}
