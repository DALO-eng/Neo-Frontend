import { Component, OnInit } from '@angular/core';
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
    private loginService: LoginRegisterService
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
      console.log(this.loginForm.value);
      this.loginService.login(this.loginForm.value).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
