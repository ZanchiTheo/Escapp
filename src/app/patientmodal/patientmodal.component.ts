import { Component, Inject } from '@angular/core';
import { Patient } from '../patient';
import { Chart } from 'chart.js';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-patientmodal',
  templateUrl: './patientmodal.component.html',
  styleUrls: ['./patientmodal.component.scss']
})
export class PatientModalComponent {

  private init: boolean;

  private patient: Patient = null;
  public visible = false;   
  public visibleAnimate = false; 

  private temperatureArray = [];
  private pressionArray = [];
  private humiditeArray = [];

  private temperatureChart = [];
  private pressionChart = [];
  private humiditeChart = [];
 
  constructor(public dialogRef: MatDialogRef<PatientModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Patient) {
    this.patient = data;
    this.init = false;
  }

  ngOnInit() {
    this.init = true;
    this.setPatientArrays();
    this.setUpCharts();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setPatientArrays() {
    this.temperatureArray = [];
    this.pressionArray = [];
    this.humiditeArray = [];
    console.log(this.temperatureArray);

    this.patient.donnees.forEach(donnee => {
      this.temperatureArray.push(donnee.temperature);
      this.pressionArray.push(donnee.pression);
      this.humiditeArray.push(donnee.humidite);
    });
  }

  setUpCharts() {
    this.temperatureChart = new Chart('temperatureCanvas', {
      type: 'line',
      data: {
        datasets: [
          {
            data: this.temperatureArray,
            borderColor: "#3cba9f",
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.pressionChart = new Chart('pressionCanvas', {
      type: 'line',
      data: {
        datasets: [
          {
            data: this.pressionArray,
            borderColor: "#3cba9f",
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.humiditeChart = new Chart('humiditeCanvas', {
      type: 'line',
      data: {
        datasets: [
          {
            data: this.humiditeArray,
            borderColor: "#3cba9f",
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

} 
