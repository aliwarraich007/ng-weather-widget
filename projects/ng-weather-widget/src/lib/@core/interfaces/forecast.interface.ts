interface weather {
  main: string;
  description: string;
  icon: string;
}

interface current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
  wind_deg: number;
  weather: weather[];
  uvi: number;
}

interface daily {
  humidity: number;
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
  };
  weather: weather[];
}

export interface Forcast {
  lat: number;
  lon: number;
  city?: string;
  current: current;
  daily: daily[];
}
