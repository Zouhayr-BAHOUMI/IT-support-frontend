import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipement } from 'src/app/interfaces/equipement';

@Injectable({
  providedIn: 'root'
})
export class EquipementsService {

  private apiUrl = 'http://localhost:8082/admin/gestion-equipement';

  constructor(private http: HttpClient) { }

  public getEquipements(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.apiUrl}/`);
  }

  public addEquipement(equipement: Equipement): Observable<Equipement> {
    return this.http.post<Equipement>(`${this.apiUrl}/add`, equipement, { responseType: 'text' as 'json' });
  }

  public getEquipementById(idEquipement: number): Observable<Equipement> {
    return this.http.get<Equipement>(`${this.apiUrl}/idEquipement?idEquipement=${idEquipement}`);
  }
}
