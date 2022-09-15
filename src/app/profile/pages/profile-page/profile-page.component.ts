import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../components/delete/delete.component';
import { LoginRegisterService } from 'src/app/services/login-register/login-register.service';
import { ActionsService } from 'src/app/services/actions/actions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  buttons = [
    { logo: 'currency_exchange', mensaje: 'Mandar dinero' },
    { logo: 'price_check', mensaje: 'Consignar' },
    { logo: 'arrow_circle_down', mensaje: 'Retirar' },
    { logo: 'history', mensaje: 'Historial' },
    { logo: 'chair', mensaje: 'Colchón' },
    { logo: 'workspaces', mensaje: 'Bolsillos' },
    { logo: 'logout', mensaje: 'Salir' },
    { logo: 'delete_forever', mensaje: 'Borrar Cuenta' },
  ];
  actionButton: string | null = null;
  user: any;

  constructor(
    private router: Router,
    private loginService: LoginRegisterService,
    public dialogo: MatDialog,
    private snackBar: MatSnackBar
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
        this.router.navigate(['/home']);
      } else if (this.actionButton === 'Borrar Cuenta') {
        this.actionButton = null;
        this.mostrarDialogo();
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

  mostrarDialogo(): void {
    this.dialogo
      .open(DeleteComponent, {
        data: `¿Estás seguro que quieres eliminar esta cuenta?`,
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.router.navigate(['/home']);
        }
      });
  }
}
