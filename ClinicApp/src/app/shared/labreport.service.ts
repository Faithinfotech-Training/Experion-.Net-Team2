import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Labreport } from './labreport';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LabreportService {

  formLab: Labreport = new Labreport();
  constructor(private httpClient: HttpClient) { }

    //Get a particular report
    getReport(repNo: number): Observable<any> {
      return this.httpClient.get(environment.apiUrl + "/api/labreport/getreport/" + repNo);
    }

  //Insert method for labreport
 insertReport(report: Labreport): Observable<any>{
  return this.httpClient.post(environment.apiUrl + "/api/labreport", report);
 }
}
