import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { DoctorModel } from './doctormodel';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DoctorViewLabReport } from './doctorviewlabreport'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  //create an instance of doctor
  formData: DoctorModel = new DoctorModel();
  formData1: Doctor = new Doctor();
  doctormodel: DoctorModel[];
  labreport:DoctorViewLabReport[];


  constructor(private httpClient: HttpClient) { }

  //get all doctors
  bindListDoctors() {
    this.httpClient.get(environment.apiUrl + "/api/doctor")
      .toPromise().then(response => this.doctormodel = response as DoctorModel[]);
  }

  //getlabreport by date
  getLabReportByDate(report: DoctorViewLabReport): Observable<any> {
    console.log(report.ReportNo);
    return this.httpClient.get(environment.apiUrl + "/api/DoctorManagePatient/LabReportsByDate/" + report.ReportDate)
    ;

  }

  //getlab report by id
  getLabReportById(pId:number):Observable<any> {
    return this.httpClient.get(environment.apiUrl+ "/api/DoctorManagePatient/LabReportsByPatientId/"+ pId);
    
  }

}
