import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TBrigadeChange, TBrigadeItem, TBrigadeRouterItem } from './brigade.types';

export const fetchGetBrigades = async (): Promise<SR<TBrigadeItem>> => {
  const res = await api.get('/brigades');
  return res.data;
};
export const fetchGetRouteBrigades = async (): Promise<SR<TBrigadeRouterItem>> => {
  const res = await api.get('/router/brigades');
  return res.data;
};
export const fetchPostBrigade = async (values: TBrigadeChange): Promise<SRO<TBrigadeItem>> => {
  const res = await api.post('/brigades', values);
  return res.data;
};
export const fetchEditBrigade = async (values: TBrigadeChange): Promise<SRO<TBrigadeItem>> => {
  const res = await api.put(`/brigades/${values.id}`, values);
  return res.data;
};
export const fetchDeleteBrigade = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/brigades/${id}`);
  return res.data;
};
