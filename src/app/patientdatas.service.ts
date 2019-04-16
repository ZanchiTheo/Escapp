import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientdatasService {

  private patientsListSource = new BehaviorSubject<Patient[]>([]);
  currentPatientsList = this.patientsListSource.asObservable();

  constructor() { 
    
  }

  ngOnInit(): void {

  }

  changePatients(patients: Patient[]) {
    this.patientsListSource.next(patients);
    //console.log("----- patientdataservice ----- changePatients : ");
    //console.log(patients);
  }
  
}
