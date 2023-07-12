import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const clientApiAxios = axios.create({
  baseURL,
  timeout: 1000,
});

clientApiAxios.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('token');
  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default clientApiAxios;
