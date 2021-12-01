import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Test } from './TestJ';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  formTest: Test=new Test();
  test: Test[];

  constructor(private httpClient: HttpClient) { }

  //Insert method for Test
 insertTest(test: Test): Observable<any>{
  return this.httpClient.post(environment.apiUrl + "/api/test/addtest", test);
}

  //Get all Test
  bindListTest() {
    this.httpClient.get(environment.apiUrl + "/api/test/gettest")
      .toPromise().then(response =>
        this.test = response as Test[]
      );
  }

 //Update
  updateTest(test: Test): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/test/updatest", test);
  }
}
