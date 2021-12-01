import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListPatientsByDateComponent } from './list-patients-by-date/list-patients-by-date.component';
import { DoctorViewAppointmentsForDayFormComponent } from './doctor-view-appointments-for-day-form/doctor-view-appointments-for-day-form.component';
import { LabreportComponent } from './labreport/labreport.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { TestComponent } from './test/test.component';
import { TestdetailsComponent } from './testdetails/testdetails.component';
import { ViewtestdetailsComponent } from './viewtestdetails/viewtestdetails.component';
import { GetreportComponent } from './getreport/getreport.component';
import { PatientRegisterH } from './shared/patient-register-h';
import { PatientRegisterHComponent } from './patient-register-h/patient-register-h.component';




const routes: Routes = [
  { path: 'doctorViewAppointmentByDate', component: DoctorViewAppointmentsForDayFormComponent },
  { path: 'doctorListPatientsByDate', component: ListPatientsByDateComponent },
  { path: 'labreport', component: LabreportComponent },
  { path: 'labtechnician', component: LabtechnicianComponent },
  { path: 'test', component: TestComponent },
  { path: 'testdetails', component: TestdetailsComponent },
  { path: 'viewtestdetails', component: ViewtestdetailsComponent },
  { path: 'getreportlab', component: GetreportComponent },
  { path: 'patientregister', component: PatientRegisterHComponent }



];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
