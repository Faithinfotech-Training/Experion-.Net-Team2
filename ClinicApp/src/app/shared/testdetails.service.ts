import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Testdetails } from './testdetails';

@Injectable({
  providedIn: 'root'
})
export class TestdetailsService {

  

  formLabT: Testdetails=new Testdetails();
  testdetails: Testdetails[];
  constructor(private httpClient: HttpClient) { 


  }

  //Get all Labtechnicians
  bindListTestDetail() {
    this.httpClient.get(environment.apiUrl + "/api/test/gettest")
      .toPromise().then(response =>
        this.testdetails = response as Testdetails[]
      );
  }


  //UPDATE
  updateTestDetail(test: Testdetails): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/testdetials/updatetest", test);
  }
}
