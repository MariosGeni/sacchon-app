import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DoctorInsertComponent } from './doctor-insert/doctor-insert.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';


@NgModule({
    declarations: [
        DoctorListComponent,
        DoctorInsertComponent
    ],
    imports: [
        CommonModule
    ]
})

export class DoctorModule { }