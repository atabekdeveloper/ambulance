import { api } from 'src/api';

import { SR, SRO, TMessage } from '../index.types';

import { TCallCauseItem, TCallChange, TCallItem } from './call.types';

export const fetchGetCalls = async (): Promise<SR<TCallItem>> => {
  const res = await api.get('/calls');
  return res.data;
};
export const fetchGetCallCauses = async (): Promise<SR<TCallCauseItem>> => {
  const res = await api.get('/call-causes');
  return res.data;
};
export const fetchGetNewCalls = async (): Promise<SR<TCallItem>> => {
  const res = await api.get('/router/new/calls');
  return res.data;
};
export const fetchGetReprocessedCalls = async (): Promise<SR<TCallItem>> => {
  const res = await api.get('/router/reprocessed/calls');
  return res.data;
};
export const fetchPostCall = async (values: TCallChange): Promise<SRO<TCallItem>> => {
  const res = await api.post('/calls', values);
  return res.data;
};
export const fetchPostCallCause = async (values: {
  name: string;
}): Promise<SRO<TCallCauseItem>> => {
  const res = await api.post('/call-causes', values);
  return res.data;
};
export const fetchEditCall = async (values: TCallChange): Promise<SRO<TCallItem>> => {
  const res = await api.put(`/calls/${values.id}`, values);
  return res.data;
};
export const fetchEditCallCause = async (values: TCallCauseItem): Promise<SRO<TCallCauseItem>> => {
  const res = await api.put(`/call-causes/${values.id}`, values);
  return res.data;
};
export const fetchDeleteCall = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/calls/${id}`);
  return res.data;
};
export const fetchDeleteCallCause = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/call-causes/${id}`);
  return res.data;
};
