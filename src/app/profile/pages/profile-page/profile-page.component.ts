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
    { logo: 'arrow_circle_down', mensaje: 'Consignar' },
    { logo: 'history', mensaje: 'Historial' },
    { logo: 'chair', mensaje: 'Colchón' },
    { logo: 'workspaces', mensaje: 'Bolsillos' },
    { logo: 'logout', mensaje: 'Salir' },
  ];
  actionButton: string | null = null;
  user: any;

  constructor(
    private router: Router,
    private loginService: LoginRegisterService
  ) {}

  ngOnInit(): void {
    this.login();
  }

  getAction(action: string | null) {
    if (action === 'Completed') {
      this.login();
      this.actionButton = null;
    } else {
      this.actionButton = action;
      if (this.actionButton === 'Salir') {
        this.loginService.user.next(null);
        console.log('Salio');
        this.router.navigate(['/home']);
      }
    }
  }

  login() {
    this.loginService.user$.subscribe((user) => {
      this.loginService.login(user).subscribe((credentials) => {
        this.user = credentials;
      });
    });
  }
}
