import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionsService } from 'src/app/services/actions/actions.service';
import { LoginRegisterService } from 'src/app/services/login-register/login-register.service';

@Component({
  selector: 'app-pockets',
  templateUrl: './pockets.component.html',
  styleUrls: ['./pockets.component.scss'],
})
export class PocketsComponent implements OnInit {
  @Output() info = new EventEmitter<string | null>();

  bolsillos: any;
  userId: any;
  constructor(
    private actionService: ActionsService,
    private loginService: LoginRegisterService
  ) {}

  ngOnInit(): void {
    this.loginService.user$.subscribe((user) => {
      this.userId = user?.id_cuenta;
    });
    this.actionService.bolsillo(this.userId).subscribe((res) => {
      this.bolsillos = res;
    });
  }

  return() {
    this.info.emit(null);
  }
}
