import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prescription } from './Prescription';
import { TestListViewModel } from './testlisth';

@Injectable({
  providedIn: 'root'
})
export class TestlisthService {

  formTl: TestListViewModel=new TestListViewModel();
  formP: Prescription=new Prescription();
testlist: TestListViewModel[];

  constructor(private httpClient: HttpClient) { }

  //get method
  GetTestListByPatientId(patientid: number)
  {
    // console.log(environment.apiUrl + "/api/appointment/GetAppointmentByDoctorIdAndDate/" + doctorId + "/" + date);
    this.httpClient.get(environment.apiUrl + "/api/testlist/GetTestListByIdHistory/" + patientid)
    .toPromise().then( (response) =>  
    { 
      this.testlist = response as TestListViewModel[]  
      console.log("Loaded Test List"); 
      
    }   
    );
      //);
  }

}
