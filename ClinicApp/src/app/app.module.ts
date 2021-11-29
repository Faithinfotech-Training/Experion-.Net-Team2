import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent
  ],
  imports: [
    BrowserModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
