import { Utilisateur } from "./utilisateur";

export interface Equipement {
    id: number;
    imageUrl: string;
    nom: string;
    status: string; 
    type: string; 
    dateAchetee: string; 
    utilisateur: Utilisateur;
}
