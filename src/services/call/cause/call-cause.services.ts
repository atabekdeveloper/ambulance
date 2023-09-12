/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParamItem, TMessage } from 'src/services/index.types';

export const fetchGetCallCauses = async (): Promise<SR<TGetParamItem>> => {
  const res = await api.get('/call-causes');
  return res.data;
};
export const fetchPostCallCause = async (values: { name: string }): Promise<SRO<TGetParamItem>> => {
  const res = await api.post('/call-causes', values);
  return res.data;
};
export const fetchEditCallCause = async (values: TGetParamItem): Promise<SRO<TGetParamItem>> => {
  const res = await api.put(`/call-causes/${values.id}`, values);
  return res.data;
};
export const fetchDeleteCallCause = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/call-causes/${id}`);
  return res.data;
};
