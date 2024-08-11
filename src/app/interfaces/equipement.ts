import { TypeEquipement } from "../enums/type-equipement";
import { Utilisateur } from "./utilisateur";

export interface Equipement {
    id: number;
    imageUrl: string;
    nom: string;
    status: string; 
    type: TypeEquipement; 
    dateAchetee: string; 
    utilisateur?: Utilisateur;
}
