import { Component, OnInit, Input } from '@angular/core';
import { Travel } from '../travel';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TravelService }  from '../travel.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css']
})

export class TravelDetailComponent implements OnInit {
  travel: Travel;

  constructor(
    private route: ActivatedRoute,
    private travelService: TravelService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTravel();
  }

  getTravel(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.travelService.getTravel(id)
      .subscribe(travel => this.travel = travel);
  }

  goBack(): void {
  this.location.back();
  }

}
