import { Typography, Box } from "@mui/material";
import styles from "../src/components/WeatherForm/styles";
import WeatherForm from "../src/components/WeatherForm/WeatherForm";

const HomePage = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h3" component="h2">
        Current weather data
      </Typography>
      <WeatherForm />
    </Box>
  );
}
export default HomePage