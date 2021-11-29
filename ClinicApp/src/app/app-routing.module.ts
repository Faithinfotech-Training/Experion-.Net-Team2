import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListPatientsByDateComponent } from './list-patients-by-date/list-patients-by-date.component';
import { DoctorViewAppointmentsForDayFormComponent } from './doctor-view-appointments-for-day-form/doctor-view-appointments-for-day-form.component';



const routes: Routes = [  
  {path:'doctorViewAppointmentByDate', component:DoctorViewAppointmentsForDayFormComponent},
  {path: 'doctorListPatientsByDate', component:ListPatientsByDateComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
