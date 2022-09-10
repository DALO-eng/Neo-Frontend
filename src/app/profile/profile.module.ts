import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MainButtonsComponent } from './components/main-buttons/main-buttons.component';
import { SendMoneyComponent } from './components/send-money/send-money.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WithdrawMoneyComponent } from './components/withdraw-money/withdraw-money.component';

@NgModule({
  declarations: [ProfilePageComponent, MainButtonsComponent, SendMoneyComponent, WithdrawMoneyComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    ReactiveFormsModule
  ],
})
export class ProfileModule {}
