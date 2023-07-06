import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

import { OPENWEATHER_IMAGE_URL } from '../../constants/api.constant';
import useQueryState from '../../hooks/useQueryState';
import weatherService from '../../services/weather/weather.service';

import type { IWeatherApiWeather } from '../../services/weather/types';
import type { ChangeEvent } from 'react';

const useWeatherForm = () => {
  const { value: debouncedSearch, setValue: setDebouncedSearch } = useQueryState('search');
  const [searchValue, setSearchValue] = useState(debouncedSearch);
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<IWeatherApiWeather[]>([]);
  const [error, setError] = useState<string | null>(null);
  const handleSetSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
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
      } catch (e) {
        if (e instanceof AxiosError) {
          setError(e?.response?.data.message);
        } else {
          setError((e as Error)?.message ?? 'Unexpected error occurred');
        }
        setResult([]);
      }
      setIsLoading(false);
    };
    getData();
  }, [debouncedSearch]);
  return { result, isLoading, error, setDebouncedSearch, searchValue, handleSetSearchChange };
};

export default useWeatherForm;
