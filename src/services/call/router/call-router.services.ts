import { api } from 'src/api';
import { SR } from 'src/services/index.types';

import { TCallItem } from '../call.types';

export const fetchGetNewCalls = async (): Promise<SR<TCallItem>> => {
  const res = await api.get('/router/new/calls');
  return res.data;
};
export const fetchGetReprocessedCalls = async (): Promise<SR<TCallItem>> => {
  const res = await api.get('/router/reprocessed/calls');
  return res.data;
};
