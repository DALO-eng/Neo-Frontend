import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  buttons = [
    { logo: 'currency_exchange', mensaje: 'Mandar dinero' },
    { logo: 'arrow_circle_down', mensaje: 'Sacar dinero' },
    { logo: 'history', mensaje: 'Historial' },
    { logo: 'logout', mensaje: 'Salir' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
