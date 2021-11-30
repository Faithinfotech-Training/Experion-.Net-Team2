import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListPatientsByDateComponent } from './list-patients-by-date/list-patients-by-date.component';
import { DoctorViewAppointmentsForDayFormComponent } from './doctor-view-appointments-for-day-form/doctor-view-appointments-for-day-form.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorViewLabreportByDateComponent } from './doctor-view-labreport-by-date/doctor-view-labreport-by-date.component';
import { DoctorViewLabreportByIdComponent } from './doctor-view-labreport-by-id/doctor-view-labreport-by-id.component';



const routes: Routes = [  
  {path:'doctorViewAppointmentByDate', component:DoctorViewAppointmentsForDayFormComponent},
  {path: 'doctorListPatientsByDate', component:ListPatientsByDateComponent},
  {path:'doctorlist',component:DoctorListComponent},
  {path:'doctorviewlabreportbydate',component:DoctorViewLabreportByDateComponent},
  {path:'doctorviewlabreportbyid',component:DoctorViewLabreportByIdComponent},

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
