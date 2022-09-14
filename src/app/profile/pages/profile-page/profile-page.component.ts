import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mainInfo } from 'src/app/Models/sign';

import { LoginRegisterService } from 'src/app/services/login-register/login-register.service';

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
  user: mainInfo | null;

  constructor(private router: Router, private loginService: LoginRegisterService) {}

  ngOnInit(): void {
    this.loginService.user$.subscribe((user) => {
      this.user = user;
    })
  }

  getAction(action: string | null) {
    this.actionButton = action;
    if (this.actionButton === 'Salir') {
      this.router.navigate(['/home']);
    }
  }
}
