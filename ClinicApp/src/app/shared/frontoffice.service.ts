import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppointmentList } from './AppointmentList';
import { doctorViewByDateID } from './doctorViewByDateIDForm';
import { Appointment } from './appointment'
import { Observable } from 'rxjs';
import { PatientRegisterH } from './patient-register-h';
import { DoctorModel } from './doctormodel';

@Injectable({
  providedIn: 'root'
})
export class FrontofficeService {

  formData: Appointment = new Appointment();
  appointments: Appointment[];
  patients: PatientRegisterH[];
  doctors: DoctorModel[];
  appointmentlists: AppointmentList[];
  currentDoctor : doctorViewByDateID = new doctorViewByDateID();

  constructor(private httpClient: HttpClient) { }

  //get all patients
  BindCmbPatient(){
    this.httpClient.get(environment.apiUrl+"/api/patientregister/getpatients")
    .toPromise().then(response=>
      this.patients=response as PatientRegisterH[]
      );
      console.log(this.patients);
  }

  //get all doctors
  BindCmbDoctor(){
    this.httpClient.get(environment.apiUrl+"/api/doctor")
    .toPromise().then(response=>
      this.doctors=response as DoctorModel[]
      );
      console.log(this.doctors);
  }

//get appointment by doctor id and date
  async appointmentByDocIdDate(doctorId : number, date : any)
  {
    await this.httpClient.get(environment.apiUrl + "/api/appointment/GetAppointmentByDoctorIdAndDate/" + doctorId + "/" + date)
    .toPromise().then( response =>{
      this.appointments = response as Appointment[]
      console.log("Loaded appointment List"); 
    }
    );
      //this.appointments = response as Appointment[] );
  }

   //get all appointments
   bindListAppointments() {
    this.httpClient.get(environment.apiUrl + "/api/Appointment/getappointments")
      .toPromise().then(response =>
        this.appointments = response as Appointment[]);
  }

  //insert
  insertAppointment(appointment: Appointment): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/Appointment/addappointment", appointment);
  }

  //update
  updateAppointment(appointment: Appointment): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/Appointment/updateappointment", appointment);
  }

  //delete
  deleteAppointment(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "/api/Appointment/deleteappointment?id=" + id);
  }

  //get particular staff
  getAppointment(appointmentNo: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/Appointment/GetAppointmentById=" + appointmentNo);
  }
  
}
