import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panne } from 'src/app/interfaces/panne';

@Injectable({
  providedIn: 'root'
})
export class PannesService {

  private apiUrl = 'http://localhost:8082';

  constructor(private http:HttpClient) { }

  public getPannes (): Observable<Panne[]>{
    return this.http.get<Panne[]>(`${this.apiUrl}/admin/gestion-panne/`);
  }

  public addPanne(panne: Panne): Observable<Panne> {
    return this.http.post<Panne>(`${this.apiUrl}/admin/gestion-panne/add`, panne, { responseType: 'text' as 'json' });
  }

  public getPanneById(idPanne: number): Observable<Panne> {
    return this.http.get<Panne>(`${this.apiUrl}/admin/gestion-panne/idPanne?idPanne=${idPanne}`);
  }

  public updatePanne(idPanne: number, panne: Panne): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update/${idPanne}`, panne);
  }

  public deletePanne(idPanne: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${idPanne}`);
  }

}
