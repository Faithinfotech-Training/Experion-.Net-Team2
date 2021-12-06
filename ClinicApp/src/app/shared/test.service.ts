import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Labreport } from './labreport';
import { Test } from './test';
import { TestListViewModel } from './testlisth';
import { Testlist } from './TestListJ';
//import { Test } from './TestJ';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  formTest: Test=new Test();
  test: Test[];
  testli: Testlist;
  formT: TestListViewModel=new TestListViewModel();
  

  constructor(private httpClient: HttpClient) { }

  //Insert method for Test
 insertTest(test: Test): Observable<any>{
  return this.httpClient.post(environment.apiUrl + "/api/test/addtest", test);
}

  //Get all Test
  bindListTest() {
    this.httpClient.get(environment.apiUrl + "/api/test/gettests")
      .toPromise().then(response =>
        this.test = response as Test[]
      );
  }

  //get test by id
  GetTestById(testid: number) {

    //console.log(environment.apiUrl + "/api/DoctorManagePatient/getPatientTestHistorybyId/" + patientId );

    this.httpClient.get(environment.apiUrl + "/api/test/gettest/" + testid)

      .toPromise().then(response =>

        this.test = response as Test[]

      );

  }
 //Update
  updateTest(test: Test): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/test/updatest", test);
  }

  
  //updateTestList(testli: Testlist): Observable<any> {
    //console.log('Updating test list object');
    //return this.httpClient.put(environment.apiUrl + "/api/testlist", testli);

    
  //}

  updateTestList(testli  : Testlist)  // :  Observable<any>
  {     
    //console.log(environment.apiUrl + "/api/DoctorManagePatient/AddPrescription",p);
    //console.log("Inside Prescription");
    console.log('Entering update');
    this.httpClient.put(environment.apiUrl + "/api/testlist/Updatetest",testli)
    .toPromise()
    .then(
      (val) => 
      {
        console.log('Updating test list'+val);
        //sessionStorage.setItem("currentPrescriptionID", val.toString());
      });
  }

  GetTestListById(testid: number) {

    //console.log(environment.apiUrl + "/api/DoctorManagePatient/getPatientTestHistorybyId/" + patientId );

    this.httpClient.get(environment.apiUrl + "/api/testlist/GetTestListByIdHistory/" + testid)

      .toPromise().then(response =>

        this.test = response as Test[]

      );

  }



  GetTestListsById(id: number){
    console.log('Retrieving test list');
    console.log(environment.apiUrl+"/api/testlist/gettestlisth/"+ id);
    this.httpClient.get(environment.apiUrl+"/api/testlist/gettestlisth/"+ id)
    .toPromise().then(response =>{

      this.testli=response[0] as Testlist
      this.testli.IsDone=true;
      
      console.log('Updating test list ' + this.testli.Id);

      this.updateTestList(this.testli);
    }
      
      )
  }
  
}
