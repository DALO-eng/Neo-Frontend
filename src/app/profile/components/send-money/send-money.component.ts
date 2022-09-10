import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent implements OnInit {
  @Output() info = new EventEmitter<string | null>();

  constructor() { }

  ngOnInit(): void {
  }

  return() {
    this.info.emit(null);
  }

}
