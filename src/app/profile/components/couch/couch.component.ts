import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-couch',
  templateUrl: './couch.component.html',
  styleUrls: ['./couch.component.scss']
})
export class CouchComponent {
  @Output() info = new EventEmitter<string | null>();

  constructor() { }

  return() {
    this.info.emit(null);
  }
}
