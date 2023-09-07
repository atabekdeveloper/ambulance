import axios from 'axios';
import Cookies from 'js-cookie';
import { baseUrl } from 'src/config/url.config';

const api = axios.create({ baseURL: baseUrl });

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${Cookies.get('token')}`;
  return config;
};
api.interceptors.request.use(authInterceptor);

export { api };
