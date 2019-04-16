import { Component, OnInit, Input } from '@angular/core';
import { Patient,} from "../patient"
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


  getBradenScore(){
    let bradenScore=0;
    bradenScore+=this.patient.donneeManuelle.activite;
    bradenScore+=this.patient.donneeManuelle.friction;
    bradenScore+=this.patient.donneeManuelle.nutrition;
    if(this.patient.donnees[this.patient.donnees.length-1].temperature<30){
      bradenScore+=1;
    }
    if(this.patient.donnees[this.patient.donnees.length-1].pression<30){
      bradenScore+=1;
    }
    if(this.patient.donnees[this.patient.donnees.length-1].humidite<30){
      bradenScore+=1;
    }
    return bradenScore

  }
  

}
