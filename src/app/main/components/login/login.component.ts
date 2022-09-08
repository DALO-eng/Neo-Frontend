import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formBuild();
  }

  formBuild() {
    this.loginForm = this.fb.group({
      numero: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
    })
  }

  login() {
      console.log(this.loginForm.value);
  }
}
