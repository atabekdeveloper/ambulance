import { api } from 'src/api';

import { SR } from '../index.types';

import { TRoleItem } from './role.types';

export const fetchGetRoles = async (): Promise<SR<TRoleItem>> => {
  const res = await api.get('/roles');
  return res.data;
};
