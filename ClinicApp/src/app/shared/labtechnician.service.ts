import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from './department';
import { Labtechnician } from './labtechnician';
import { Staff } from './staff';
import { TechnicianModel } from '../shared/technician-model';

@Injectable({
  providedIn: 'root'
})
export class LabtechnicianService {

  formLabT: Labtechnician=new Labtechnician();
  formdep: Department=new Department();
  formstaff: Staff=new Staff();
  formTech: TechnicianModel=new TechnicianModel();

  departments: Department[];
  technicians: Labtechnician[];
  viewtech: TechnicianModel[]

  constructor(private httpClient: HttpClient) { 


  }

  //get department for binding
  bindCmbDepartment() {
    this.httpClient.get(environment.apiUrl + "/api/doctor/GetDepartments")
      .toPromise().then(response =>
        this.departments = response as Department[]);
  }


//insert a doctor
async insertTechnician(tech: Labtechnician)//: Observable<any>
{
  await this.httpClient.post(environment.apiUrl + "/api/labtechnician/addtechnician", tech)
    .toPromise()
    .then(
      (val) => {
        console.log(val);
      });
}

  //Get all Labtechnicians
  bindListTechnician() {
    this.httpClient.get(environment.apiUrl + "/api/labtechnician/gettechnicians")
      .toPromise().then(response =>
        this.technicians = response as Labtechnician[]
      );
  }


  //Get a particular Technician
  GetTechnicianById(technicianId: number) {

    //console.log(environment.apiUrl + "/api/DoctorManagePatient/getPatientTestHistorybyId/" + patientId );

    this.httpClient.get(environment.apiUrl + "/api/labtechnician/gettechnician/" + technicianId)

      .toPromise().then(response =>

        this.technicians = response as Labtechnician[]

      );

  }


 //Update
  //UPDATE
  updateTechnician(tech: Labtechnician): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/labtechnician/updatetechnician", tech);
  }


  //get method
  GetCustomLabTechnicianById(techid: number)
  {
    // console.log(environment.apiUrl + "/api/appointment/GetAppointmentByDoctorIdAndDate/" + doctorId + "/" + date);
    this.httpClient.get(environment.apiUrl + "/api/labtechnician/gettechniciancustom/" + techid)
    .toPromise().then( (response) =>  
    { 
      this.viewtech = response as TechnicianModel[]  
      console.log("Loaded Technician List"); 
      
    }   
    );
      //);
  }
}
