import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-withdraw-money',
  templateUrl: './withdraw-money.component.html',
  styleUrls: ['./withdraw-money.component.scss']
})
export class WithdrawMoneyComponent implements OnInit {
  @Output() info = new EventEmitter<string | null>();

  constructor() { }

  ngOnInit(): void {
  }

  return() {
    this.info.emit(null);
  }
}
