import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private http: HttpClient) { }

  send (info : any) {
    return this.http.post<any>(`${environment.API_URL}/enviar/`, info)
  }
}
