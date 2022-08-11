import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingPageNavbarComponent } from './components/landing-page-navbar/landing-page-navbar.component';
import { LandingPageFeaturesComponent } from './components/landing-page-features/landing-page-features.component';
import { LandingPageMembersComponent } from './components/landing-page-members/landing-page-members.component';
import { LandingPageFooterComponent } from './components/landing-page-footer/landing-page-footer.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageNavbarComponent,
    LandingPageFeaturesComponent,
    LandingPageMembersComponent,
    LandingPageFooterComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
