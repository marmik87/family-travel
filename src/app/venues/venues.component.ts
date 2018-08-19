import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Travel } from '../travel';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  venues: Object;

  @Input() latLng: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getVenues(this.latLng).subscribe(
      data => this.venues = data.response.venues
    )
  }

}
