import { api } from 'src/api';

import { SR, SRO, TMessage } from '../index.types';

import { TUserChange, TUserItem } from './user.types';

export const fetchGetUsers = async (): Promise<SR<TUserItem>> => {
  const res = await api.get('/users');
  return res.data;
};
export const fetchPostUser = async (values: TUserChange): Promise<SRO<TUserItem>> => {
  const res = await api.post('/users', values);
  return res.data;
};
export const fetchEditUser = async (values: TUserChange): Promise<SRO<TUserItem>> => {
  const res = await api.post(`/users/${values.id}`, values);
  return res.data;
};
export const fetchDeleteUser = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/users/${id}`);
  return res.data;
};
