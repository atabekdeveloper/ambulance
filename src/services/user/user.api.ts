/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchDeleteUser, fetchEditUser, fetchGetUsers, fetchPostUser } from './user.services';

const useGetUsersQuery = () =>
  useQuery({
    queryFn: () => fetchGetUsers(),
    queryKey: ['user'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const usePostUserMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostUser,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['user'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditUserMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditUser,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['user'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteUserMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteUser,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['user'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export { useDeleteUserMutation, useEditUserMutation, useGetUsersQuery, usePostUserMutation };
