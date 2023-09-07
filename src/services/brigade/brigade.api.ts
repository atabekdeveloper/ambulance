/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeleteBrigade,
  fetchEditBrigade,
  fetchGetBrigades,
  fetchPostBrigade,
} from './brigade.services';

const useGetBrigadesQuery = () =>
  useQuery({
    queryFn: () => fetchGetBrigades(),
    queryKey: ['brigade'],
    onError: (err: Error) => message.error(err.message),
  });

const usePostBrigadeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostBrigade,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['brigade'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
  });
};

const useEditBrigadeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditBrigade,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['brigade'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
  });
};

const useDeleteBrigadeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteBrigade,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['brigade'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
  });
};

export {
  useDeleteBrigadeMutation,
  useEditBrigadeMutation,
  useGetBrigadesQuery,
  usePostBrigadeMutation,
};
