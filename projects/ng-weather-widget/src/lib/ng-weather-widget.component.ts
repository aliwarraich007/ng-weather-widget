import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Forcast } from './@core/interfaces/forecast.interface';
import { LoadingService } from './@core/services/loading.service';
import { WeatherService } from './@core/services/weather.api.service';
import weatherDataDummy from './@core/utils/dummyResponse.json';
import { IconTransform } from './@core/utils/icon-transform';
@Component({
  selector: 'lib-ng-open-weather-widget',
  templateUrl: './ng-weather-widget.template.html',
  styleUrls: ['./ng-weather-widget.style.scss'],
})
export class NgWeatherWidget {
  weatherData: Forcast = weatherDataDummy;
  errorMessage: string = '';
  loading: boolean = false;
  subscription!: Subscription;
  @Input() appId: string = '';
  constructor(
    private weatherService: WeatherService,
    private loadingService: LoadingService
  ) {}

  toggleLoading(val: boolean) {
    this.loadingService.setLoadingStatus = val;
  }
  ngOnInit(): void {
    this.subscription = this.loadingService.getLoadingStatus.subscribe(
      (loadingState) => {
        this.loading = loadingState;
      }
    );
    this.getCurrentLocationAndWeatherData();
  }
  async getCurrentLocationAndWeatherData() {
    try {
      await this.weatherService.getCurrentLocation();
      this.getWeatherData();
    } catch (err) {
      this.getWeatherData();
    }
  }
  getWeatherData() {
    this.weatherService.appid = this.appId;
    this.weatherService.current_weather().subscribe({
      next: (data) => {
        const responseData = data;
        if (responseData instanceof Error)
          this.errorMessage = responseData.message;
        else {
          this.weatherData = data;
        }
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  iconRender(icon: string) {
    let iconName = IconTransform(icon);
    return iconName;
  }
}
