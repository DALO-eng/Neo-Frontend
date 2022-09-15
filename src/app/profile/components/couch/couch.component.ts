import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionsService } from 'src/app/services/actions/actions.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-couch',
  templateUrl: './couch.component.html',
  styleUrls: ['./couch.component.scss'],
})
export class CouchComponent implements OnInit {
  @Input() id: number | undefined;
  @Output() info = new EventEmitter<string | null>();

  valorColchon: number;
  form: FormGroup;
  constructor(
    private actionService: ActionsService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.actionService.getColchon(this.id).subscribe((valor) => {
      this.valorColchon = valor;
    });
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      id_cuenta: [this.id, Validators.required],
      nombre: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(1000)]],
    });
  }

  sacarColchon() {
    if (this.form.valid) {
      let sacarColchon = this.form.value;
      sacarColchon.monto = sacarColchon.monto * -1;
      this.actionService.transaccionClochon(sacarColchon).subscribe((res) => {
        this.snackBar.open(res, 'Ok', {
          duration: 4000,
        });
        if (res === 'Exito') {
          this.info.emit('Completed');
        }
      });
    }
  }

  guardarColchon() {
    if (this.form.valid) {
      this.actionService
        .transaccionClochon(this.form.value)
        .subscribe((res) => {
          this.snackBar.open(res, 'Ok', {
            duration: 4000,
          });
          if (res === 'Exito') {
            this.info.emit('Completed');
          }
        });
    }
  }

  return() {
    this.info.emit(null);
  }
}
