import { api } from 'src/api';

import { SR, SRO, TMessage } from '../index.types';

import { TBrigadeChange, TBrigadeItem } from './brigade.types';

export const fetchGetBrigades = async (): Promise<SR<TBrigadeItem>> => {
  const res = await api.get('/brigades');
  return res.data;
};
export const fetchPostBrigade = async (values: TBrigadeChange): Promise<SRO<TBrigadeItem>> => {
  const res = await api.post('/brigades', values);
  return res.data;
};
export const fetchEditBrigade = async (values: TBrigadeChange): Promise<SRO<TBrigadeItem>> => {
  const res = await api.post(`/brigades/${values.id}`, values);
  return res.data;
};
export const fetchDeleteBrigade = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/brigades/${id}`);
  return res.data;
};
