import { ListPatientsByDateComponent } from './list-patients-by-date/list-patients-by-date.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DoctorViewAppointmentsForDayFormComponent } from './doctor-view-appointments-for-day-form/doctor-view-appointments-for-day-form.component';
import { GetreportComponent } from './getreport/getreport.component';
import { PatientRegisterH } from './shared/patient-register-h';
import { PatientRegisterHComponent } from './patient-register-h/patient-register-h.component';
import { PatientPrescriptionHistoryComponent } from './patient-prescription-history/patient-prescription-history.component';
import { PatientLabHistoryComponent } from './patient-lab-history/patient-lab-history.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AddLoginComponent } from './add-login/add-login.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AddPrescriptionMedicineComponent } from './add-prescription-medicine/add-prescription-medicine.component';
import { LoginComponent } from './login/login.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StaffComponent } from './staffs/staff/staff.component';
import { AuthGuard } from './shared/auth.guard';
import { StaffListComponent } from './staffs/staff-list/staff-list.component';
import { AdminComponent } from './admin/admin.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { LabreportComponent } from './labreport/labreport.component';
import { TestComponent } from './test/test.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { TestdetailsComponent } from './testdetails/testdetails.component';
import { ViewtestdetailsComponent } from './viewtestdetails/viewtestdetails.component';
import { DoctorViewLabreportByDateComponent } from './doctor-view-labreport-by-date/doctor-view-labreport-by-date.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorViewLabreportByIdComponent } from './doctor-view-labreport-by-id/doctor-view-labreport-by-id.component';
import { PatientViewByIdHComponent } from './patient-view-by-id-h/patient-view-by-id-h.component';
import { ViewTestHComponent } from './view-test-h/view-test-h.component';
import { ViewlabtechnicianhComponent } from './viewlabtechnicianh/viewlabtechnicianh.component';
import { TechnicianhomepageComponent } from './technicianhomepage/technicianhomepage.component';




import { DoctorComponent } from './doctor/doctor.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';





import { AppointmentByDateComponent } from './appointment-by-date/appointment-by-date.component';
import { TestListViewModel } from './shared/testlisth';
import { TestlistTOneComponent } from './testlist-tone/testlist-tone.component';
import { GenerateBillGetidComponent } from './generate-bill-getid/generate-bill-getid.component';
import { BillTableComponent } from './bill-table/bill-table.component';


const routes: Routes = [

  
  { path: 'doctorListPatientsByDate', component: ListPatientsByDateComponent },
  { path: 'patientPrescriptionHistory', component: PatientPrescriptionHistoryComponent},
  { path: 'patientLabHistory', component: PatientLabHistoryComponent},
  { path: 'addPrescription', component: AddPrescriptionComponent},
  { path: 'addMedicineforPrescription', component: AddPrescriptionMedicineComponent},
  { path: 'doctorViewAppointmentForm', component: DoctorViewAppointmentsForDayFormComponent },
  { path: 'labreport', component: LabreportComponent },
  { path: 'labtechnician', component: LabtechnicianComponent, canActivate:[AuthGuard], data:{role: '1'} },
  { path: 'test', component: TestComponent },
  { path: 'testdetails', component: TestdetailsComponent },
  { path: 'viewtestdetails', component: ViewtestdetailsComponent },
  { path: 'getreportlab', component: GetreportComponent }, // get repory by id
  { path: 'patientregister', component: PatientRegisterHComponent, canActivate: [AuthGuard], data: { role: '2' } },
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },  
  { path: 'staffs', component: StaffsComponent },
  { path: 'staff', component: StaffComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'stafflist', component: StaffListComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'staff/:staffId', component: StaffComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'frontoffice', component: FrontofficeComponent, canActivate: [AuthGuard], data: { role: '2' } },  
  { path: 'doctorlist', component: DoctorListComponent },
  { path: 'doctorviewlabreportbydate', component: DoctorViewLabreportByDateComponent, canActivate: [AuthGuard], data: { role: '4' } },
  { path: 'doctorviewlabreportbyid', component: DoctorViewLabreportByIdComponent, canActivate: [AuthGuard], data: { role: '4' } },
  { path: 'appointment', component: AppointmentComponent, canActivate: [AuthGuard], data: { role: '2' } },
  { path: 'appointmentlist', component: AppointmentListComponent, canActivate: [AuthGuard], data: { role: '2' } },
  { path: 'addLogin', component: AddLoginComponent, canActivate: [AuthGuard], data: { role: '1' }},
  { path: 'editstaff/:staffId', component: EditStaffComponent},


  //{ path: 'appointmentlist', component: AppointmentListComponent },
  { path: 'addPrescription', component: AddPrescriptionComponent },
  { path: 'doctors', component: DoctorsComponent, canActivate: [AuthGuard], data: { role: '4' }},  
  {path:'doctorViewAppointmentForm', component:DoctorViewAppointmentsForDayFormComponent},
  {path: 'doctorListPatientsByDate', component:ListPatientsByDateComponent},
  {path: 'patientPrescriptionHistory', component: PatientPrescriptionHistoryComponent},
  {path: 'patientLabHistory', component: PatientLabHistoryComponent},
  {path: 'addPrescription', component: AddPrescriptionComponent},
  {path: 'addMedicineforPrescription', component: AddPrescriptionMedicineComponent},

  
  {path: 'getpatient', component: PatientViewByIdHComponent, canActivate: [AuthGuard], data: { role: '2' }},
  {path: 'viewtest', component: ViewTestHComponent},
  {path: 'viewtechnician', component: ViewlabtechnicianhComponent, canActivate: [AuthGuard], data: { role: '1' }},
  {path: 'technicianhome', component: TechnicianhomepageComponent},
  {path: 'doctor', component: DoctorComponent,canActivate: [AuthGuard], data: { role: '1' }},
  {path:'appointmentByDate', component:AppointmentByDateComponent},
  {path:'testlistTOne', component:TestlistTOneComponent},

  {path:'gb', component: GenerateBillGetidComponent},
  {path:'bt', component: BillTableComponent}
  
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 
