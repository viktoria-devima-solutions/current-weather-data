import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

import useQueryState from '../../hooks/useQueryState';
import weatherService from '../../services/weather/weather.service';
import mapWeatherApiResponse from '../../utils/weather-mapper.util';

import type { IWeatherApiWeather } from '../../services/weather/types';

const useWeatherForm = (initialData: IWeatherApiWeather[], errorMessage: string) => {
  const { value: debouncedSearch, setValue: setDebouncedSearch } = useQueryState('search');
  const [searchValue, setSearchValue] = useState(debouncedSearch);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<IWeatherApiWeather[]>(initialData);
  const [error, setError] = useState<string | null>(errorMessage);
  const handleSetSearchChange = (newValue: string) => {
    setSearchValue(newValue);
  };
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const getData = async () => {
      try {
        const response = await weatherService.getWeatherData(debouncedSearch);
        const mappingResult = mapWeatherApiResponse(response.data);
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
