import { api } from 'src/api';
import { SRO, TMessage } from 'src/services/index.types';

import { TEditProfile, TProfileItem } from './profile.types';

export const fetchGetProfile = async (): Promise<SRO<TProfileItem>> => {
  const res = await api.get('/profile');
  return res.data;
};
export const fetchEditProfile = async (values: TEditProfile): Promise<TMessage> => {
  const res = await api.put('/profile', values);
  return res.data;
};
