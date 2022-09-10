import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Boton } from 'src/app/Models/interface';

@Component({
  selector: 'app-main-buttons',
  templateUrl: './main-buttons.component.html',
  styleUrls: ['./main-buttons.component.scss']
})
export class MainButtonsComponent implements OnInit {

  @Input() info: Boton;
  @Output() action = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setAction() {
    console.log(this.info.mensaje);
    this.action.emit(this.info.mensaje);
  }

}
