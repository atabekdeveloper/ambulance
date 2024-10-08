import { message } from 'antd';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchDeleteCallBrigade, fetchPostCallBrigade } from './call-brigade.services';

const usePostCallBrigadeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostCallBrigade,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call-brigade'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};
const useDeleteCallBrigadeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteCallBrigade,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call-brigade'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};
export { useDeleteCallBrigadeMutation, usePostCallBrigadeMutation };
