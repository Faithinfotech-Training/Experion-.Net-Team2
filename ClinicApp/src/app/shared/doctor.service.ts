import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { DoctorModel } from './doctormodel';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DoctorViewLabReport } from './doctorviewlabreport';
import {Department} from './department';
import { Staff } from './staff';
import { StaffList } from './stafflist';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  //create an instance of doctor
  formData: DoctorModel = new DoctorModel();
  formData1: Doctor = new Doctor();
  doctormodel: DoctorModel[];
  labreport:DoctorViewLabReport[];
  departments: Department[];
  staffdata:Staff=new Staff();
  staff:StaffList=new StaffList();


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

  //insert a doctor
  async insertDoctor(doctor:Doctor)//: Observable<any>
  {
    await this.httpClient.post(environment.apiUrl + "/api/doctor", doctor)
    .toPromise()
    .then(
      (val) => 
      {
        console.log(val); 
      });
  }

   //UPDATE
   updateDoctor(doctor: Doctor)  : Observable<any>
    {
    return this.httpClient.put(environment.apiUrl + "/api/doctor", doctor);
  }

  //get department for binding
  bindCmbDepartment() {
    this.httpClient.get(environment.apiUrl + "/api/doctor/GetDepartments")
      .toPromise().then(response =>
        this.departments = response as Department[]);
  }

  //get a particular doctor
  getDoctor(docId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/doctor/" + docId);
  }


}
