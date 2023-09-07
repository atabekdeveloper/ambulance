import { api } from 'src/api';

import { SRO } from '../index.types';

import { TAuthLogin, TAuthLoginGet } from './auth.types';

export const fetchAuthLogin = async (values: TAuthLogin): Promise<SRO<TAuthLoginGet>> => {
  const res = await api.post('/auth/login', values);
  return res.data;
};
