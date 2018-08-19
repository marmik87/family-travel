import { Injectable } from '@angular/core';
import { Travel } from './travel';
import { TRAVELS } from './mock-travels';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})

export class TravelService {
  constructor(private messageService: MessageService) { }

  getTravels(): Observable<Travel[]> {
  this.messageService.add('TravelService: fetched travels');
  return of(TRAVELS);
}

  getTravel(id: number): Observable<Travel> {
    this.messageService.add(`TravelService: fetched travel id=${id}`);
    return of(TRAVELS.find(travel => travel.id === id));
  }
}
