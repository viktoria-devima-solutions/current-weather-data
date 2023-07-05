export interface IWeatherApiCoord {
  lon: number;
  lat: number;
}
export interface IWeatherApiWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherApiMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
export interface IWeatherApiWind {
  speed: number;
  deg: number;
  gust: number;
}
export interface IWeatherApiRain {
  "1h": number;
}
export interface IWeatherApiClouds {
  all: number;
}
export interface IWeatherApiSys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
export interface IWeatherApiData {
  coord: IWeatherApiCoord;
  weather: IWeatherApiWeather[];
  base: string;
  main: IWeatherApiMain;
  visibility: number;
  wind: IWeatherApiWind;
  rain: IWeatherApiRain;
  clouds: IWeatherApiClouds;
  dt: number;
  sys: IWeatherApiSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
