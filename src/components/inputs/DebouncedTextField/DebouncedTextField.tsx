import { TextField } from '@mui/material';

import useDebouncedTextField from './useDebouncedTextField';

import type { IDebouncedTextFieldProps } from './types';

const DebouncedTextField = ({
  value,
  onChange,
  setDebouncedSearch,
  debouncedDelay = 700,
}: IDebouncedTextFieldProps) => {
  const { onSearchChange } = useDebouncedTextField({
    onChange,
    setDebouncedSearch,
    debouncedDelay,
  });
  return (
    <TextField
      id="outlined-basic"
      label="Location"
      variant="outlined"
      value={value}
      onChange={onSearchChange}
    />
  );
};

export default DebouncedTextField;
