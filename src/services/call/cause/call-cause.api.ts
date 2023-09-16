/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeleteCallCause,
  fetchEditCallCause,
  fetchGetCallCauses,
  fetchPostCallCause,
} from './call-cause.services';

const useGetCallCausesQuery = () =>
  useQuery({
    queryFn: () => fetchGetCallCauses(),
    queryKey: ['call-cause'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const usePostCallCauseMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostCallCause,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call-cause'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditCallCauseMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditCallCause,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call-cause'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteCallCauseMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteCallCause,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call-cause'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};
export {
  useDeleteCallCauseMutation,
  useEditCallCauseMutation,
  useGetCallCausesQuery,
  usePostCallCauseMutation,
};
