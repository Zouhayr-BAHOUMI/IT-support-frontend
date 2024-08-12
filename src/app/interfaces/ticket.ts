import { StatusTicket } from "../enums/status-ticket";
import { Equipement } from "./equipement";
import { Panne } from "./panne";
import { Technicien } from "./technicien";
import { Utilisateur } from "./utilisateur";

export interface Ticket {
    idTicket: number;
    dateCreation: string; 
    description: string;
    status: StatusTicket; 
    utilisateur: Utilisateur; 
    equipement: Equipement; 
    panne: Panne; 
    technicien?: Technicien;
}
