import axios from 'axios';

import { OPENWEATHER_URL } from '../constants/api.constant';

const weatherApiAxios = axios.create({
  baseURL: `${OPENWEATHER_URL}`,
  timeout: 1000,
});

const openWeatherApiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

weatherApiAxios.interceptors.request.use((config) => {
  config.params.appid = openWeatherApiKey;
  return config;
});

export default weatherApiAxios;
