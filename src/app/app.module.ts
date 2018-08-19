import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TravelsComponent } from './travels/travels.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { VenuesComponent } from './venues/venues.component';
import { MapComponent } from './map/map.component';
import { MessagesComponent } from './messages/messages.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelsComponent,
    TravelDetailComponent,
    DashboardComponent,
    VenuesComponent,
    MapComponent,
    MessagesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
