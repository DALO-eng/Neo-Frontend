import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRegisterService } from 'src/app/services/login-register/login-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginRegisterService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.formBuild();
  }

  formBuild(): void {
    this.loginForm = this.fb.group({
      numero: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe((res) => {
        if (res.id_cuenta) {
          this.snackBar.open(`Bienvenido ${res.nombre}`, 'Ok', {
            duration: 4000,
          });
          this.loginService.user.next(res);
          this.router.navigate(['/profile']);
        } else {
          this.snackBar.open(res, 'Ok', {
            duration: 4000,
          });
        }
      });
    }
  }
}
