import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../shared/login';
import { LoginService } from '../shared/login.service';
import { StaffService } from '../shared/staff.service';

@Component({
  selector: 'app-add-login',
  templateUrl: './add-login.component.html',
  styleUrls: ['./add-login.component.css']
})
export class AddLoginComponent implements OnInit {

  loginid: number;
  login: Login = new Login();

  constructor(public loginService: LoginService,
    public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginService.BindCmbRole();
    /*
        //get empId from ActivatedRoute
        this.loginid = this.route.snapshot.params['loginid'];
        //this.loginid = Number(sessionStorage.getItem("StaffID"));
        console.log(this.loginid);
    
        if (this.loginid != 0 || this.loginid != null) {
          //getEmployee
          this.loginService.getLogin(this.loginid).subscribe(
            data => {
              console.log(data);
    
              this.loginService.formData = Object.assign({}, data);
            },
            error =>
              console.log(error)
          );
        }
        */
  }

  onSubmit(form: NgForm) {
    console.log(form.value)

    form.value.Loginid = Number(sessionStorage.getItem("StaffId"));
    console.log(Number(sessionStorage.getItem("StaffId")));
    console.log(form.value);
    let addId = this.loginService.formData.Loginid;

    //insert
    if (addId == 0 || addId == null) {
      this.insertLoginRecord(form);
    }
    console.log(form.value.RoleId);
    //this.router.navigate(['./stafflist']);
    if (form.value.RoleId == 1) {
      //logged as Admin
      console.log("Admin");
      this.router.navigateByUrl('/admin');

    } else if (form.value.RoleId == 2) {
      console.log("FrontOffice");
      this.router.navigateByUrl('/frontoffice');

    } else if (form.value.RoleId == 3) {
      console.log("LabTechnician");
      this.router.navigateByUrl('/technicianhome');

    } else if (form.value.RoleId == 4) {
      console.log("Doctor");
      this.router.navigateByUrl('/doctor');
    }
    else{
      this.router.navigate(['./stafflist']);
    }

  }

  //clear all contents at initialization
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //Insert
  insertLoginRecord(form?: NgForm) {
    console.log("Inserting a record...");
    //this.loginService.formData.Loginid=Number(sessionStorage.getItem("StaffID"));
    this.loginService.insertLogin(form.value).subscribe(
      (result) => {

        console.log(result);
        console.log(this.loginService.formData);
        this.resetForm(form);
        //this.toastrService.success('Staff record has been inserted', 'StaffApp v2021');
      }
    );
    window.alert("Login record has been inserted")
    //window.location.reload();
  }

  //Back to admin page
  back() {
    this.router.navigate(['./admin']);
  }

}
