import { MediDataListComponent } from './medi-data-list/medi-data-list.component';
import { MediDataInsertComponent } from './medi-data-insert/medi-data-insert.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        MediDataInsertComponent,
        MediDataListComponent
    ],
    imports: [
        CommonModule
    ]
})

export class MediDataModule { }