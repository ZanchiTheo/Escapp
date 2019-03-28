import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";

import { PatientComponent } from "./patient/patient.component";
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "./routing/routing.module";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DatagestionComponent } from "./datagestion/datagestion.component";

import { PatientdatasService } from './patientdatas.service'

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    NavComponent,
    DashboardComponent,
    DatagestionComponent
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
    HttpClientModule,
    RoutingModule
  ],
  providers: [PatientdatasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
