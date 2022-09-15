import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionsService } from 'src/app/services/actions/actions.service';

@Component({
  selector: 'app-pockets',
  templateUrl: './pockets.component.html',
  styleUrls: ['./pockets.component.scss'],
})
export class PocketsComponent implements OnInit {
  @Input() id: number;
  @Output() info = new EventEmitter<string | null>();

  bolsillos: any;
  constructor(private actionService: ActionsService) {}

  ngOnInit(): void {
    this.actionService.bolsillo(this.id).subscribe((res) => {
      this.bolsillos = res;
    });
  }

  return() {
    this.info.emit(null);
  }
}
