# Angular - Weather widget

ng-weather-widget is a reusable Angular component that can be used in any angular project. All you need is your openweathermap api key and you're good to go.

**_Features:_**

- Beautiful design
- Animated Icons on Current weather condition
- Rain effect if current weather is rain
- Caching of data for three hours.
- Mobile friendly
- Current weather status at top:

  - City with Country name
  - Temperature
  - Humidity
  - UVI
  - Wind direction (in text: for example NE, SW, E, etc) and wind
  - Speed in kmh

- Weather Forecast below:

  The bottom part is the forecast for today and the next 5 days, For every single day we show:

  - Week name
  - Weather icon
  - Max temp
  - Min temp

<small>more features are coming soon</small>

---

# How to use widget in your app

## Installation

Install the package using npm:

```console
npm install ng-weather-widget
```

## Usage

Import and register the ng-weather-widget in your Angular module:

```
import { NgWeatherWidgetModule } from 'ng-weather-widget';
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    WeatherModule,
    NgWeatherWidgetModule,
  ]
```

In your angular template, add the WeatherWidget component and pass your OpenWeatherMap API key as a prop:

```html
<lib-ng-open-weather-widget [appId]="your key here"></lib-ng-open-weather-widget>
```

Replace yourOpenWeatherApiKey with your actual OpenWeatherMap API key.

The weather widget should now be displayed in your application, showing the weather data for the current day and upcoming week.

## Configuration

The WeatherWidget component accepts the following props:

`openWeatherApiKey` (required): Your OpenWeatherMap API key to fetch weather data.
