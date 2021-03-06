import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';



import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatCardModule,
  MatRadioModule
} from "@angular/material";

import { PatientComponent } from "./patient/patient.component";
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "./routing/routing.module";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DatagestionComponent } from "./datagestion/datagestion.component";

import { PatientdatasService } from './patientdatas.service';
import { PatientModalComponent } from './patientmodal/patientmodal.component';
import { PatientGestionComponent } from './patient-gestion/patient-gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    NavComponent,
    DashboardComponent,
    DatagestionComponent,
    PatientModalComponent,
    PatientGestionComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule, 
    MatCardModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    MatRadioModule
  ],

  providers: [PatientdatasService],

  bootstrap: [AppComponent],

  entryComponents: [
    DashboardComponent,
    PatientModalComponent
  ]
})
export class AppModule {}
