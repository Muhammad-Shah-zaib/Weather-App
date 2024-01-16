import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../../models/weather-model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Fix the typo in 'styleUrl'
})
export class HeaderComponent implements OnInit {
  temp: string = '';
  cityName: string = 'Washington';
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService) {}

  reset_input() {
    this.cityName = this.temp;
    this.temp = '';

    this.weatherService.getWeatherData(this.cityName).subscribe(
      (response) => {
        this.weatherData = response;
        // City exists, process weather data
      },
      (error) => {
        console.error('Error fetching weather data:', error);
        // Handle non-existing city scenario
        this.weatherData = undefined; // or set it to an empty state, depending on your use case
      }
    );
  }

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.cityName).subscribe(
      (response) => {
        this.weatherData = response;
        // City exists, process weather data
      },
      (error) => {
        console.error('Error fetching weather data:', error);
        // Handle non-existing city scenario
        this.weatherData = undefined; // or set it to an empty state, depending on your use case
      }
    );
  }
}
