import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const clientApiAxios = axios.create({
  baseURL,
  timeout: 1000,
});

/*clientApiAxios.interceptors.request.use((config) => {
  config.params.appid = localStorage.getItem('token');
  return config;
});*/

export default clientApiAxios;
