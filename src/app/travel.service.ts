import { Injectable } from '@angular/core';
import { Travel } from './travel';
import { TRAVELS } from './mock-travels';

@Injectable({
  providedIn: 'root'
})

export class TravelService {
  constructor() { }

  getTravels(): Travel[] {
    return TRAVELS;
  }

}
