import weatherApiAxios from "../utils/weather-api-axios.util";
const weatherService = {
  getWeatherData: async (search: string) => {
    return await weatherApiAxios.get("/weather", {
      params: {
        q: search,
        units: "metric",
      },
    });
  },
};
export default weatherService;
