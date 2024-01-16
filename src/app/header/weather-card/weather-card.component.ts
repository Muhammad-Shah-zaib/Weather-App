import { Component, Input } from '@angular/core';
import { WeatherData } from '../../../models/weather-model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})

export class WeatherCardComponent  {
  @Input() weatherData!: WeatherData;
  @Input() cityName!: string;

}