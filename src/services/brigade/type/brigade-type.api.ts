/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeleteBrigadeType,
  fetchEditBrigadeType,
  fetchGetBrigadeTypes,
  fetchPostBrigadeType,
} from './brigade-type.services';

const useGetBrigadeTypesQuery = () =>
  useQuery({
    queryFn: () => fetchGetBrigadeTypes(),
    queryKey: ['brigade-type'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const usePostBrigadeTypeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostBrigadeType,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['brigade-type'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditBrigadeTypeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditBrigadeType,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['brigade-type'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteBrigadeTypeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteBrigadeType,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['brigade-type'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useDeleteBrigadeTypeMutation,
  useEditBrigadeTypeMutation,
  useGetBrigadeTypesQuery,
  usePostBrigadeTypeMutation,
};
