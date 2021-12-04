import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MedicineModel } from './MedicineModel';
import { TestBillModel } from './TestBillModel';
import { Prescription } from './Prescription';
@Injectable({
  providedIn: 'root'
})
export class BillGenerateServiceService {


  bpid : number;
  medicineModel : MedicineModel[];
  testBillModel : TestBillModel[];
  medTotal : number = 0;
  testTotal : number = 0;
  total : number = 0;
  prescription : Prescription = new Prescription();

  constructor(private httpClient: HttpClient) { }

  billGenerator(patientId : number)
  {
    console.log(environment.apiUrl + "/api/DoctorManagePatient/GetMedicineModels/" + patientId );
    this.httpClient.get(environment.apiUrl + "/api/DoctorManagePatient/GetMedicineModels/" + patientId )
    .toPromise().then( response =>   
      {    
        
      this.medicineModel = response as MedicineModel[];
      console.log('Responsed from api med: ');

      for(let i=0; i<this.medicineModel.length; i++){
        this.medTotal = this.medTotal + (
          Number(this.medicineModel[i].DosageFreq) * 
          Number(this.medicineModel[i].NoOfDays) * 
          Number(this.medicineModel[i].MedicineAmount)
          )}


          console.log(environment.apiUrl + "/api/DoctorManagePatient/GetTestBillModels/" + patientId );
      this.httpClient.get(environment.apiUrl + "/api/DoctorManagePatient/GetTestBillModels/" + patientId )
      .toPromise().then( response =>
        {       
          console.log('Responsed from test : ' + response);
          this.testBillModel = response as TestBillModel[];

          for(let i=0; i<this.testBillModel.length; i++)
          {
            console.log(this.testBillModel[i].TestName);
            this.testTotal = this.testTotal + (
              Number(this.testBillModel[i].Amount)              
              )
          }
          this.total = this.medTotal + this.testTotal;    
    });
    
    });
    
    this.total = 0;
    this.medTotal = 0;
    this.testTotal = 0;
  }

  paymentUpdate(id : number)
  {

    console.log('Payment Update');

    console.log(environment.apiUrl + "/api/DoctorManagePatient/getPrescriptionbyId/" + id );
    this.httpClient.get(environment.apiUrl + "/api/DoctorManagePatient/getPrescriptionbyId/" + id )
    .toPromise().then( response =>   
      {
        this.prescription = response[0] as Prescription;
        this.prescription.Billed = true;
        console.log('Prescription Get Response' + response);
        console.log(response[0] as Prescription)
        
        console.log(environment.apiUrl + "/api/DoctorManagePatient/UpdatePrescription/" + this.prescription );
        this.httpClient.put(environment.apiUrl + "/api/DoctorManagePatient/UpdatePrescription/" , this.prescription )
        .toPromise().then( response =>   
        {
        console.log('Prescription Update Response' + response);
      })
  })

}
}

