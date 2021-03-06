import { Component, OnInit } from '@angular/core';
import { AvailablePatients } from './available-patients';
import { AvailablePatientsService } from './available-patients.service';

@Component({
  selector: 'app-available-patients',
  templateUrl: './available-patients.component.html',
  styleUrls: ['./available-patients.component.scss']
})
export class AvailablePatientsComponent implements OnInit {

  constructor(private availablePatientsService:AvailablePatientsService) { }
  
  availablePatients!: AvailablePatients[];

  ngOnInit(): void {
  }
  getAvailablePatients(){
    this.availablePatients = [];
    this.availablePatientsService.getAvailablePatients().subscribe(data =>{
      this.availablePatients = data ;
      console.log(this.availablePatients);
    });
  }

  
}
