import { Typography, Box, CircularProgress } from '@mui/material';

import DebouncedTextField from '../DebouncedTextField/DebouncedTextField';
import ErrorSnackbar from '../ErrorSnackbar/ErrorSnackbar';

import styles from './styles';
import useWeatherForm from './useWeatherForm';
const WeatherForm = () => {
  const { result, isLoading, error, setDebouncedSearch } = useWeatherForm();
  return (
    <>
      <DebouncedTextField setDebouncedSearch={setDebouncedSearch} />
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
