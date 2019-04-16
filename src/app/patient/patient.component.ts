import { Component, OnInit, Input } from '@angular/core';
import { Patient } from "../patient"
import { Chart } from 'chart.js';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patient: Patient;

  private patientDataChart = [];

  @Input() set patientDatas(value: Patient) { this.patient = value; }  

  constructor() { }

  ngOnInit() {
    
  }

}
