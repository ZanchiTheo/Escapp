import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-datagestion',
  templateUrl: './datagestion.component.html',
  styleUrls: ['./datagestion.component.scss']
})
export class DatagestionComponent implements OnInit {

  patients: Patient[] = [];

  constructor() {  }

  ngOnInit() {
    setInterval(() => { this.getPatientsFromService(); }, 5000); 
  }

  getPatientsFromService() {
    
  }

}
