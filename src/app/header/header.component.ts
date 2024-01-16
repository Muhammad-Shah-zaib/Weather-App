import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../../models/weather-model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  temp: string = '';
  cityName: string = 'islamabad';
  weatherData!: WeatherData;

  constructor(private weatherService: WeatherService){}

  reset_input(){
    this.cityName = this.temp;
    this.temp = '';

    this.weatherService.getWeatherData(this.cityName).subscribe(
      (response) => {
        this.weatherData = response;
      }
    );

    
  }

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.cityName).subscribe(
      (response) => {
        this.weatherData = response;
      }
    );
  }
}
