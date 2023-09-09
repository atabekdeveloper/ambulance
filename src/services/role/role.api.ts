/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useQuery } from '@tanstack/react-query';

import { fetchGetRoles } from './role.services';

const useGetRolesQuery = () =>
  useQuery({
    queryFn: () => fetchGetRoles(),
    queryKey: ['role'],
    onError: (err: Error) => message.error(err.message),
  });

export { useGetRolesQuery };
