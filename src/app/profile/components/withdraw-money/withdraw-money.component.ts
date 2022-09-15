import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ActionsService } from 'src/app/services/actions/actions.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-withdraw-money',
  templateUrl: './withdraw-money.component.html',
  styleUrls: ['./withdraw-money.component.scss'],
})
export class WithdrawMoneyComponent implements OnInit {
  @Output() info = new EventEmitter<string | null>();

  bolsillos: any;
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
      celular: ['', [Validators.required, Validators.pattern('^3[0-9]{9}$')]],
      monto: ['', [Validators.required, Validators.min(1000)]],
      nombre: ['', Validators.required],
    });
  }

  consignar() {
    if (this.form.valid) {
      this.actionService.consignar(this.form.value).subscribe((res) => {
        this.snackBar.open(res, 'Ok', {
          duration: 4000,
        });
        if (res === 'consignacion exitosa.') {
          this.info.emit('Completed');
        }
      });
    }
  }

  return() {
    this.info.emit(null);
  }
}
