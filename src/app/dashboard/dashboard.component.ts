import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientdatasService } from '../patientdatas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private patients: Patient[] = [];
  
  constructor(private patientdatasservice: PatientdatasService) { 

  }

  ngOnInit(): void {
    this.patientdatasservice.currentPatientsList.subscribe(patients => {
      this.patients = patients;
      console.log("----- dashboard ----- subscribe : ");
      console.log(this.patients);
    });
    
  }

  getPatientsFromService(): any {
    
  }

}
