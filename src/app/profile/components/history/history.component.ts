import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionsService } from 'src/app/services/actions/actions.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  @Input() id: number | undefined;
  @Output() info = new EventEmitter<string | null>();

  historial: any;

  constructor(private actionService: ActionsService) {}

  ngOnInit(): void {
    this.actionService.historial(this.id).subscribe((res) => {
      this.historial = res;
    });
  }

  return() {
    this.info.emit(null);
  }
}
