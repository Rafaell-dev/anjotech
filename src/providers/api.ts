import axios, { AxiosInstance } from 'axios';
const dotenv = require('dotenv');
dotenv.config();

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const api: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000,
});

export default api;
