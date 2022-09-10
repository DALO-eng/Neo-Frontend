import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    { logo: 'chair', mensaje: 'Colchón' },
    { logo: 'workspaces', mensaje: 'Bolsillos' },
    { logo: 'logout', mensaje: 'Salir' },
  ];
  actionButton: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getAction(action: string | null) {
    this.actionButton = action;
    if (this.actionButton === 'Salir') {
      this.router.navigate(['/home']);
    }
  }
}
