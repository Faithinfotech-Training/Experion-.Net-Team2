import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
//import { Testdetails } from './testdetails';
import { Testdetails } from './TestdetailsJ';

@Injectable({
  providedIn: 'root'
})
export class TestdetailsService {

  

  formLabT: Testdetails=new Testdetails();
  testdetails: Testdetails[];
  testdet: Testdetails;
  constructor(private httpClient: HttpClient) { 


  }

  //Get all Test Details
  bindListTestDetail() {
    this.httpClient.get(environment.apiUrl + "/api/testdetails/gettestdetails")
      .toPromise().then(response =>
        this.testdetails = response as Testdetails[]
      );
  }

    //Insert method for Test Details
 insertTestDetail(test: Testdetails): Observable<any>{
  return this.httpClient.post(environment.apiUrl + "/api/testdetails/addtestdetail", test);
}

  //UPDATE method for test details
  updateTestDetail(test: Testdetails): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/testdetails/updatest", test);
  }


  //Get test details by test no
  GetTestDetailByNo(id: number) {
    console.log(environment.apiUrl + "/api/testdetails/gettestdetail/" + id);
    this.httpClient.get(environment.apiUrl + "/api/testdetails/gettestdetail/" + id)
      .toPromise().then(response =>
        {
        this.testdet = response[0] as Testdetails;
        console.log("HZH "  + this.testdet.TestName);
        }


      );

  }

}
