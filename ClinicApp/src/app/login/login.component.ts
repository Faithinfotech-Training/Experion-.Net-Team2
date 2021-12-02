import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Login} from '../shared/login';
import {AuthService} from '../shared/auth.service';
import {Jwtresponse} from '../shared/jwtresponse';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //declare variables
  loginForm: FormGroup;
  isSubmitted=false;
  loginUser: Login=new Login();
  error='';
  jwtResponse:any=new Jwtresponse();
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    //FormGroup
    this.loginForm=this.formBuilder.group(
      {
        Username: ['',[Validators.required, Validators.minLength(2)]],
        Password: ['',[Validators.required]]
      }
    );
  }

  //Get controls 
  get formControls(){
    return this.loginForm.controls;
  }
  
  //login verify credentials
  loginCredentials(){
    this.isSubmitted=true;
    //console.log(this.loginForm.value);

    //invalid
    if(this.loginForm.invalid)
    return; 

    //valid
    if(this.loginForm.valid){

      this.authService.loginVerify(this.loginForm.value).subscribe(
        data=>{
          //console.log(data);

          //token
         this.jwtResponse=data;
        // this.jwtResponse.RoleId=data.ro
         //console.log("jwt:"+this.jwtResponse.rId);
      
          sessionStorage.setItem("token",this.jwtResponse.token);
          //console.log(this.jwtResponse.rId);

          if(this.jwtResponse.rId===1){

            this.authService.userPresent = true;
            sessionStorage.setItem("userPresent", 'true');

            //logged as Admin
            //console.log("Admin");
            localStorage.setItem("UserName",this.jwtResponse.Username);
            localStorage.setItem("ACCESS_ROLE",this.jwtResponse.rId.toString());
            sessionStorage.setItem("UserName",this.jwtResponse.Username);
            
            this.router.navigateByUrl('/admin');

          }else if(this.jwtResponse.rId===2){

            this.authService.userPresent = true;
            sessionStorage.setItem("userPresent", 'true');


            //console.log("FrontOffice");
            localStorage.setItem("UserName",this.jwtResponse.Username);
            localStorage.setItem("ACCESS_ROLE",this.jwtResponse.rId.toString());
            sessionStorage.setItem("UserName",this.jwtResponse.Username);
            this.router.navigateByUrl('/frontoffice');

          }else if (this.jwtResponse.rId === 3) {

            this.authService.userPresent = true;
            sessionStorage.setItem("userPresent", 'true');


            //console.log("LabTechnician");
            localStorage.setItem("UserName", this.jwtResponse.Username);
            localStorage.setItem("ACCESS_ROLE", this.jwtResponse.rId.toString());
            sessionStorage.setItem("UserName", this.jwtResponse.Username);
            this.router.navigateByUrl('/login');

          }else if (this.jwtResponse.rId === 4) {

            this.authService.userPresent = true;
            sessionStorage.setItem("userPresent", 'true');
            
            //console.log("Doctor");
            sessionStorage.setItem("DoctorId", this.jwtResponse.uId);
            localStorage.setItem("UserName", this.jwtResponse.Username);
            localStorage.setItem("ACCESS_ROLE", this.jwtResponse.rId.toString());
            sessionStorage.setItem("UserName", this.jwtResponse.Username);
            this.router.navigateByUrl('/doctors');
          }
          else{
            this.error="Sorry..Invalid authorization"
          }
        },
        error=>{
          this.error="Invalid user name or password. Try again"
        }
        
      );
    }
  }


  

  //calling method from AuthService -Authorization
  //check the role--based on RoleID it redirect to respective component
/*
  loginVerifyTest(){
    if(this.loginForm.valid){
      this.authService.getUserByPassword(this.loginForm.value)
      .subscribe(
        (data)=>{
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      );
    }
  }*/
}