import { Injectable } from '@angular/core';
import { food_data } from 'src/data';
// import { data } from 'src/data';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodServicesService {

  constructor() { }

  getAll():Food[]{
    return food_data
  }
}
