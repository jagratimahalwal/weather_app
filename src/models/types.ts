export interface searchLocation {
  searchedLocations: string;
}

export interface cityNames extends Array<string> {}

export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: any;
  clouds: any;
  dt: number;
  sys: any;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ForecastState {
  status: string;
  searchedLocations: cityNames;
  error: string;
  weatherData: WeatherData[];
}

export interface RootState {
  weather: ForecastState;
}
