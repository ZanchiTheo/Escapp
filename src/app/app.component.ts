import { Component,OnInit } from "@angular/core";
import { Paho } from "ng2-mqtt";
import { Patient, Mesure, donneePatient } from './patient';
import { PatientdatasService } from './patientdatas.service';
import data from '../assets/data/patients.json'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

  private _client: Paho.MQTT.Client;
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

    //Reception du message MQTT
    this._client.onMessageArrived = (message: Paho.MQTT.Message) => {
      //Declaration d'une variable temporaire
      let mesure: Mesure;
      //Parsing et stockage du message dans la variable temporaire
      mesure = JSON.parse(message.payloadString);
      console.log("----- app ----- on message recevied : ");
      console.log(mesure);

      //la liste des patients doit avoir été initialisée
      if(this.patients != []) {
        //Ajout de la mesure dans les mesures du patient associé
        this.addDonneeToPatient(mesure);
        //Envoie de la liste des patients sur le service
        this.patientdatasservice.changePatients(this.patients);
      }
    };

    this._client.connect({ onSuccess: this.onConnected.bind(this) });
  }

  ngOnInit(): void {
    //Récupération de la liste des clients depuis un fichier json
    this.patients = data.patients;
    console.log("----- app ----- on init : ");
    console.log(this.patients);
    //Envoie de la liste des patients sur le service
    this.patientdatasservice.changePatients(this.patients);
  }

  private onConnected(): void {
    console.log("Connected to broker.");
    this._client.subscribe("escapp/mesures", 1);
  }

  addDonneeToPatient(mesure: Mesure) {
    this.patients.forEach(patient => {
      if (patient.id == parseInt(mesure.clientid+'', 10)) {
        patient.donnees.push(new donneePatient(mesure.temperature, mesure.humidite, mesure.pression));
      }
    });
  }
}
