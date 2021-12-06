import { Time } from "@angular/common";

export class AppointmentList
  {
    AppointmentNo : number ;  
    AppointmentDate : Date ;    
    AppointmentTime : Date ;      
    PatientId : number ;
    PatientName : string ;
    DoctorName : string;
    DateOfBirth : Date ;
    Isactive : boolean=true;
  }