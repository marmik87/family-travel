import { Component, OnInit, Input } from '@angular/core';
import { Travel } from '../travel';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css']
})
export class TravelDetailComponent implements OnInit {
  @Input() travel: Travel;

  constructor() { }

  ngOnInit() {
  }

}
