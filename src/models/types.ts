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

export interface Location {
  latitude: number;
  longitude: number;
}
export interface WeatherForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: Array<ForecastItem>;
  city: CityInfo;
}

export interface ForecastItem {
  dt: number;
  main: MainInfo;
  weather: Array<WeatherInfo>;
  clouds: any;
  wind: any;
  visibility: number;
  pop: number;
  rain?: any;
  sys: any;
  dt_txt: string;
}

export interface MainInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface CityInfo {
  id: number;
  name: string;
  coord: Location;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
