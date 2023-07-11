import { useEffect, type ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { cities } from '../../../constants/api.constant';
import { setCitiesState } from '../../../redux/cities/citiesSlice';
import debounce from '../../../utils/debounce.util';

import type { ICitySelectProps } from './types';

const useCitySelect = ({
  onChange,
  setDebouncedSearch,
  debouncedDelay = 700,
}: ICitySelectProps) => {
  const dispatch = useDispatch();
  const debouncedFunc = debounce((value: string) => {
    setDebouncedSearch(value);
  }, debouncedDelay);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>, newValue: string) => {
    onChange(newValue);
    debouncedFunc(newValue);
  };
  useEffect(() => {
    const getData = async () => {
      dispatch(setCitiesState(cities));
    };
    getData();
  });
  return { onSearchChange };
};

export default useCitySelect;
