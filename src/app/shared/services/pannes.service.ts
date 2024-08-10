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

}
