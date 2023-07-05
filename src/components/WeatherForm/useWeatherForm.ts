import { useState, useEffect } from "react";
import weatherService from "../../services/weather.service";
import { OPENWEATHER_IMAGE_URL } from "../../constants/api.constant";
import { AxiosError } from "axios";
import { Weather } from "./types";
const useWeatherForm = () => {
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<Weather[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    setIsLoading(true);
    setError("");
    const getData = async () => {
      try {
        const response = await weatherService.getWeatherData(debouncedSearch);
        const mappingResult = response.data.weather.map((element: Weather) => ({
          id: element.id,
          main: element.main,
          description: element.description,
          icon: `${OPENWEATHER_IMAGE_URL}/${element.icon}@2x.png`,
        }));
        setResult(mappingResult);
      } catch (error) {
        if (error instanceof AxiosError)
          setError(error?.response?.data.message);
        else setError(String(error));
        setResult([]);
      }
      setIsLoading(false);
    };
    getData();
  }, [debouncedSearch]);
  return { result, isLoading, error, setDebouncedSearch };
};
export default useWeatherForm;
