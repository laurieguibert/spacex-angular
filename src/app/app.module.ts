import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
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
import { MissionsDetailsComponent } from './missions-details/missions-details.component';
import { AgmCoreModule } from '@agm/core';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { TimerComponent } from './timer/timer.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';

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
    AboutComponent,
    MissionsDetailsComponent,
    LaunchpadComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAa2wNa1V87VMlzkV65KevyZJfmMyIEiAA'
    })
    CountdownTimerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class AppModule { }
