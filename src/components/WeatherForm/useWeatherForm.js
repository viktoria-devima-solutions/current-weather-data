import { useState, useEffect } from "react";
import debounce from "../../utils/debounce.util";
import weatherService from "../../services/weather.service";
import { OPENWEATHER_IAMGE_URL } from "../../constants/api.constant";
const useWeatherForm = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState({});
  const onSearchChange = (e) => {
    setSearch(e.target.value);
    const debouncedFunc = debounce((e) => {
      setDebouncedSearch(e.target.value);
    }, 700);
    debouncedFunc(e);
  };
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const getData = async () => {
      await weatherService
        .getWeatherData(debouncedSearch)
        .then((response) => {
          const copyWeatherArray = [...response.data.weather];
          copyWeatherArray.forEach(
            (element) =>
              (element.icon = `${OPENWEATHER_IAMGE_URL}/${element.icon}@2x.png`)
          );
          setResult([...copyWeatherArray]);
        })
        .catch((error) => {
          setError(error);
          setResult(null);
        });
      setIsLoading(false);
    };
    getData();
  }, [debouncedSearch]);
  return { search, onSearchChange, result, isLoading, error };
};
export default useWeatherForm;
