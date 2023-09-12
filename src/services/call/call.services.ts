import { api } from 'src/api';

import { SR, SRO, TMessage } from '../index.types';

import { TCallChange, TCallItem } from './call.types';

export const fetchGetCalls = async (): Promise<SR<TCallItem>> => {
  const res = await api.get('/calls');
  return res.data;
};
export const fetchPostCall = async (values: TCallChange): Promise<SRO<TCallItem>> => {
  const res = await api.post('/calls', values);
  return res.data;
};
export const fetchEditCall = async (values: TCallChange): Promise<SRO<TCallItem>> => {
  const res = await api.put(`/calls/${values.id}`, values);
  return res.data;
};
export const fetchDeleteCall = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/calls/${id}`);
  return res.data;
};
