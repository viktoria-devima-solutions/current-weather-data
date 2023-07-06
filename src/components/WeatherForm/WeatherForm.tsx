import { Typography, Box, CircularProgress } from '@mui/material';

import ErrorSnackbar from '../ErrorSnackbar/ErrorSnackbar';
import DebouncedTextField from '../inputs/DebouncedTextField/DebouncedTextField';

import styles from './styles';
import useWeatherForm from './useWeatherForm';

const WeatherForm = () => {
  const { result, isLoading, error, setDebouncedSearch, searchValue, handleSetSearchChange } =
    useWeatherForm();
  return (
    <>
      <DebouncedTextField
        value={searchValue}
        onChange={handleSetSearchChange}
        setDebouncedSearch={setDebouncedSearch}
      />
      {isLoading && <CircularProgress />}
      {result &&
        !isLoading &&
        result.map((weather) => (
          <Box key={weather.id} sx={styles.weatherCard}>
            <div>
              <Typography variant="h4" component="h2">
                {weather.main}
              </Typography>
              <Typography variant="h5" component="h2">
                {weather.description}
              </Typography>
            </div>
            <img src={weather.icon} alt={weather.main} />
          </Box>
        ))}
      <ErrorSnackbar error={error} />
    </>
  );
};
export default WeatherForm;
