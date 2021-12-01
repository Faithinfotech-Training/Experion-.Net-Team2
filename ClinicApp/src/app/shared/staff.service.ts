import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Staff } from './staff';
import {StaffList} from './stafflist';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  formData: Staff = new Staff();
  staffs: Staff[];

  constructor(private httpClient: HttpClient) { }

  //get all staffs
  bindListStaffs() {
    this.httpClient.get(environment.apiUrl + "/api/Staff/getstaffs")
      .toPromise().then(response =>
        this.staffs = response as Staff[]);
  }

  //insert
  insertStaff(staff: Staff): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/staff/addstaff", staff);
  }


  //update
  updateStaff(staff: Staff): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/Staff/updatestaff", staff);
  }

  //delete
  deleteStaff(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "/api/Staff/deletestaff?id=" + id);
  }

  //get particular staff
  getStaff(staffId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/Staff/getstaffById?id=" + staffId);
  }
}
