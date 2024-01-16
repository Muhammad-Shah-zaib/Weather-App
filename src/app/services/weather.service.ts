import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../../models/weather-model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData (cityName: string): Observable<WeatherData> {
    // this.http.get(environment.weatherApiBaseUrl, {
    //   headers: new HttpHeaders()
    //   .set(environment.XRapidAPIHostLabel, environment.XRapidAPIHostValue)
    //   .set(environment.XRapidAPIKeyLabel, environment.XRapidAPIKeyValue),
    //   params: new HttpParams()
    //   .set('q', cityName)
    //   .set('units', 'metric')
    //   .set('mode', 'json')
    // })
    return this.http.get<WeatherData>( `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2420de957955219ba2a2359125dbb148&units=metric`)
  }
}