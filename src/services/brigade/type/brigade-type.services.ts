/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParamItem, TMessage } from 'src/services/index.types';

export const fetchGetBrigadeTypes = async (): Promise<SR<TGetParamItem>> => {
  const res = await api.get('/brigade-types');
  return res.data;
};
export const fetchPostBrigadeType = async (values: TGetParamItem): Promise<SRO<TGetParamItem>> => {
  const res = await api.post('/brigade-types', values);
  return res.data;
};
export const fetchEditBrigadeType = async (values: TGetParamItem): Promise<SRO<TGetParamItem>> => {
  const res = await api.put(`/brigade-types/${values.id}`, values);
  return res.data;
};
export const fetchDeleteBrigadeType = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/brigade-types/${id}`);
  return res.data;
};
