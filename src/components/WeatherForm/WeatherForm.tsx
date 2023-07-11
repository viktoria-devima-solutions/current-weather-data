import { Typography, Box, CircularProgress } from '@mui/material';

import ErrorSnackbar from '../ErrorSnackbar/ErrorSnackbar';
import CitySelect from '../inputs/CitySelect/CitySelect';

import styles from './styles';
import useWeatherForm from './useWeatherForm';

import type { IWeatherFormProps } from './types';

const WeatherForm = ({ data, errorMessage }: IWeatherFormProps) => {
  const { result, isLoading, error, setDebouncedSearch, searchValue, handleSetSearchChange } =
    useWeatherForm(data, errorMessage);
  return (
    <>
      <CitySelect
        value={searchValue}
        onChange={handleSetSearchChange}
        setDebouncedSearch={setDebouncedSearch}
      />
      {isLoading && <CircularProgress />}
      {result &&
        !isLoading &&
        result.map((weather) => (
          <Box key={weather.id} sx={styles.weatherCard}>
            <Typography variant="h4" component="div">
              {weather.main}
            </Typography>
            <Typography variant="h5" component="div">
              {weather.description}
            </Typography>
            <img height={100} width={100} src={weather.icon} alt={weather.main} />
          </Box>
        ))}
      <ErrorSnackbar error={error} />
    </>
  );
};
export default WeatherForm;
