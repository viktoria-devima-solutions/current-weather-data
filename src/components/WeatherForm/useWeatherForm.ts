import { useState, useEffect } from "react";
import weatherService from "../../services/weather/weather.service";
import { OPENWEATHER_IMAGE_URL } from "../../constants/api.constant";
import { AxiosError } from "axios";
import { IWeatherApiWeather } from "../../services/weather/types";
const useWeatherForm = () => {
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<IWeatherApiWeather[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    setIsLoading(true);
    setError("");
    const getData = async () => {
      try {
        const response = await weatherService.getWeatherData(debouncedSearch);
        const mappingResult = response.data.weather.map((element) => ({
          id: element.id,
          main: element.main,
          description: element.description,
          icon: `${OPENWEATHER_IMAGE_URL}/${element.icon}@2x.png`,
        }));
        setResult(mappingResult);
      } catch (error) {
        if (error instanceof AxiosError)
          setError(error?.response?.data.message);
        else setError((error as Error)?.message ?? "Unexpected error occurred");
        setResult([]);
      }
      setIsLoading(false);
    };
    getData();
  }, [debouncedSearch]);
  return { result, isLoading, error, setDebouncedSearch };
};
export default useWeatherForm;
