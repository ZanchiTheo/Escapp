import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientdatasService } from '../patientdatas.service';

@Component({
  selector: 'app-datagestion',
  templateUrl: './datagestion.component.html',
  styleUrls: ['./datagestion.component.scss']
})
export class DatagestionComponent implements OnInit {

  patients: Patient[] = [];

  constructor(private patientdatasservice: PatientdatasService) {  }

  ngOnInit() {
    this.patientdatasservice.currentPatientsList.subscribe(patients => {
      this.patients = patients;})
  }



}
