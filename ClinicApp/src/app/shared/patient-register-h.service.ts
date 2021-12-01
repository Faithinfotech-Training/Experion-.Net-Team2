import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PatientRegisterH } from './patient-register-h'

@Injectable({
  providedIn: 'root'
})
export class PatientRegisterHService {


  formPatient: PatientRegisterH=new PatientRegisterH();
  getPatients: PatientRegisterH[];

  constructor(private httpClient: HttpClient) { }

  //get all patients
  bindListPatients() {
    this.httpClient.get(environment.apiUrl + "/api/patientregister/getpatients")
      .toPromise().then(response =>
        this.getPatients = response as PatientRegisterH[]
      );
  }

//Insert method for patients
insertPatient(patient: PatientRegisterH): Observable<any> {
  return this.httpClient.post(environment.apiUrl + "/api/patientregister", patient);
}

}
