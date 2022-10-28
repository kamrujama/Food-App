import { Component, OnInit } from '@angular/core';
import { FoodServicesService } from 'src/app/services/food-services.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = [

  ]
  constructor(private foodService : FoodServicesService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll()
  }

}
