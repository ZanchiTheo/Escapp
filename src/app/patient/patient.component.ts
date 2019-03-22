import { Component, OnInit, Input } from '@angular/core';
import { Patient } from "../Patient"

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.sass']
})
export class PatientComponent implements OnInit {

  patient: Patient;

  @Input() set patientDatas(value: Patient) { this.patient = value; }  

  constructor() { }

  ngOnInit() { }

}