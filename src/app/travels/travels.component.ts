import { Component, OnInit } from '@angular/core';
import { Travel } from '../travel';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})

export class TravelsComponent implements OnInit {

  selectedTravel: Travel;

  travels: Travel[];

  constructor(private travelService: TravelService) { }

  ngOnInit() {
    this.getTravels();
  }

  onSelect(travel: Travel): void {
    this.selectedTravel = travel;
  }

  getTravels(): void {
    this.travels = this.travelService.getTravels();
   }

}
