import { Injectable } from '@angular/core';
import { DoctorModel } from './doctormodel';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  //create an instance of doctor
  formData: DoctorModel = new DoctorModel();


  constructor() { }
}
