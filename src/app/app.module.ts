import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HomeComponent } from './pages/home/home.component';
import { RocketComponent } from './pages/rocket/rocket.component';

import { MissionsComponent } from './missions/missions.component';
import { LaunchComponent } from './launch/launch.component';
import { CompanyInfoComponent } from './pages/company-info/company-info.component';
import { CompanyHistoryComponent } from './pages/company-history/company-history.component';

import { CapsuleComponent } from './capsule/capsule.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RocketListComponent } from './rocket-list/rocket-list.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabComponent } from './tab/tab.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MissionsComponent,
    CompanyInfoComponent,
    LaunchComponent,
    CompanyHistoryComponent,
    RocketComponent,
    CapsuleComponent,
    NavigationComponent,
    RocketListComponent,
    CardComponent,
    CarouselComponent,
    TabComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class AppModule { }
