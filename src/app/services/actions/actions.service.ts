import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActionsService {
  constructor(private http: HttpClient) {}

  send(info: any) {
    return this.http.post<any>(`${environment.API_URL}/enviar/`, info);
  }

  bolsillo(id: any) {
    return this.http.get<any>(`${environment.API_URL}/bol/${id}`);
  }

  consignar(info: any) {
    return this.http.put<any>(`${environment.API_URL}/consignacion/`, info);
  }

  historial(id: any) {
    return this.http.get<any>(`${environment.API_URL}/historial/${id}`);
  }
}
