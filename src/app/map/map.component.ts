import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { } from '@types/googlemaps';
import { Travel } from '../travel';


// Implementation of Google Maps with help of https://medium.com/@balramchavan/integrating-google-maps-in-angular-5-ca5f68009f29

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() travel: Travel;

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
  let mapProp = {
     center: new google.maps.LatLng(50.038894, 14.488633),
     zoom: 9
   };
   this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  let uluru = this.travel.latLng;
  let marker = new google.maps.Marker({
        position: uluru,
        map: this.map,
        animation: google.maps.Animation.DROP,
        title: this.travel.name
      });
 }

  constructor() { }

}
