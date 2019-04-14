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

export function getBradenScore(p:Patient){
let bradenscore=0;
if(p.donnees[p.donnees.length-1].temperature>25){
    bradenscore+=1
}
if(p.donnees[p.donnees.length-1].humidite>25){
    bradenscore+=1
}
if(p.donnees[p.donnees.length-1].pression>25){
    bradenscore+=1
}
bradenscore+=p.donneeManuelle.activite;
bradenscore+=p.donneeManuelle.friction;
bradenscore+=p.donneeManuelle.nutrition;
p.bradenScore=bradenscore;
return bradenscore;
}