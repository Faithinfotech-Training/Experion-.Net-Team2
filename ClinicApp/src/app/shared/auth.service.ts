import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userPresent : boolean = false;

  constructor(private httpClient:HttpClient,private router:Router) { }
  getUserByPassword(user:Login):Observable<any>{
    console.log(user.Username);
    console.log(user.Password);
    return this.httpClient.get(environment.apiUrl+"/api/login/"+user.Username+"/"+user.Password);
    
  }

  public loginVerify(user:Login){

    //calling webservice url and passing username and password

    console.log("Attempt authenticate and authorize : :");

    console.log(user);

    return this.httpClient.get(environment.apiUrl+"/api/login/"+user.Username+"/" + user.Password)

  }

  public logOut()
  {    
    localStorage.removeItem('username');
    localStorage.removeItem("ACCESS_ROLE");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem('jwtToken');
    localStorage.clear();
    sessionStorage.clear();
    this.userPresent = false;
  }
}
