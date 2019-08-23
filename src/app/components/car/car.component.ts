import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];

  constructor() { }

  ngOnInit() {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'Белый',
      salon: 'Черный',
      wheels: 'Серебристый'
    }
    this.options = ["ABS", "Автопилот", "Авто паркинг"];
  }

  carSelect(carName) {
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5';
      this.colors = {
        car: 'Синий',
        salon: 'Белый',
        wheels: 'Красные'
      }
      this.options = ["ABS", "Автопилот"];
    } else if (carName == 'audi') {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.colors = {
        car: 'Белый',
        salon: 'Черный',
        wheels: 'Серебристый'
      }
      this.options = ["ABS", "Автопилот", "Авто паркинг"];
    } else {
      this.name = 'Mercedes';
      this.speed = 180;
      this.model = 'A170';
      this.colors = {
        car: 'Белый',
        salon: 'Черный',
        wheels: 'Серебристый'
      }
      this.options = ["ABS", "Автопилот", "Авто паркинг", "Круиз контроль"];
    }
  }
}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}