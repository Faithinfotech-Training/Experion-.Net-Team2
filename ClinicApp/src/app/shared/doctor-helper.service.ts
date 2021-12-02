import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { doctorViewByDateID } from './doctorViewByDateIDForm';
import { AppointmentList } from './AppointmentList';
import { environment } from 'src/environments/environment';
import { PrescriptionHistory } from './PrescriptionHistory';
import { PatientLabHistory } from './PatientLabHistory'; 
import { Medicine } from './Medicine'; 
import { Prescription } from './Prescription'; 
import { Prescriptionformedicine } from './PrescriptionForMedicine'; 
import { Testdetails } from './TestdetailsJ';
import { Testlist } from './TestListJ';
import { isObservable, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import sp from 'synchronized-promise'


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

  test : boolean;
  

  constructor(private httpClient: HttpClient) {
   }




  

  async refreshAppointmentByDocIdDate(doctorId : number, date : any)
  {
    // console.log(environment.apiUrl + "/api/appointment/GetAppointmentByDoctorIdAndDate/" + doctorId + "/" + date);
    await this.httpClient.get(environment.apiUrl + "/api/DoctorManagePatient/AppointmentByDoctorIdDate/" + doctorId + "/" + date)
    .toPromise().then( (response) =>  
    { 
      this.appointmentList = response as AppointmentList[]  
      console.log("Loaded appointment List"); 
      this.test = false;
    }   
    );
      //);
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



  addPrescription(p  : Prescription)  // :  Observable<any>
  {     
    console.log(environment.apiUrl + "/api/DoctorManagePatient/AddPrescription",p);
    console.log("Inside Prescription");
    this.httpClient.post(environment.apiUrl + "/api/DoctorManagePatient/AddPrescription",p)
    .toPromise()
    .then(
      (val) => 
      {
        console.log('Prescription Added with ID : '+ val);
        sessionStorage.setItem("currentPrescriptionID", val.toString());
      });
  }


  addPrescriptionforMedicine(p  : Prescriptionformedicine)  // :  Observable<any>
  {      
    //console.log(environment.apiUrl + "/api/DoctorManagePatient/AddPrescriptionForMedicine",p);
    //console.log("Inside Prescription");
    this.httpClient
    .post(environment.apiUrl + "/api/DoctorManagePatient/AddPrescriptionForMedicine",p)
    .toPromise()
    .then(
      (val) => 
      {
        console.log('Prescription for medicine Added with ID : '+ val); 
      });
  }

  addTestList(p  : Testlist)  // :  Observable<any>
  {      
    //console.log(environment.apiUrl + "/api/DoctorManagePatient/AddPrescriptionForMedicine",p);
    //console.log("Inside Prescription");
    this.httpClient
    .post(environment.apiUrl + "/api/DoctorManagePatient/AddTestList",p)
    .toPromise()
    .then(
      (val) => 
      {
        console.log('Prescription for test list Added with ID : '+ val); 
      });
  }
    
  
}
