import { Component } from '@angular/core';
import { Patient } from '../patient';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-patientmodal',
  templateUrl: './patientmodal.component.html',
  styleUrls: ['./patientmodal.component.scss']
})
export class PatientModalComponent {

  private patient: Patient = null;
  public visible = false;   
  public visibleAnimate = false; 

  private temperatureArray = [];
  private pressionArray = [];
  private humiditeArray = [];

  private temperatureChart = [];
  private pressionChart = [];
  private humiditeChart = [];
 
  public show(p: Patient): void {   
    this.patient = p;
    this.setPatientArrays();
    this.setUpCharts();
    this.visible = true;     
    setTimeout(() => this.visibleAnimate = true, 100);   
  } 

  setPatientArrays() {
    this.temperatureArray = [];
    this.pressionArray = [];
    this.humiditeArray = [];

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
 
  public hide(): void {     
    this.visibleAnimate = false;     
    setTimeout(() => this.visible = false, 300);
  } 
 
  public onContainerClicked(event: MouseEvent): void {     
    if ((<HTMLElement>event.target).classList.contains('modal')) {       
      this.hide();     
    }   
  } 
  
} 
