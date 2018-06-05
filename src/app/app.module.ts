import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MissionsComponent } from './missions/missions.component';
import { LaunchComponent } from './launch/launch.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyHistoryComponent } from './company-history/company-history.component';
import { RocketComponent } from './rocket/rocket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MissionsComponent,
    CompanyInfoComponent,
    LaunchComponent,
    CompanyHistoryComponent,
    RocketComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class AppModule { }
