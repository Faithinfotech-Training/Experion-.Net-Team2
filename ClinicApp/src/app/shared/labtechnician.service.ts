import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Labtechnician } from './labtechnician';

@Injectable({
  providedIn: 'root'
})
export class LabtechnicianService {

  formLabT: Labtechnician=new Labtechnician();
  technicians: Labtechnician[];
  constructor(private httpClient: HttpClient) { 


  }

  
  //Insert method for labtechnician
 insertTechnician(tech: Labtechnician): Observable<any>{
  return this.httpClient.post(environment.apiUrl + "/api/labtechnician/addtechnician", tech);
}

  //Get all Labtechnicians
  bindListTechnician() {
    this.httpClient.get(environment.apiUrl + "/api/labtechnician/gettechnicians")
      .toPromise().then(response =>
        this.technicians = response as Labtechnician[]
      );
  }

 //Update
  //UPDATE
  updateTechnician(tech: Labtechnician): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/labtechnician/updatetechnician", tech);
  }
}
