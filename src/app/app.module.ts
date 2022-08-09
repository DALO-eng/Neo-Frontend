import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingPageNavbarComponent } from './components/landing-page-navbar/landing-page-navbar.component';
import { LandingPageFeaturesComponent } from './components/landing-page-features/landing-page-features.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageNavbarComponent,
    LandingPageFeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
