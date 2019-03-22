import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  private patients = [];
  
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getPatients().subscribe(data => this.patients = data);
  }

  getPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>("/assets/data/patients.json");
  }

}
