import DebouncedTextField from '../DebouncedTextField/DebouncedTextField';

import useUncontrolledDebouncedTextField from './useUncontrolledDebouncedTextField';

import type { IUncontrolledDebouncedTextFieldProps } from './types';

const UncontrolledDebouncedTextField = ({
  setDebouncedSearch,
  debouncedDelay = 700,
}: IUncontrolledDebouncedTextFieldProps) => {
  const { search, onSearchChange } = useUncontrolledDebouncedTextField();
  return (
    <DebouncedTextField
      value={search}
      onChange={onSearchChange}
      setDebouncedSearch={setDebouncedSearch}
      debouncedDelay={debouncedDelay}
    />
  );
};

export default UncontrolledDebouncedTextField;
