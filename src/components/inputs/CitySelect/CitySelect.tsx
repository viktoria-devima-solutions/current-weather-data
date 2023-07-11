import { Autocomplete, TextField } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectCitiesState } from '../../../redux/cities/citiesSlice';

import useCitySelect from './useCitySelect';

import type { ICitySelectProps } from './types';

const CitySelect = ({
  value,
  onChange,
  setDebouncedSearch,
  debouncedDelay = 700,
}: ICitySelectProps) => {
  const { onSearchChange } = useCitySelect({
    onChange,
    setDebouncedSearch,
    debouncedDelay,
  });
  const cities = useSelector(selectCitiesState);
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={cities}
      autoHighlight
      freeSolo
      value={value}
      onChange={(event: any, newValue: string | null) => {
        if (newValue) {
          onSearchChange(event, newValue);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose city"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
    />
  );
};
export default CitySelect;
