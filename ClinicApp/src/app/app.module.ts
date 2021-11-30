import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPatientsByDateComponent } from './list-patients-by-date/list-patients-by-date.component';
import { DoctorViewAppointmentsForDayFormComponent } from './doctor-view-appointments-for-day-form/doctor-view-appointments-for-day-form.component';
import { AppRoutingModule } from './app-routing.module';
import { LabreportComponent } from './labreport/labreport.component';
import { LabreportService } from './shared/labreport.service';
import { LabtechnicianService } from './shared/labtechnician.service';
import { TestService } from './shared/test.service'; 
import { TestdetailsService } from './shared/testdetails.service';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { TestComponent } from './test/test.component';
import { TestdetailsComponent } from './testdetails/testdetails.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewtestdetailsComponent } from './viewtestdetails/viewtestdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPatientsByDateComponent,
    DoctorViewAppointmentsForDayFormComponent,
    LabreportComponent,
    LabtechnicianComponent,
    TestComponent,
    TestdetailsComponent,
    ViewtestdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LabreportService, LabtechnicianService, TestService, TestdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
