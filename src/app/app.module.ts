import { AdviceModule } from './advice/advice.module';
import { DoctorModule } from './doctor/doctor.module';
import { MediDataModule } from './medi-data/medi-data.module';
import { PatientModule } from './patient/patient.modules';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { MediDataComponent } from './medi-data/medi-data.component';
import { AdviceComponent } from './advice/advice.component';
import { AdviceListComponent } from './advice/advice-list/advice-list.component';
import { AdviceInsertComponent } from './advice/advice-insert/advice-insert.component';
import { MediDataListComponent } from './medi-data/medi-data-list/medi-data-list.component';
import { MediDataInsertComponent } from './medi-data/medi-data-insert/medi-data-insert.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorInsertComponent } from './doctor/doctor-insert/doctor-insert.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientInsertComponent } from './patient/patient-insert/patient-insert.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    DoctorComponent,
    MediDataComponent,
    AdviceComponent,
    AdviceListComponent,
    AdviceInsertComponent,
    MediDataListComponent,
    MediDataInsertComponent,
    DoctorListComponent,
    DoctorInsertComponent,
    PatientListComponent,
    PatientInsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DoctorModule,
    AdviceModule,
    MediDataModule,
    PatientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
