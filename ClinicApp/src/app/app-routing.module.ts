import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListPatientsByDateComponent } from './list-patients-by-date/list-patients-by-date.component';
import { DoctorViewAppointmentsForDayFormComponent } from './doctor-view-appointments-for-day-form/doctor-view-appointments-for-day-form.component';
import { PatientPrescriptionHistoryComponent } from './patient-prescription-history/patient-prescription-history.component';
import { PatientLabHistoryComponent } from './patient-lab-history/patient-lab-history.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
<<<<<<< HEAD
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DoctorsComponent } from './doctors/doctors.component';


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
  { path: 'doctorviewlabreportbydate', component: DoctorViewLabreportByDateComponent, canActivate: [AuthGuard], data: { role: '4' } },
  { path: 'doctorviewlabreportbyid', component: DoctorViewLabreportByIdComponent, canActivate: [AuthGuard], data: { role: '4' } },
  { path: 'doctorViewAppointmentForm', component: DoctorViewAppointmentsForDayFormComponent },
  { path: 'doctorListPatientsByDate', component: ListPatientsByDateComponent },
  { path: 'patientPrescriptionHistory', component: PatientPrescriptionHistoryComponent },
  { path: 'patientLabHistory', component: PatientLabHistoryComponent },
  { path: 'addPrescription', component: AddPrescriptionComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'appointmentlist', component: AppointmentListComponent },
  { path: 'addPrescription', component: AddPrescriptionComponent },
  { path: 'doctors', component: DoctorsComponent, canActivate: [AuthGuard], data: { role: '4' }}

];
=======
import { AddPrescriptionMedicineComponent } from './add-prescription-medicine/add-prescription-medicine.component';
>>>>>>> 4620e60b8e641c6edc58b197be65cd58a816d678

const routes: Routes = [  
  {path:'doctorViewAppointmentForm', component:DoctorViewAppointmentsForDayFormComponent},
  {path: 'doctorListPatientsByDate', component:ListPatientsByDateComponent},
  {path: 'patientPrescriptionHistory', component: PatientPrescriptionHistoryComponent},
  {path: 'patientLabHistory', component: PatientLabHistoryComponent},
  {path: 'addPrescription', component: AddPrescriptionComponent},
  {path: 'addMedicineforPrescription', component: AddPrescriptionMedicineComponent}  
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
