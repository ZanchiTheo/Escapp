export class Patient {
    id: number;
    name: string;
    age: number;
    poids: number;
    taille: number;
    bradenScore: number;
    patientStatus: string;
    donnees: donneePatient[];
    donneeManuelle:donneeManuelle;
}

export class donneeManuelle{
    nutrition:number;
    activite:number;
    friction:number;
}

export class donneePatient {
    temperature: number;
    humidite: number;
    pression: number;

    constructor(temperature: number, humidite: number, pression: number) {
        this.humidite = humidite;
        this.temperature = temperature;
        this.pression = pression;
    }

}

export class Mesure {
    clientid: number;
    temperature: number;
    humidite: number;
    pression: number;
}