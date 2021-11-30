import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListPatientsByDateComponent } from './list-patients-by-date/list-patients-by-date.component';
import { DoctorViewAppointmentsForDayFormComponent } from './doctor-view-appointments-for-day-form/doctor-view-appointments-for-day-form.component';

import { LoginComponent } from './login/login.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StaffComponent } from './staffs/staff/staff.component';
import { StaffListComponent } from './staffs/staff-list/staff-list.component';
import { AdminComponent } from './admin/admin.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { AuthGuard } from './shared/auth.guard';


import { LabreportComponent } from './labreport/labreport.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { TestComponent } from './test/test.component';
import { TestdetailsComponent } from './testdetails/testdetails.component';
import { ViewtestdetailsComponent } from './viewtestdetails/viewtestdetails.component';

import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorViewLabreportByDateComponent } from './doctor-view-labreport-by-date/doctor-view-labreport-by-date.component';
import { DoctorViewLabreportByIdComponent } from './doctor-view-labreport-by-id/doctor-view-labreport-by-id.component';

import { PatientPrescriptionHistoryComponent } from './patient-prescription-history/patient-prescription-history.component';
import { PatientLabHistoryComponent } from './patient-lab-history/patient-lab-history.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';


const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'doctorViewAppointmentByDate', component: DoctorViewAppointmentsForDayFormComponent },
  { path: 'doctorListPatientsByDate', component: ListPatientsByDateComponent },
  { path: 'staffs', component: StaffsComponent },
  { path: 'staff', component: StaffComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'stafflist', component: StaffListComponent },
  { path: 'staff/:staffId', component: StaffComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'frontoffice', component: FrontofficeComponent, canActivate: [AuthGuard], data: { role: '2' } },
  { path: 'doctorViewAppointmentByDate', component: DoctorViewAppointmentsForDayFormComponent },
  { path: 'doctorListPatientsByDate', component: ListPatientsByDateComponent },
  { path: 'labreport', component: LabreportComponent },
  { path: 'labtechnician', component: LabtechnicianComponent },
  { path: 'test', component: TestComponent },
  { path: 'testdetails', component: TestdetailsComponent },
  { path: 'viewtestdetails', component: ViewtestdetailsComponent },
  { path: 'doctorListPatientsByDate', component: ListPatientsByDateComponent },
  { path: 'doctorlist', component: DoctorListComponent },
  { path: 'doctorviewlabreportbydate', component: DoctorViewLabreportByDateComponent },
  { path: 'doctorviewlabreportbyid', component: DoctorViewLabreportByIdComponent },
  { path: 'doctorViewAppointmentForm', component: DoctorViewAppointmentsForDayFormComponent },
  { path: 'doctorListPatientsByDate', component: ListPatientsByDateComponent },
  { path: 'patientPrescriptionHistory', component: PatientPrescriptionHistoryComponent },
  { path: 'patientLabHistory', component: PatientLabHistoryComponent },
  { path: 'addPrescription', component: AddPrescriptionComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'appointmentlist', component: AppointmentListComponent },
  { path: 'addPrescription', component: AddPrescriptionComponent }

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
