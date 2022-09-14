import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login, mainInfo } from 'src/app/Models/sign';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  user =  new BehaviorSubject<mainInfo | null>(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient) { }

  register(user: any) {
    return this.http.post<any>(`${environment.API_URL}/registro/`, user);
  }

  login(user: Login) {
    return this.http.post<any>(`${environment.API_URL}/login/`, user);
  }
}
