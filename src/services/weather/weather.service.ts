import weatherApiAxios from '../../utils/weather-api-axios.util';

import type { IWeatherApiData } from './types';

const weatherService = {
  getWeatherData: async (search: string) => {
    return weatherApiAxios.get<IWeatherApiData>('/weather', {
      params: {
        q: search,
        units: 'metric',
      },
    });
  },
};

export default weatherService;
