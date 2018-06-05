import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
