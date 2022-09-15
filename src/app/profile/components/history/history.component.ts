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

  constructor(private actionService: ActionsService) {}

  ngOnInit(): void {
    this.actionService.historial(this.id).subscribe((res) => {
      console.log(res);
    });
  }

  return() {
    this.info.emit(null);
  }
}
