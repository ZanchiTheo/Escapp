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
  private patientCpt: number = 0;

  private patientDataChart = [];

  @Input() set patientDatas(value: Patient) { this.patient = value; }  

  constructor() { }

  ngOnInit() {
    setInterval(() => { 
      this.bradenScoreTreatment();
    }, 1000); 
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
    return bradenScore;
  }

  bradenScoreTreatment() {
    this.patient.bradenScore = this.getBradenScore();

      if(this.patient.bradenScore < 6) {
        (this.patientCpt == 20) ? (this.patientCpt = 20) : (this.patientCpt ++);
      }
      else if(this.patient.bradenScore >= 6) {
        (this.patientCpt == 0) ? (this.patientCpt = 0) : (this.patientCpt --); 
      }

      if(0 <= this.patientCpt && this.patientCpt < 5) {
        this.patient.patientStatus = "checked";
      }
      else if(5 <= this.patientCpt && this.patientCpt < 15) {
        this.patient.patientStatus = "warning";
      }
      else if(15 <= this.patientCpt && this.patientCpt <= 20 ) {
        this.patient.patientStatus = "alarm";
      }

      if(this.patient.id == 1) {
        //console.log("Patient " + this.patient.id + " : braden score : " + this.patient.bradenScore);
        //console.log("Patient " + this.patient.id + " : cpt : " + this.patientCpt);
      }  
  }
  

}
