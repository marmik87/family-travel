import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  venues: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getVenues().subscribe(
      data => this.venues = data.response.venues;
    )
  }

}
