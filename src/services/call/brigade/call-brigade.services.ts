import { api } from 'src/api';
import { TMessage } from 'src/services/index.types';

import { TCallBrigadeParamsChange } from './call-brigade.types';

export const fetchPostCallBrigade = async (values: TCallBrigadeParamsChange): Promise<TMessage> => {
  const res = await api.post(`/calls/${values.callId}/brigades/${values.brigadeId}`);
  return res.data;
};
export const fetchDeleteCallBrigade = async (
  values: TCallBrigadeParamsChange,
): Promise<TMessage> => {
  const res = await api.delete(`/calls/${values.callId}/brigades/${values.brigadeId}`);
  return res.data;
};
