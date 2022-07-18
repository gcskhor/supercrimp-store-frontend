import axios from 'axios';

axios.defaults.withCredentials = true;

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://supercrimp.herokuapp.com'
    : 'http://localhost:3004';

export const BackendCall = axios.create({ baseURL });
