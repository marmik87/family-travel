import { Component, OnInit } from '@angular/core';
import { Travel } from '../travel';
import { TravelService } from '../travel.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})

export class TravelsComponent implements OnInit {

  travels: Travel[];

  constructor(private travelService: TravelService) { }

  ngOnInit() {
    this.getTravels();
  }

  getTravels(): void {
    this.travelService.getTravels()
      .subscribe(travels => this.travels = travels);
   }

}
