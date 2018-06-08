import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MissionsComponent } from '../missions/missions.component';
import { CompanyInfoComponent } from '../pages/company-info/company-info.component';
import { CompanyHistoryComponent } from '../pages/company-history/company-history.component';
import { RocketComponent } from '../pages/rocket/rocket.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { RocketListComponent } from '../rocket-list/rocket-list.component';
import { MissionsDetailsComponent } from 'src/app/missions-details/missions-details.component';

const appRoutes: Routes = [
  { path: 'missions', component: MissionsComponent },
  { path: 'missions/:flight_number', component: MissionsDetailsComponent },
  { path: 'companyInfo', component: CompanyInfoComponent },
  { path: 'companyHistory', component: CompanyHistoryComponent },
  { path: 'rockets', component: RocketListComponent },
  { path: 'rockets/:rocket_id', component: RocketComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
