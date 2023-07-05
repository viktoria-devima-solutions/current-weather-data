import axios from "axios";
import { OPENWEATHER_URL } from "../constants/api.constant";
const weatherService = {
  getWeatherData: (search) => {
    const openWeatherApiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
    axios.default.params = {};
    axios.interceptors.request.use((config) => {
      config.params["appid"] = openWeatherApiKey;
      return config;
    });
    return axios
      .get(`${OPENWEATHER_URL}`, {
        params: {
          q: search,
          units: "metric",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },
};
export default weatherService;
