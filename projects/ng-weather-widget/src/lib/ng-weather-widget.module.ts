import { NgModule } from '@angular/core';
import { NgWeatherWidget } from './ng-weather-widget.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LowerWidgetComponent } from './lower-widget/lower-widget.component';
import { WindConversion } from './shared/pipes/wind-conversion.pipe';
import { DayConversion } from './shared/pipes/day-converter.pipe';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WeatherInterceptor } from './@core/services/interceptors/weather.interceptor';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    NgWeatherWidget,
    LoaderComponent,
    LowerWidgetComponent,
    WindConversion,
    DayConversion,
  ],
  imports: [CommonModule, NgOptimizedImage, HttpClientModule],
  exports: [NgWeatherWidget],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WeatherInterceptor, multi: true },
  ],
})
export class NgWeatherWidgetModule {}
