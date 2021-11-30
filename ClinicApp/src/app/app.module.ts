import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DoctorService } from './shared/doctor.service'

import { AppComponent } from './app.component';


import { ListPatientsByDateComponent } from './list-patients-by-date/list-patients-by-date.component';
import { DoctorViewAppointmentsForDayFormComponent } from './doctor-view-appointments-for-day-form/doctor-view-appointments-for-day-form.component';
import { AppRoutingModule } from './app-routing.module';

import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DoctorViewLabreportByDateComponent } from './doctor-view-labreport-by-date/doctor-view-labreport-by-date.component';
import { DoctorViewLabreportByIdComponent } from './doctor-view-labreport-by-id/doctor-view-labreport-by-id.component';
import { DoctorsComponent } from './doctors/doctors.component';

import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientPrescriptionHistoryComponent } from './patient-prescription-history/patient-prescription-history.component';
import { PatientLabHistoryComponent } from './patient-lab-history/patient-lab-history.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';



@NgModule({
  declarations: [
    AppComponent,
    DoctorViewAppointmentsForDayFormComponent,
    ListPatientsByDateComponent,
    DoctorListComponent,
    DoctorViewLabreportByDateComponent,
    DoctorViewLabreportByIdComponent,
    DoctorsComponent,
    PatientPrescriptionHistoryComponent,
    PatientLabHistoryComponent,
    AddPrescriptionComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),


   
  ],
 
 
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
