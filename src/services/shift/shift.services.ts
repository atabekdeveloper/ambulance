import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TShiftChange, TShiftItem } from './shift.types';

export const fetchGetShifts = async (): Promise<SR<TShiftItem>> => {
  const res = await api.get('/shifts');
  return res.data;
};
export const fetchPostShift = async (values: TShiftChange): Promise<SRO<TShiftItem>> => {
  const res = await api.post('/shifts', values);
  return res.data;
};
export const fetchEditShift = async (values: TShiftChange): Promise<SRO<TShiftItem>> => {
  const res = await api.put(`/shifts/${values.id}`, values);
  return res.data;
};
export const fetchDeleteShift = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/shifts/${id}`);
  return res.data;
};
