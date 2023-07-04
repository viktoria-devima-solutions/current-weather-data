import {
  TextField,
  Typography,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./styles";
import useWeatherForm from "./useWeatherForm";

export default function WeatherForm() {
  const [open, setOpen] = useState(false);
  const { search, onSearchChange, result, isLoading, error } = useWeatherForm();
  useEffect(() => setOpen(!!error), [error]);

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Location"
        variant="outlined"
        value={search}
        onChange={onSearchChange}
      />
      {isLoading && <CircularProgress />}
      {result &&
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
            <img src={weather.icon} />
          </Box>
        ))}
      <Snackbar open={open} onClose={() => setOpen(false)}>
        <Alert
          onClose={() => setOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error?.response?.data.message}
        </Alert>
      </Snackbar>
    </>
  );
}
