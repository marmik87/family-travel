import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getVenues() {
    return this.http.get('https://api.foursquare.com/v2/venues/search?ll=50.029755,%2014.601348&query=cafe+restaurant&radius=2000&oauth_token=PNNZ4OR1BFQSBGIYY1VTTJOKESAMCPX1QB3O1OUY4RGEOIQC&v=20180803');
  }

//  getMap() {
//    return this.http.get("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY")
//  }
}
