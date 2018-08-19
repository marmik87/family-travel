import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Travel } from './travel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getVenues(latLng: Object) {
    let location = `${latLng.lat},${latLng.lng}`;
    let query = `https://api.foursquare.com/v2/venues/search?ll=${location}&query=cafe+restaurant&radius=1000&oauth_token=PNNZ4OR1BFQSBGIYY1VTTJOKESAMCPX1QB3O1OUY4RGEOIQC&v=20180803`;
    return this.http.get(query);
  }

//  getMap() {
//    return this.http.get("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY")
//  }
}
