import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

// Implementation of Google Maps with help of https://medium.com/@balramchavan/integrating-google-maps-in-angular-5-ca5f68009f29

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

 ngOnInit() {
   var mapProp = {
     center: new google.maps.LatLng(50.024488,14.590685),
     zoom: 15
   };
   this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

   let uluru = {lat: 50.026678, lng: 14.597040};

   let marker = new google.maps.Marker({
        position: uluru,
        map: this.map,
        title: 'Got you!'
      });
 }



  constructor() { }

}
