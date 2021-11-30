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
  { path: 'frontoffice', component: FrontofficeComponent, canActivate: [AuthGuard], data: { role: '2' } }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
