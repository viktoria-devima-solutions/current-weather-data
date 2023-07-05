import { useState, useEffect } from "react";
import weatherService from "../../services/weather.service";
import { OPENWEATHER_IMAGE_URL } from "../../constants/api.constant";
const useWeatherForm = () => {
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState({});
  useEffect(() => {
    setIsLoading(true);
    setError(null);
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
        setError(error);
        setResult(null);
      }
      setIsLoading(false);
    };
    getData();
  }, [debouncedSearch]);
  return { result, isLoading, error, setDebouncedSearch };
};
export default useWeatherForm;
