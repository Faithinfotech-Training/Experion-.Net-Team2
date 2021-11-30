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

@Injectable({
  providedIn: 'root'
})
export class DoctorHelperService {

  appointmentList : AppointmentList[];
  currentDoctor : doctorViewByDateID = new doctorViewByDateID();
  prescriptionHistory : PrescriptionHistory[];
  patientLabHistory : PatientLabHistory[];
  medicine : Medicine = new Medicine();
  prescription : Prescription = new Prescription();
  prescriptionformedicine : Prescriptionformedicine = new Prescriptionformedicine();

  constructor(private httpClient: HttpClient) { }

  refreshAppointmentByDocIdDate(doctorId : number, date : any)
  {
    console.log(environment.apiUrl + "/api/appointment/GetAppointmentByDoctorIdAndDate/" + doctorId + "/" + date);
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

}
