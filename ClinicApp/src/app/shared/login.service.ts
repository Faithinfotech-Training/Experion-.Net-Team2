import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from './login';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  formData: Login = new Login();
  logins: Login[];
  roles: Role[];

  constructor(private httpClient: HttpClient) { }

  //GET role for binding
  BindCmbRole(){
    this.httpClient.get(environment.apiUrl+"/api/login/getrole")
    .toPromise().then(response=>
      this.roles=response as Role[]
      );
      console.log(this.roles);

  }

  //insert
  insertLogin(login: Login): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/login/addlogin", login);
  }

  //get particular staff
  getLogin(loginid: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/login/getloginById?id=" + loginid);
  }

}
