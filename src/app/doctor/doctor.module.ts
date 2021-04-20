import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor/doctor.component';
import { AvailablePatientsComponent } from './doctor/available-patients/available-patients.component';
import { MyPatientsComponent } from './doctor/my-patients/my-patients.component';
import { MyPatientsDataComponent } from './doctor/my-patients/my-patients-data/my-patients-data.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DoctorComponent,
    MyPatientsComponent,
    AvailablePatientsComponent,
    AppRoutingModule,
    MyPatientsDataComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    DoctorComponent,
    MyPatientsComponent,
    AvailablePatientsComponent,
    AppRoutingModule,
    MyPatientsDataComponent
  ]
})
export class DoctorModule { }
