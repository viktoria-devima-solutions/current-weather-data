import { useState, useEffect } from "react";
import * as React from "react";

import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import { url, API_KEY, imageUrl } from "../api/constants";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const [search, setSeacrh] = useState("");
  const [result, setResult] = useState(null);
  const axios = require("axios");
  axios.default.params = {};
  axios.interceptors.request.use(
    function (config) {
      config.params["appid"] = API_KEY;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  useEffect(() => {
    setResult(null);
    axios
      .get(`${url}`, {
        params: {
          q: search,
          units: "metric",
        },
      })
      .then(function (response) {
        setResult(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [search]);

  function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }

  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h3" component="h2">
        Current weather data
      </Typography>
      <TextField
        id="outlined-basic"
        label="Location"
        variant="outlined"
        onChange={debounce((e) => {
          setSeacrh(e.target.value);
        }, 500)}
      />
      {result
        ? result.data.weather.map((weather) => (
            <Box
              key={weather.id}
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <Typography variant="h4" component="h2">
                  {weather.main}
                </Typography>
                <Typography variant="h5" component="h2">
                  {weather.description}
                </Typography>
              </div>
              <img src={imageUrl + "/" + weather.icon + "@2x.png"} />
            </Box>
          ))
        : null}
    </Box>
  );
}
