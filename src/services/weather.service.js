import weatherApiAxios from "../utils/weatherApiAxios.util";
const weatherService = {
  getWeatherData: async (search) => {
    console.log(weatherApiAxios.baseURL);
    try {
      return await weatherApiAxios.get("/weather", {
        params: {
          q: search,
          units: "metric",
        },
      });
    } catch (error) {
      throw error;
    }
  },
};
export default weatherService;
