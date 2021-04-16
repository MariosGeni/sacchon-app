import { AdviceListComponent } from './advice-list/advice-list.component';
import { AdviceInsertComponent } from './advice-insert/advice-insert.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@NgModule({
    declarations: [
        AdviceListComponent,
        AdviceInsertComponent
    ],
    imports: [
        CommonModule
    ]
})

export class AdviceModule { }