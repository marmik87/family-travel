import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelsComponent } from './travels/travels.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TravelDetailComponent }  from './travel-detail/travel-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'travels', component: TravelsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail/:id', component: TravelDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
