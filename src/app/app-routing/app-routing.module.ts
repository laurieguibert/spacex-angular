import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MissionsComponent } from '../missions/missions.component';
import { CompanyInfoComponent } from '../company-info/company-info.component';
import { CompanyHistoryComponent } from 'src/app/company-history/company-history.component';
import { RocketComponent } from 'src/app/rocket/rocket.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { RocketListComponent } from '../pages/rocket-list/rocket-list.component';

const appRoutes: Routes = [
  { path: 'missions', component: MissionsComponent },
  { path: 'companyInfo', component: CompanyInfoComponent },
  { path: 'companyHistory', component: CompanyHistoryComponent },
  { path: 'rockets', component: RocketListComponent },
  { path: 'rockets/:rocket_id', component: RocketComponent },
  { path: 'home', component: HomeComponent }
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
