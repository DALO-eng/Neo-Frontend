import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionsService } from 'src/app/services/actions/actions.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.scss'],
})
export class SacarComponent implements OnInit {
  @Input() id: number | undefined;
  @Output() info = new EventEmitter<string | null>();

  form: FormGroup;

  constructor(
    private actionService: ActionsService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      id_cuenta: [this.id, Validators.required],
      nombre: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(1000)]],
    });
  }

  retirar() {
    if (this.form.valid) {
      this.actionService.retirar(this.form.value).subscribe((res) => {
        this.snackBar.open(res, 'Ok', {
          duration: 4000,
        });
        if (res === 'Transaccion exitosa, retire su dinero de la ranura') {
          this.info.emit('Completed');
        }
      });
    }
  }

  return() {
    this.info.emit(null);
  }
}
