import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Forcast } from '../interfaces/forecast.interface';
import { map, tap } from 'rxjs';
import { CityCoords } from '../interfaces/geocoding_reverse';
import { LoadingService } from './loading.service';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  lat: string = '34.0522';
  lon: string = '-118.243';
  weatherData!: Forcast;
  appid: string = '';
  private oneCallApi =
    'https://api.openweathermap.org/data/2.5/onecall?exclude=alerts,hourly,minutely&units=metric';
  private reverseGeoCodingApi =
    'https://api.openweathermap.org/geo/1.0/reverse';
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}
  getWeatherData() {
    return this.weatherData;
  }
  async getCurrentLocation() {
    this.loadingService.setLoadingStatus = true;
    return new Promise<GeolocationCoordinates>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.lat = coords.latitude.toFixed(3);
          this.lon = coords.longitude.toFixed(3);
          this.loadingService.setLoadingStatus = false;
          resolve(coords);
        },
        (err) => {
          this.loadingService.setLoadingStatus = false;
          reject(err);
        }
      );
    });
  }

  current_weather() {
    return this.http
      .get<Forcast>(this.oneCallApi, {
        params: new HttpParams().appendAll({
          lat: this.lat,
          lon: this.lon,
        }),
      })
      .pipe(
        map((item) => {
          let sliced_arr = item.daily.slice(0, 5);
          item.daily = sliced_arr;
          item.current.wind_speed = parseFloat(
            (item.current.wind_speed * 3.6).toFixed(1)
          );
          return item;
        }),
        tap((item) => {
          this.reverse_geocoding().subscribe((data) => {
            item.city = data[0].name + ' ' + data[0].country;
          });
          this.weatherData = item;
        })
      );
  }

  reverse_geocoding() {
    return this.http.get<CityCoords[]>(this.reverseGeoCodingApi, {
      params: new HttpParams().appendAll({
        limit: 1,
        lat: this.lat,
        lon: this.lon,
      }),
    });
  }
}
