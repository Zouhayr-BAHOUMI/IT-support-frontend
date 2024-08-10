import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:8082';

  constructor(private http:HttpClient) { }

  public getUsers (): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/admin/gestion-users/all`);
  }
}
