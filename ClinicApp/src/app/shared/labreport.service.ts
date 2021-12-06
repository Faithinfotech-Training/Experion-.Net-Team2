import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Labreport } from './labreport';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PatientRegisterH } from './patient-register-h';


@Injectable({
  providedIn: 'root'
})
export class LabreportService {

edit: boolean;

  formLab: Labreport = new Labreport();
  formpat: PatientRegisterH=new PatientRegisterH();
  getReports: Labreport[];
  getPatients: PatientRegisterH[];
  getRepo: Labreport;


  constructor(private httpClient: HttpClient) { }

  //get all reports
  bindListReports() {
    console.log('Detail Lab Report');
    console.log(environment.apiUrl + "/api/labreport/getreports");
    this.httpClient.get(environment.apiUrl + "/api/labreport/getreports")
      .toPromise().then(response =>
        this.getReports = response as Labreport[]
      );

  }

  
  //Get a particular report
  GetReportById(patientId: number) {

    //console.log(environment.apiUrl + "/api/DoctorManagePatient/getPatientTestHistorybyId/" + patientId );

    this.httpClient.get(environment.apiUrl + "/api/labreport/getreport/" + patientId)

      .toPromise().then(response =>

        this.getReports = response as Labreport[]

      );

  }

  //Insert method for labreport
  insertReport(report: Labreport): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/labreport", report);
  }

  //Update method for labreport
  updateReport(report: Labreport): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/labreport/updatereport", report);
  }

  //get all patients
  bindListPatients() {
    this.httpClient.get(environment.apiUrl + "/api/patientregister/getpatients")
      .toPromise().then(response =>
        this.getPatients = response as PatientRegisterH[]
      );
  }





  //Delete method for labreport
  deleteReport(id: number) {
    return this.httpClient.delete(environment.apiUrl + "/api/labreport/deletereport/" + id);
  }
}
