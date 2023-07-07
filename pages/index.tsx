import { Typography, Box } from '@mui/material';
import { AxiosError } from 'axios';

import styles from '../src/components/WeatherForm/styles';
import WeatherForm from '../src/components/WeatherForm/WeatherForm';
import weatherService from '../src/services/weather/weather.service';
import weatherMapper from '../src/utils/weather-mapper.util';

import type { IHomePageProps } from './types';
import type { IWeatherApiWeather } from '../src/services/weather/types';

export async function getServerSideProps(context: { query: { search: string } }) {
  let errorMessage = '';
  let data: IWeatherApiWeather[] = [];
  try {
    const response = await weatherService.getWeatherData(context.query.search as string);
    data = weatherMapper(response.data);
  } catch (e) {
    if (e instanceof AxiosError) {
      errorMessage = e?.response?.data.message;
    } else {
      errorMessage = (e as Error)?.message ?? 'Unexpected error occurred';
    }
  }
  return { props: { data, errorMessage } };
}
const HomePage = ({ data, errorMessage }: IHomePageProps) => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h3" component="h2">
        Current weather data
      </Typography>
      <WeatherForm data={data} errorMessage={errorMessage} />
    </Box>
  );
};
export default HomePage;
