import DebouncedTextField from '../DebouncedTextField/DebouncedTextField';

import useUncontrolledDebouncedTextField from './useUncontrolledDebouncedTextField';

import type { IUncontrolledDebouncedTextFieldProps } from './types';

const UncontrolledDebouncedTextField = ({
  value,
  onChange,
  setDebouncedSearch,
  debouncedDelay = 700,
}: IUncontrolledDebouncedTextFieldProps) => {
  const { onSearchChange } = useUncontrolledDebouncedTextField({
    value,
    onChange,
    setDebouncedSearch,
    debouncedDelay,
  });
  return (
    <DebouncedTextField
      value={value}
      onChange={onSearchChange}
      setDebouncedSearch={setDebouncedSearch}
      debouncedDelay={debouncedDelay}
    />
  );
};

export default UncontrolledDebouncedTextField;
