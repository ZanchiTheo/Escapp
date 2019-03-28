export class Patient {
    id: number;
    name: string;
    age: number;
    poids: number;
    taille: number;
    bradenScore: number;
    patientStatus: string;
    donnees: donneePatient[];
}

export class donneePatient {
    temperature: number;
    humidite: number;
    pression: number;
}
