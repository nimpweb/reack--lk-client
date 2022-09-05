import axios from 'axios';
import { useSelector } from 'react-redux';

const $api = axios.create({
  baseURL: 'http://localhost:3002/api',
  // baseURL: process.env.REACT_APP_API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    process.env.REACT_APP_LOCAL_STORAGE,
  )}`;
  // const auth = useSelector((store) => store.auth);
  // config.headers.Authorization = `Bearer ${auth?.token}`;
  return config;
});

export default $api;
