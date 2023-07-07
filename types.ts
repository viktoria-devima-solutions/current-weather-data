import type { IWeatherApiWeather } from './src/services/weather/types';

export interface IHomePageProps {
  data: IWeatherApiWeather[];
  errorMessage: string;
}
