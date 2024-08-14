import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipement } from 'src/app/interfaces/equipement';
import { Panne } from 'src/app/interfaces/panne';
import { Ticket } from 'src/app/interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private apiUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) { }

  public createTicket(ticket: Ticket): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/user/tickets/add`, ticket, { responseType: 'text' as 'json' });
  }

  public getEquipementUtilisateur(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.apiUrl}/user/equipements`);
  }

  public getPannes(): Observable<Panne[]> {
    return this.http.get<Panne[]>(`${this.apiUrl}/user/pannes`);
  }

  public getTicketsUtilisateur(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}/user/tickets`);
  }
}
