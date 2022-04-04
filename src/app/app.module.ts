import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { PatienthomepageComponent } from './patienthomepage/patienthomepage.component';
import { DoctorhomepageComponent } from './doctorhomepage/doctorhomepage.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { CreatedoctorComponent } from './createdoctor/createdoctor.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CreateappoinmentComponent } from './createappoinment/createappoinment.component';
import { CreatefeedbackComponent } from './createfeedback/createfeedback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    DoctorComponent,
    PatientComponent,
    PatienthomepageComponent,
    DoctorhomepageComponent,
    CreatepatientComponent,
    CreatedoctorComponent,
    DoctordashboardComponent,
    PatientdashboardComponent,
    AdmindashboardComponent,
    CreateappoinmentComponent,
    CreatefeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
