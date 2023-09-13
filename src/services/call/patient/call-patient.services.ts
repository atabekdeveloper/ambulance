import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TCallPatientItem } from './call-patient.types';

export const fetchGetCallPatient = async (id: number): Promise<SR<TCallPatientItem>> => {
  const res = await api.get(`/calls/${id}/patients`);
  return res.data;
};
export const fetchPostCallPatient = async (
  values: TCallPatientItem,
): Promise<SRO<TCallPatientItem>> => {
  const res = await api.post(`/calls/${values.id}/patients`, values);
  return res.data;
};
export const fetchEditCallPatient = async (
  values: TCallPatientItem,
): Promise<SRO<TCallPatientItem>> => {
  const res = await api.put(`/calls/${values.id}/patients`, values);
  return res.data;
};
export const fetchDeleteCallPatient = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/calls/${id}/patients`);
  return res.data;
};
