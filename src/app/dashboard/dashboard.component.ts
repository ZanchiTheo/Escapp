import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private patients: Patient[] = [];
  
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getPatients().subscribe(data => this.patients = data.patients);
  }

  getPatients(): Observable<any>{
    return this.http.get("/assets/data/patients.json");
  }

}
