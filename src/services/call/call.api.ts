/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchDeleteCall, fetchEditCall, fetchGetCalls, fetchPostCall } from './call.services';

const useGetCallsQuery = () =>
  useQuery({
    queryFn: () => fetchGetCalls(),
    queryKey: ['call'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const usePostCallMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostCall,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call-new'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditCallMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditCall,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call-new'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteCallMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteCall,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export { useDeleteCallMutation, useEditCallMutation, useGetCallsQuery, usePostCallMutation };
