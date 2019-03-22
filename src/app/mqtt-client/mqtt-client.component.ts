import { Component, OnInit } from "@angular/core";
import { Paho } from "ng2-mqtt";

@Component({
  selector: "app-mqtt-client",
  templateUrl: "./mqtt-client.component.html",
  styleUrls: ["./mqtt-client.component.sass"]
})
export class MqttClientComponent implements OnInit {
  private _client: Paho.MQTT.Client;
  mesures: {};

  public constructor() {
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
    };

    this._client.connect({ onSuccess: this.onConnected.bind(this) });
  }

  private onConnected(): void {
    console.log("Connected to broker.");
    this._client.subscribe("escapp/mesures", 1);
  }
  ngOnInit() {}
}
