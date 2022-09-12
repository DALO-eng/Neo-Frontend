import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @Output() info = new EventEmitter<string | null>();

  constructor() { }

  ngOnInit(): void {
  }

  return() {
    this.info.emit(null);
  }

}
