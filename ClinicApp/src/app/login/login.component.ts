import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../shared/login';
import { AuthService } from '../shared/auth.service';
import { Jwtresponse } from '../shared/jwtresponse';
import { AppComponent } from '../app.component';
import { DoctorHelperService } from '../shared/doctor-helper.service';

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
    private authService: AuthService,
    public appcomponent : AppComponent,
    public ds : DoctorHelperService) { }

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

      this.appcomponent.updatePresence();

      this.authService.loginVerify(this.loginForm.value).subscribe(
        data=>{
          //console.log(data);

          

          //token
         this.jwtResponse=data;
        // this.jwtResponse.RoleId=data.ro
         //console.log("jwt:"+this.jwtResponse.rId);
      
          sessionStorage.setItem("token",this.jwtResponse.token);
          //console.log(this.jwtResponse.rId);

          if(this.jwtResponse.rId===9){

            this.authService.userPresent = true;
            sessionStorage.setItem("userPresent", 'true');

            //logged as Admin
            //console.log("Admin");
            sessionStorage.setItem("UserId",this.jwtResponse.uId);
            localStorage.setItem("UserName",this.jwtResponse.Username);
            localStorage.setItem("ACCESS_ROLE",this.jwtResponse.rId.toString());
            sessionStorage.setItem("UserName",this.jwtResponse.Username);
            sessionStorage.setItem("UserId",this.jwtResponse.uId);
            
            this.router.navigateByUrl('/admin');

          }else if(this.jwtResponse.rId===10){

            this.authService.userPresent = true;
            sessionStorage.setItem("userPresent", 'true');


            //console.log("FrontOffice");
            sessionStorage.setItem("UserId",this.jwtResponse.uId);
            localStorage.setItem("UserName",this.jwtResponse.Username);
            localStorage.setItem("ACCESS_ROLE",this.jwtResponse.rId.toString());
            sessionStorage.setItem("UserName",this.jwtResponse.Username);
            sessionStorage.setItem("UserId",this.jwtResponse.uId);
            this.router.navigateByUrl('/frontoffice');

          }else if (this.jwtResponse.rId === 11) {

            this.authService.userPresent = true;
            sessionStorage.setItem("userPresent", 'true');


            //console.log("LabTechnician");
            sessionStorage.setItem("UserId",this.jwtResponse.uId);
            localStorage.setItem("UserName", this.jwtResponse.Username);
            localStorage.setItem("ACCESS_ROLE", this.jwtResponse.rId.toString());
            sessionStorage.setItem("UserName", this.jwtResponse.Username);
            sessionStorage.setItem("UserId",this.jwtResponse.uId);
            this.router.navigateByUrl('/technicianhome');

          }else if (this.jwtResponse.rId === 12) {

            this.authService.userPresent = true;
            sessionStorage.setItem("userPresent", 'true');
            console.log(this.jwtResponse);
            //console.log("Doctor");
            sessionStorage.setItem("DoctorID", this.jwtResponse.uId);
            this.ds.GetDoctorIdfromStaffID(this.jwtResponse.uId);
            localStorage.setItem("UserName", this.jwtResponse.Username);
            localStorage.setItem("ACCESS_ROLE", this.jwtResponse.rId.toString());
            sessionStorage.setItem("UserName", this.jwtResponse.Username);
            //sessionStorage.setItem("UserId",this.jwtResponse.uId);
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