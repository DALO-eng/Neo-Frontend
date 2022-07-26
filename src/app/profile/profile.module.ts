import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MainButtonsComponent } from './components/main-buttons/main-buttons.component';
import { SendMoneyComponent } from './components/send-money/send-money.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WithdrawMoneyComponent } from './components/withdraw-money/withdraw-money.component';
import { HistoryComponent } from './components/history/history.component';
import { CouchComponent } from './components/couch/couch.component';
import { PocketsComponent } from './components/pockets/pockets.component';
import { SacarComponent } from './components/sacar/sacar.component';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    ProfilePageComponent,
    MainButtonsComponent,
    SendMoneyComponent,
    WithdrawMoneyComponent,
    HistoryComponent,
    CouchComponent,
    PocketsComponent,
    SacarComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class ProfileModule {}
