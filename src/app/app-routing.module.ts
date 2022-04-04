import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CreateappoinmentComponent } from './createappoinment/createappoinment.component';
import { CreatedoctorComponent } from './createdoctor/createdoctor.component';
import { CreatefeedbackComponent } from './createfeedback/createfeedback.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { DoctorhomepageComponent } from './doctorhomepage/doctorhomepage.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { PatienthomepageComponent } from './patienthomepage/patienthomepage.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'patient',component:PatientComponent},
  {path:'patienthome',component:PatienthomepageComponent},
  {path:'doctorhome',component:DoctorhomepageComponent},
  {path:'createpatient',component:CreatepatientComponent},
  {path:'createdoctor',component:CreatedoctorComponent},
  {path:'doctordashboard',component:DoctordashboardComponent},
  {path:'patientdashboard',component:PatientdashboardComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'createappoinment',component:CreateappoinmentComponent},
  {path:'createfeedback',component:CreatefeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
