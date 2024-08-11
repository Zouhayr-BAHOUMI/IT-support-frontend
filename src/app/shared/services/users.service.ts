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

  public getUsersByRole(role:string): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/admin/gestion-users/userRole?role=${role}`);
  }

  registerUser(registerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register-user`, registerData);
  }

  registerTechnician(registerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register-technicein`, registerData);
  }
}
