import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide: boolean = true;
  todayDate: Date;
  maxDateBirth: Date;

  tipoDocumento = [
    { value: 1, viewValue: 'Cédula de ciudadania' },
    { value: 2, viewValue: 'Cédula de extranjeria' },
    { value: 3, viewValue: 'Pasaporte' },
  ];

  constructor(private fb: FormBuilder) {
    this.todayDate = new Date();
    this.maxDateBirth = new Date(
      this.todayDate.getFullYear() - 18,
      this.todayDate.getMonth(),
      this.todayDate.getDate()
    );
  }

  ngOnInit(): void {
    this.formBuild();
  }

  formBuild() {
    this.registerForm = this.fb.group({
      cuenta: this.fb.group({
        celular: ['', [Validators.required, Validators.pattern('^3[0-9]{9}$')]],
        contrasena: [
          '',
          [Validators.required, Validators.pattern('^[0-9]{4}$')],
        ],
        confContrasena: [
          '',
          [Validators.required, Validators.pattern('^[0-9]{4}$')],
        ],
      }),
      cliente: this.fb.group({
        nombre: ['', [Validators.required]],
        correo: ['', [Validators.required, Validators.email]],
        nacimiento: ['', [Validators.required]],
      }),
      documento: this.fb.group({
        tipo: [1, [Validators.required]],
        numero: ['', [Validators.required]],
        expedicion: ['', [Validators.required]],
      }),
    });
  }

  greaterThan18(date: Date) {
    if (date > this.maxDateBirth) {
      this.registerForm.get('cliente.nacimiento')?.setErrors({
        menorEdad: true,
      });
    } else {
      this.registerForm.get('cliente.nacimiento')?.setErrors({
        menorEdad: null,
      });
      this.registerForm.get('cliente.nacimiento')?.updateValueAndValidity();
    }
  }

  confirmPassword() {
    if (
      this.registerForm.get('cuenta.contrasena')?.value !==
      this.registerForm.get('cuenta.confContrasena')?.value
    ) {
      console.log('No');
      this.registerForm.get('cuenta.contrasena')?.setErrors({
        noCoincide: true,
      });
      this.registerForm.get('cuenta.confContrasena')?.setErrors({
        noCoincide: true,
      });
    } else {
      this.registerForm.get('cuenta.contrasena')?.setErrors({
        noCoincide: null,
      });
      this.registerForm.get('cuenta.confContrasena')?.setErrors({
        noCoincide: null,
      });
      this.registerForm.get('cuenta.contrasena')?.updateValueAndValidity();
      this.registerForm.get('cuenta.confContrasena')?.updateValueAndValidity();
    }
  }

  register() {
    if(this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
