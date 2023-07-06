import debounce from '../../../utils/debounce.util';

import type { IUncontrolledDebouncedTextFieldProps } from './types';
import type { ChangeEvent } from 'react';

const useUncontrolledDebouncedTextField = ({
  onChange,
  setDebouncedSearch,
  debouncedDelay = 700,
}: IUncontrolledDebouncedTextFieldProps) => {
  const debouncedFunc = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setDebouncedSearch(e.target.value);
  }, debouncedDelay);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    debouncedFunc(e);
  };

  return { onSearchChange };
};

export default useUncontrolledDebouncedTextField;
