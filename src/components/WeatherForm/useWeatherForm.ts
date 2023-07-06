import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { OPENWEATHER_IMAGE_URL } from '../../constants/api.constant';
import useQueryState from '../../hooks/useQueryState';
import weatherService from '../../services/weather/weather.service';

import type { IWeatherApiWeather } from '../../services/weather/types';

const useWeatherForm = () => {
  const { setDebouncedSearch } = useQueryState();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<IWeatherApiWeather[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const getData = async () => {
      try {
        const response = await weatherService.getWeatherData(router.query.search as string);
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
  }, [router.query.search]);
  return { result, isLoading, error, setDebouncedSearch };
};

export default useWeatherForm;
