import { PatientInsertComponent } from './patient-insert/patient-insert.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        PatientInsertComponent,
        PatientListComponent
    ],
    imports: [
        CommonModule
    ]
})

export class PatientModule { }