import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPatientsByDateComponent } from './list-patients-by-date/list-patients-by-date.component';
import { DoctorViewAppointmentsForDayFormComponent } from './doctor-view-appointments-for-day-form/doctor-view-appointments-for-day-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientPrescriptionHistoryComponent } from './patient-prescription-history/patient-prescription-history.component';
import { PatientLabHistoryComponent } from './patient-lab-history/patient-lab-history.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { AddPrescriptionMedicineComponent } from './add-prescription-medicine/add-prescription-medicine.component';
import { LoginComponent } from './login/login.component';

import { HttpClient,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { AuthInterceptor } from './shared/auth.interceptor';
import { StaffsComponent } from './staffs/staffs.component';
import { StaffComponent } from './staffs/staff/staff.component';
import { StaffListComponent } from './staffs/staff-list/staff-list.component';
import { AdminComponent } from './admin/admin.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorService } from './shared/doctor.service'
import { LabreportComponent } from './labreport/labreport.component';
import { LabreportService } from './shared/labreport.service';
import { LabtechnicianService } from './shared/labtechnician.service';
import { TestService } from './shared/test.service'; 
import { TestlisthService } from './shared/testlisth.service';
import { TestdetailsService } from './shared/testdetails.service';
import { PatientRegisterHService } from './shared/patient-register-h.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetreportComponent } from './getreport/getreport.component';
import { PatientRegisterHComponent } from './patient-register-h/patient-register-h.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { TestComponent } from './test/test.component';
import { TestdetailsComponent } from './testdetails/testdetails.component'
import { ViewtestdetailsComponent } from './viewtestdetails/viewtestdetails.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorViewLabreportByDateComponent } from './doctor-view-labreport-by-date/doctor-view-labreport-by-date.component';
import { DoctorViewLabreportByIdComponent } from './doctor-view-labreport-by-id/doctor-view-labreport-by-id.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientViewByIdHComponent } from './patient-view-by-id-h/patient-view-by-id-h.component';
import { ViewTestHComponent } from './view-test-h/view-test-h.component';
import { ViewlabtechnicianhComponent } from './viewlabtechnicianh/viewlabtechnicianh.component';
import { TechnicianhomepageComponent } from './technicianhomepage/technicianhomepage.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AddLoginComponent } from './add-login/add-login.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';

import { AppointmentByDateComponent } from './appointment-by-date/appointment-by-date.component';
import { TestlistTOneComponent } from './testlist-tone/testlist-tone.component';
import { GenerateBillGetidComponent } from './generate-bill-getid/generate-bill-getid.component';
import { BillTableComponent } from './bill-table/bill-table.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPatientsByDateComponent,    
    AddPrescriptionComponent,
    AddPrescriptionMedicineComponent,
    LoginComponent,    
    StaffsComponent,
    StaffComponent,
    StaffListComponent,
    AdminComponent,
    FrontofficeComponent,
    AppointmentComponent,    
    DoctorViewAppointmentsForDayFormComponent,
    LabreportComponent,
    LabtechnicianComponent,
    TestComponent,
    TestdetailsComponent,
    ViewtestdetailsComponent,
    GetreportComponent,
    PatientRegisterHComponent,
    DoctorListComponent,
    DoctorViewLabreportByDateComponent,
    DoctorViewLabreportByIdComponent,
    DoctorsComponent,
    PatientPrescriptionHistoryComponent,
    PatientLabHistoryComponent,
    AddPrescriptionComponent,
    PatientViewByIdHComponent,
    ViewTestHComponent,
    ViewlabtechnicianhComponent,
    TechnicianhomepageComponent,
    DoctorComponent,
    AppointmentListComponent,
    AddLoginComponent,
    AppointmentByDateComponent,
    TestlistTOneComponent,
    EditStaffComponent,
    AppointmentByDateComponent,
    GenerateBillGetidComponent,
    BillTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule    
  ],
  
    
  providers: [LabreportService, 
     LabtechnicianService, TestService, 
    TestdetailsService,AuthService,TestlisthService, AuthGuard, DoctorService, 
     ,PatientRegisterHService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})


export class AppModule { }
