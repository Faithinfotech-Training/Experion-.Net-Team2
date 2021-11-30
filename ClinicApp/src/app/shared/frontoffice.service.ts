import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
//import { AppointmentList } from './AppointmentList';

@Injectable({
  providedIn: 'root'
})
export class FrontofficeService {

  //appointmentList : AppointmentList[];

  constructor(private httpClient: HttpClient) { }
/*
  appointmentByDocIdDate(doctorId : number, date : any)
  {
    this.httpClient.get(environment.apiUrl + "/api/Appointment/GetAppointmentByDoctorIdAndDate/" + doctorId + "/" + date)
    .toPromise().then( response =>  
      this.appointmentList = response as AppointmentList[] );
  }
  */
}
