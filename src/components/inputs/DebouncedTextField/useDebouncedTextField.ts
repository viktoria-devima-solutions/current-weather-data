import debounce from '../../../utils/debounce.util';

import type { IDebouncedTextFieldProps } from './types';
import type { ChangeEvent } from 'react';

const useDebouncedTextField = ({
  onChange,
  setDebouncedSearch,
  debouncedDelay = 700,
}: IDebouncedTextFieldProps) => {
  const debouncedFunc = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setDebouncedSearch(e.target.value);
  }, debouncedDelay);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    debouncedFunc(e);
  };

  return { onSearchChange };
};

export default useDebouncedTextField;
