import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActionsService } from 'src/app/services/actions/actions.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss'],
})
export class SendMoneyComponent implements OnInit {
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
      envia: this.fb.group({
        id_cuenta: [this.id, Validators.required],
        nombre: ['', Validators.required],
      }),
      recibe: this.fb.group({
        celular: ['', [Validators.required, Validators.pattern('^3[0-9]{9}$')]],
        nombre: ['', Validators.required],
      }),
      monto: ['', [Validators.required, Validators.min(1000)]],
    });
  }

  enviar() {
    if (this.form.valid) {
      this.actionService.send(this.form.value).subscribe((res) => {
        this.snackBar.open(res, 'Ok', {
          duration: 4000,
        });
        if (res === 'Transaccion exitosa.') {
          this.info.emit('Completed');
        }
      });
    }
  }

  return() {
    this.info.emit(null);
  }
}
