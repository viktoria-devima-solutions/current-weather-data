import type { IWeatherApiWeather } from '../../services/weather/types';

export interface IWeatherFormProps {
  data: IWeatherApiWeather[];
  errorMessage: string;
}
