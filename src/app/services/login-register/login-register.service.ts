import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private http: HttpClient) { }

  register(user: any) {
    return this.http.post<any>(`${environment.API_URL}/registro/`, user);
  }

  login(user: any) {
    return this.http.get<any>(`${environment.API_URL}/login/`, user);
  }
}
