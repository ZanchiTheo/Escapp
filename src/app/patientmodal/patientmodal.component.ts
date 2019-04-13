import { Component, Inject } from '@angular/core';
import { Patient } from '../patient';
import { Chart } from 'chart.js';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PatientdatasService } from '../patientdatas.service';

@Component({
  selector: 'app-patientmodal',
  templateUrl: './patientmodal.component.html',
  styleUrls: ['./patientmodal.component.scss']
})
export class PatientModalComponent {

  private init: boolean;

  private patientID: number;
  private patients: Patient[];
  private patient: Patient = null;
  public visible = false;   
  public visibleAnimate = false; 

  private dateArray = [];
  private temperatureArray = [];
  private pressionArray = [];
  private humiditeArray = [];

  private temphumiChart = [];
  private pressureChart = [];
 
  constructor(private patientdatasservice: PatientdatasService, public dialogRef: MatDialogRef<PatientModalComponent>, @Inject(MAT_DIALOG_DATA) public data: number) {
    this.patientID = data;
    this.init = false;
    console.log("!!!!! construct patient : " + data + "!!!!!");
  }

  ngOnInit() {
    this.setPatient(this.patientID);
    this.init = true;
    this.setPatientArrays();
    this.setUpCharts();
  }

  setPatient(id: number) {
    this.patientdatasservice.currentPatientsList.subscribe(patients => {
      this.patients = patients;
      console.log("----- patient modal ----- subscribe : ");
      console.log(this.patients);
    });
    this.patients.forEach(patient => {
      patient.id == id ? this.patient = patient : this.patient = this.patient;
    });
    console.log("!!!!! patient cliqué : ");
    console.log(this.patient);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setPatientArrays() {
    this.temperatureArray = [];
    this.pressionArray = [];
    this.humiditeArray = [];
    this.dateArray = [];

    this.patient.donnees.forEach(donnee => {
      this.temperatureArray.push(donnee.temperature);
      this.pressionArray.push(donnee.pression);
      this.humiditeArray.push(donnee.humidite);
      this.dateArray.push(donnee.date);
    });

    console.log("temperature array : " + this.temperatureArray);
    console.log("pression array : " + this.pressionArray);
    console.log("humidite array : " + this.humiditeArray);
    console.log("humidite array : " + this.dateArray);
  }

  setUpCharts() {
    this.temphumiChart = new Chart('temphumiCanvas', {
      type: 'bar',
      data: {
        labels: this.dateArray,
        datasets: [
          {
            label: "Temperature en °C",
            backgroundColor: "#3e95cd",
            data: this.temperatureArray
          }, {
            label: "Humidite en %",
            backgroundColor: "#8e5ea2",
            data: this.humiditeArray
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Mesures de température et humidité du patient'
        }, scales: {
          yAxes: [{
              ticks: {
                  suggestedMin: 0,
              }
          }]
        }
      }
    });

    this.pressureChart = new Chart('pressureCanvas', {
      type: 'line',
      data: {
        labels: this.dateArray,
        datasets: [
          {
            fill: false,
            label: "Pression",
            backgroundColor: "#3e95cd",
            data: this.pressionArray
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Mesures de pression du patient'
        }, scales: {
          yAxes: [{
              ticks: {
                  suggestedMin: 0,
              }
          }]
        }
      }
    });
  }

} 
