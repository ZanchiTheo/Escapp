import { Component, OnInit,Input } from '@angular/core';
import { Patient } from "../patient"
@Component({
  selector: 'app-patient-gestion',
  templateUrl: './patient-gestion.component.html',
  styleUrls: ['./patient-gestion.component.scss']
})
export class PatientGestionComponent implements OnInit {

  patient: Patient;
  nutrition: string[] = ['Très Pauvre', 'Probablement insuffisante', 'Correcte', 'Excellente'];
  activite: string[] = ['Alité', 'Confiné au fauteuil', 'Marche occasionnellement', 'Marche fréquemment'];
  friction:string []=["Problème préent","Problème potentiel","Pas de problème apparent"]

  private patientDataChart = [];

  @Input() set patientDatas(value: Patient) { this.patient = value; }  

  constructor() { }

  ngOnInit() {
    
  }


}
