import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppointmentList } from './AppointmentList';
import { doctorViewByDateID } from './doctorViewByDateIDForm';
import { Appointment } from './appointment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrontofficeService {

  appointmentList : AppointmentList[];
  currentDoctor : doctorViewByDateID = new doctorViewByDateID();

  formData: Appointment = new Appointment();
  appointments: Appointment[];

  constructor(private httpClient: HttpClient) { }

//get appointment by doctor id and date
  appointmentByDocIdDate(doctorId : number, date : any)
  {
    this.httpClient.get(environment.apiUrl + "/api/Appointment/GetAppointmentByDoctorIdAndDate/" + doctorId + "/" + date)
    .toPromise().then( response =>  
      this.appointmentList = response as AppointmentList[] );
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
  
}
