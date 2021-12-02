import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorHelperService } from '../shared/doctor-helper.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Prescription } from '../shared/Prescription'
import { Prescriptionformedicine } from '../shared/PrescriptionForMedicine'
import { Testlist } from '../shared/TestListJ'

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent implements OnInit {
  
  //prescribeCheck : boolean;  

  doctorNotes = new FormControl('');
  medicineCount : number[] = [0];
  medicineList : FormControl[] = [new FormControl(0)];
  dosageList : FormControl[] = [new FormControl(0)];
  dayList : FormControl[] = [new FormControl(0)];

  testCount : number[] = [0];
  testList : FormControl[] = [new FormControl(0)];
  testNotes : FormControl[] = [new FormControl('')];

  prescription = new Prescription();
  prescriptionForMedicine = new Prescriptionformedicine();
  testlistO = new Testlist();

  //medicineList : number[] = [0];
  //dosageList : number[] = [0];
  //dayList : number[] = [0];

  constructor(public doctorHelperService : DoctorHelperService,
    public router: Router) { }

  ngOnInit(): void {
    //console.log("Refereshing Availabale Tests");
    this.doctorHelperService.refreshAvailableTests();
    this.doctorHelperService.refreshAvailableMedicine();
    //console.log(this.doctorHelperService.testDetails);    
  }

  addCount()
  {
    this.medicineList.push(new FormControl(0));
    this.dosageList.push(new FormControl(0));
    this.dayList.push(new FormControl(0));
    this.medicineCount.push((this.medicineCount.length - 1) + 1);
  }

  addCountT()
  {
    this.testList.push(new FormControl(0));
    this.testNotes.push(new FormControl(''));
    this.testCount.push((this.testCount.length - 1) + 1);
  }

  removeCount()
  {
    if(this.medicineCount.length > 0)
    {
      this.medicineCount.pop();
    }    
  }

  
  removeCountT()
  {
    if(this.testCount.length > 0)
    {
      this.testCount.pop();
    }    
  }

  onSubmit()
  {
    this.prescription.PrescriptionId = 0;
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    this.prescription.PrescriptionDate = utc;
    this.prescription.DoctorNotes = this.doctorNotes.value;
    this.prescription.Isactive = true;
    this.prescription.DoctorId = Number(sessionStorage.getItem("DoctorID"));
    this.prescription.PatientId = Number(sessionStorage.getItem("CurrentPatientId"));
    this.doctorHelperService.addPrescriptionWhole(
      this.prescription,
      this.medicineCount,      
      this.dosageList,
      this.dayList,
      this.medicineList,
      this.testCount,
      this.testList,
      this.testNotes);


    /*

   this.doctorHelperService.addPrescription(this.prescription);

    console.log('Prescription Posted');

    if (this.medicineCount.length > 0)
    {
      if (this.medicineList[0].value != 0)
      {
        for(let i of this.medicineCount)
        {
          this.prescriptionForMedicine.PrescriptionNo = 0;
          this.prescriptionForMedicine.DosageFreq = this.dosageList[i].value;
          this.prescriptionForMedicine.NoOfDays = this.dayList[i].value;
          this.prescriptionForMedicine.Isactive = true;
          this.prescriptionForMedicine.MedicineId = this.medicineList[i].value;
          this.prescriptionForMedicine.PrescriptionId = Number(sessionStorage.getItem("currentPrescriptionID"));
          this.doctorHelperService.addPrescriptionforMedicine(this.prescriptionForMedicine);
        }
      }
    }

    console.log('Medicine List Posted');

    if (this.testCount.length > 0)
    {
      if (this.testList[0].value != 0)
      {
        for(let i of this.testCount)
        {
          this.testlistO.Id = 0;
          this.testlistO.PrescriptionId = Number(sessionStorage.getItem("currentPrescriptionID"));
          this.testlistO.TestNo = this.testList[i].value;
          this.testlistO.Notes = this.testNotes[i].value; 
          this.doctorHelperService.addTestList(this.testlistO);         
        }
      }
    }


    console.log('Test List Posted');

    */

    this.router.navigate(['doctorListPatientsByDate']);

  }
  /*
  readForm(form : NgForm)
  {
    if(this.prescribeCheck)
    {
      //console.log(this.prescribeCheck);
      //console.log(form.value);
      delete form.value.prescribeCheck;
      delete form.value.PrescriptionId;
      form.value.Isactive = true;
      form.value.DoctorId = Number(sessionStorage.getItem("DoctorID"));
      form.value.PatientId = Number(sessionStorage.getItem("CurrentPatientId"));
      //console.log("Before Prescription");      
      this.doctorHelperService.addPrescription(form.value);            
      this.router.navigate(['addMedicineforPrescription']);
    }
    else
    {
      delete form.value.prescribeCheck;
      delete form.value.PrescriptionId;
      form.value.Isactive = true;
      form.value.DoctorId = Number(sessionStorage.getItem("DoctorID"));
      form.value.PatientId = Number(sessionStorage.getItem("CurrentPatientId"));
      //console.log("Before Prescription");      
      this.doctorHelperService.addPrescription(form.value);
      location.reload();
    }    
  }

  addMedicine(): void
  {
    console.log('button pressed');
  }

  */
}
