import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8082/';

  constructor(private http : HttpClient) { }

  
  login(loginRequest : any): Observable<any>{
    return this.http.post(this.apiUrl +'user/login', loginRequest)
  }
}
