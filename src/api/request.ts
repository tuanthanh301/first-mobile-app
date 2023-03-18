import axios from 'axios';

const request = axios.create({
  baseURL: 'http://192.168.1.9:3000',
  timeout: 8000,
  headers: {Accept: '*/*'},
});

// request
request.interceptors.request.use(
  async (config: any) => {
    const token = 'abcdefj';
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error: any) => {
    return error;
  },
);

// response
request.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async (error: any) => {
    return error;
  },
);

export default request;