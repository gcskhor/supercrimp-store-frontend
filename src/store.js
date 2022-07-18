import axios from 'axios';

axios.defaults.withCredentials = true;

const baseURL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3004';

export default axios.create({ baseURL });

export const BACKEND_URL =
  window.location.origin === 'http://localhost:3000'
    ? 'http://localhost:3004'
    : 'https://supercrimp.herokuapp.com';
