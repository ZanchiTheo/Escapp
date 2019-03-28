import { Component, OnInit } from "@angular/core";
import { Paho } from "ng2-mqtt";
import { Patient } from './patient';
import { PatientdatasService } from './patientdatas.service';
import data from '../assets/data/patients.json'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

  private _client: Paho.MQTT.Client;
  mesures: {};
  title = "escapp";
  patients: Patient[] = [];

  public constructor(private patientdatasservice: PatientdatasService) {
    this._client = new Paho.MQTT.Client(
      "broker.mqttdashboard.com",
      8000,
      "clientId"
    );

    this._client.onConnectionLost = (responseObject: Object) => {
      console.log("Connection lost.");
    };

    this._client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log("Message arrived." + message.payloadString);
      this.mesures = message.payloadString;
      this.patientdatasservice.changePatients(this.patients);
      console.log("----- app ----- on init : ");
      console.log(this.patients);
    };

    this._client.connect({ onSuccess: this.onConnected.bind(this) });
  }

  ngOnInit(): void {
    this.patients = data.patients;
    console.log("----- app ----- on init : ");
    console.log(this.patients);
    this.patientdatasservice.changePatients(this.patients);
    console.log("----- app ----- data updated : ");
  }

  private onConnected(): void {
    console.log("Connected to broker.");
    this._client.subscribe("escapp/mesures", 1);
  }
}
