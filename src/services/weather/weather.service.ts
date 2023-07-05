import weatherApiAxios from "../../utils/weather-api-axios.util";
import { IWeatherApiData } from "./types";
const weatherService = {
  getWeatherData: async (search: string) => {
    return await weatherApiAxios.get<IWeatherApiData>("/weather", {
      params: {
        q: search,
        units: "metric",
      },
    });
  },
};
export default weatherService;
