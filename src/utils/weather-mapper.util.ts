import { OPENWEATHER_IMAGE_URL } from '../constants/api.constant';

import type { IWeatherApiData } from '../services/weather/types';

const mapWeatherApiResponse = (data: IWeatherApiData) => {
  return data.weather.map((element) => ({
    id: element.id,
    main: element.main,
    description: element.description,
    icon: `${OPENWEATHER_IMAGE_URL}/${element.icon}@2x.png`,
  }));
};

export default mapWeatherApiResponse;
