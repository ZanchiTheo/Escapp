import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientdatasService } from '../patientdatas.service';
import { MatDialog } from '@angular/material';
import { PatientModalComponent } from '../patientmodal/patientmodal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private patients: Patient[] = [];
  
  constructor(private patientdatasservice: PatientdatasService, private dialog: MatDialog) { 

  }

  openDialog(p: Patient): void {
    const dialogRef = this.dialog.open(PatientModalComponent, {
      width: '750',
      data: p.id
    });
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
