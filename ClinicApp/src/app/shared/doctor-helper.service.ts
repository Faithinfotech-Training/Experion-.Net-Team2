import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { doctorViewByDateID } from './doctorViewByDateIDForm';
import { AppointmentList } from './AppointmentList';
import { environment } from 'src/environments/environment';
import { PrescriptionHistory } from './PrescriptionHistory';
import { PatientLabHistory } from './PatientLabHistory'; 
import { Medicine } from './Medicine'; 
import { Prescription } from './Prescription'; 
import { Prescriptionformedicine } from './PrescriptionForMedicine'; 
import { Testdetails } from './TestdetailsJ';

@Injectable({
  providedIn: 'root'
})
export class DoctorHelperService {

  appointmentList : AppointmentList[];
  currentDoctor : doctorViewByDateID = new doctorViewByDateID();
  prescriptionHistory : PrescriptionHistory[];
  patientLabHistory : PatientLabHistory[];
  medicine : Medicine = new Medicine();
  medicineList : Medicine[];
  prescription : Prescription = new Prescription();
  prescriptionformedicine : Prescriptionformedicine = new Prescriptionformedicine();
  testDetails : Testdetails[];
  testDetail : Testdetails = new Testdetails();
  postPrescriptionFlag : boolean ;


  constructor(private httpClient: HttpClient) { }

  refreshAppointmentByDocIdDate(doctorId : number, date : any)
  {
    // console.log(environment.apiUrl + "/api/appointment/GetAppointmentByDoctorIdAndDate/" + doctorId + "/" + date);
    this.httpClient.get(environment.apiUrl + "/api/DoctorManagePatient/AppointmentByDoctorIdDate/" + doctorId + "/" + date)
    .toPromise().then( response =>       
      this.appointmentList = response as AppointmentList[] );
  }

  patientPrescriptionHistorybyId(patientId : number)
  {
    //console.log(environment.apiUrl + "/api/DoctorManagePatient/GetPrescriptionHistroyById/" + patientId );
    this.httpClient.get(environment.apiUrl + "/api/DoctorManagePatient/GetPrescriptionHistroyById/" + patientId )
    .toPromise().then( response =>       
      this.prescriptionHistory = response as PrescriptionHistory[] );
  }

  patientLabHistorybyId(patientId : number)
  {
    //console.log(environment.apiUrl + "/api/DoctorManagePatient/getPatientTestHistorybyId/" + patientId );
    this.httpClient.get(environment.apiUrl + "/api/DoctorManagePatient/getPatientTestHistorybyId/" + patientId )
    .toPromise().then( response =>       
      this.patientLabHistory = response as PatientLabHistory[] 
      );
  } 
  
  refreshAvailableTests()
  {
    this.httpClient.get(environment.apiUrl + "/api/DoctorManagePatient/getAllTestDetails").toPromise()
      .then(Response => 
      {
        this.testDetails = Response as Testdetails[]
      }
    );

    //console.log(result as Testdetails[]);
    //this.testDetails = result as Testdetails[];
  }

  refreshAvailableMedicine()
  {
    this.httpClient.get(environment.apiUrl + "/api/DoctorManagePatient/getAllMedicine").toPromise()
      .then(Response => 
      {
        this.medicineList = Response as Medicine[];
      }
    );

    //console.log(result as Testdetails[]);
    //this.testDetails = result as Testdetails[];
  }



  async addPrescription(p  : Prescription)  // :  Observable<any>
  {     
    p.PrescriptionId = 0; 
    console.log(environment.apiUrl + "/api/DoctorManagePatient/AddPrescription",p);
    console.log("Inside Prescription");
    await this.httpClient.post(environment.apiUrl + "/api/DoctorManagePatient/AddPrescription",p)
    .toPromise()
    .then(
      (val) => 
      {
        sessionStorage.setItem("currentPrescriptionID", val.toString());
      });
  }


  async addPrescriptionforMedicine(p  : Prescriptionformedicine)  // :  Observable<any>
  {      
    //console.log(environment.apiUrl + "/api/DoctorManagePatient/AddPrescriptionForMedicine",p);
    //console.log("Inside Prescription");
    await this.httpClient
    .post(environment.apiUrl + "/api/DoctorManagePatient/AddPrescriptionForMedicine",p)
    .toPromise()
    .then(
      (val) => 
      {
        console.log(val); 
      });
  }
    
  
}
