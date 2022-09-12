import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-withdraw-money',
  templateUrl: './withdraw-money.component.html',
  styleUrls: ['./withdraw-money.component.scss']
})
export class WithdrawMoneyComponent {
  @Output() info = new EventEmitter<string | null>();

  constructor() { }

  return() {
    this.info.emit(null);
  }
}
