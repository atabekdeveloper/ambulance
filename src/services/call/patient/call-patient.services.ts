import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TCallPatientDeleteParams, TCallPatientItem } from './call-patient.types';

export const fetchGetCallPatient = async (id: number): Promise<SR<TCallPatientItem>> => {
  const res = await api.get(`/calls/${id}/patients`);
  return res.data;
};
export const fetchPostCallPatient = async (
  values: TCallPatientItem,
): Promise<SRO<TCallPatientItem>> => {
  const res = await api.post(`/calls/${values.callId}/patients`, values);
  return res.data;
};
export const fetchEditCallPatient = async (
  values: TCallPatientItem,
): Promise<SRO<TCallPatientItem>> => {
  const res = await api.put(`/calls/${values.callId}/patients/${values.id}`, values);
  return res.data;
};
export const fetchDeleteCallPatient = async (
  values: TCallPatientDeleteParams,
): Promise<TMessage> => {
  const res = await api.delete(`/calls/${values.callId}/patients/${values.patientId}`);
  return res.data;
};
