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
import { FormControl } from '@angular/forms';
//import sp from 'synchronized-promise'


@Injectable({
  providedIn: 'root'
})

export class DoctorHelperService {

  testlistO = new Testlist();

  currentDoctorID : number = 1;

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


  medicineCount : number[] = [0];
  medicineListD : FormControl[] = [new FormControl(0)];
  dosageList : FormControl[] = [new FormControl(0)];
  dayList : FormControl[] = [new FormControl(0)];

  testCount : number[] = [0];
  testList : FormControl[] = [new FormControl(0)];
  testNotes : FormControl[] = [new FormControl('')];

  prescriptionForMedicine = new Prescriptionformedicine();

  test : boolean;
  

  constructor(private httpClient: HttpClient) {
   }  

  async refreshAppointmentByDocIdDate(doctorId : number, date : any)
  {
    console.log(environment.apiUrl + "/api/DoctorManagePatient/AppointmentByDoctorIdDate/" + doctorId + "/" + date);
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
    console.log(environment.apiUrl + "/api/DoctorManagePatient/GetPrescriptionHistroyById/" + patientId );
    this.httpClient.get(environment.apiUrl + "/api/DoctorManagePatient/GetPrescriptionHistroyById/" + patientId )
    .toPromise().then( response =>       
      this.prescriptionHistory = response as PrescriptionHistory[] );
  }


  GetDoctorIdfromStaffID(id : number)
  {
    console.log(environment.apiUrl + "/api/DoctorManagePatient/GetDoctorIdfromStaffID/" + id );
    this.httpClient.get(environment.apiUrl + "/api/DoctorManagePatient/GetDoctorIdfromStaffID/" + id )
    .toPromise().then( response =>   
      {  
      sessionStorage.setItem("DoctorID", response.toString());
       
    });
  }



  getLabReportById(PatientId: number): Observable<any> {
    console.log(environment.apiUrl + "/api/DoctorManagePatient/LabReportsByPatientId/" +PatientId)
    return this.httpClient.get(environment.apiUrl + "/api/DoctorManagePatient/LabReportsByPatientId/" +PatientId);
    }



  patientLabHistorybyId(patientId : number)
  {
    console.log(environment.apiUrl + "/api/DoctorManagePatient/getPatientTestHistorybyId/" + patientId );
    this.httpClient.get(environment.apiUrl + "/api/DoctorManagePatient/getPatientTestHistorybyId/" + patientId )
    .toPromise().then( response =>       
      this.patientLabHistory = response as PatientLabHistory[] 
      );
  } 
  
  refreshAvailableTests()
  {
    console.log(environment.apiUrl + "/api/DoctorManagePatient/getAllTestDetails");
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


  addPrescriptionWhole(p  : Prescription, 
                      medicineCount : number[],                      
                      dosageList : FormControl[],
                      dayList : FormControl[], 
                      medicineList : FormControl[],
                      testCount : number[],
                      testList : FormControl[],
                      testNotes : FormControl[] )
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

        console.log('Prescription Posted');

        if (medicineCount.length > 0)
        {
          if (medicineList[0].value != 0)
          {
            for(let i of medicineCount)
            {
              this.prescriptionForMedicine.PrescriptionNo = 0;
              this.prescriptionForMedicine.DosageFreq = dosageList[i].value;
              this.prescriptionForMedicine.NoOfDays = dayList[i].value;
              this.prescriptionForMedicine.Isactive = true;
              this.prescriptionForMedicine.MedicineId = medicineList[i].value;
              this.prescriptionForMedicine.PrescriptionId = Number(sessionStorage.getItem("currentPrescriptionID"));
              
              console.log('Added medicine ' + this.prescriptionForMedicine);

              this.httpClient.post(environment.apiUrl + "/api/DoctorManagePatient/AddPrescriptionForMedicine",this.prescriptionForMedicine)
              .toPromise()
              .then(
                    (val) => 
                    {
                      console.log('Prescription for medicine Added with ID : '+ val); 
                    });

              // this.addPrescriptionforMedicine(this.prescriptionForMedicine);
            }
          }
        }
    
        console.log('Medicine List Posted');


        if (testCount.length > 0)
        {
          if (testList[0].value != 0)
          {
            for(let i of testCount)
            {
              this.testlistO.Id = 0;
              this.testlistO.PrescriptionId = Number(sessionStorage.getItem("currentPrescriptionID"));
              this.testlistO.TestNo = testList[i].value;
              this.testlistO.Notes = testNotes[i].value;
              this.testlistO.IsDone = false;
              console.log('Adding Test ' + this.testlistO )

              this.httpClient.post(environment.apiUrl + "/api/DoctorManagePatient/AddTestList",this.testlistO)
              .toPromise()
              .then(
                (val) => 
                {
                  console.log('Prescription for test list Added with ID : '+ val); 
                });

                console.log('Test List Posted');

              //this.addTestList(this.testlistO);         
            }
          }
        }});


    
  }
    
  
}
