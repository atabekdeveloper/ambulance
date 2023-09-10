/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import Pusher from 'pusher-js';
import React from 'react';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchDeleteCall, fetchEditCall, fetchGetCalls, fetchPostCall } from './call.services';

const useGetCallsQuery = () =>
  useQuery({
    queryFn: () => fetchGetCalls(),
    queryKey: ['call'],
    onError: (err: Error) => message.error(err.message),
  });

const usePostCallMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostCall,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
  });
};

const useEditCallMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditCall,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
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
    onError: (err: Error) => message.error(err.message),
  });
};

export { useDeleteCallMutation, useEditCallMutation, useGetCallsQuery, usePostCallMutation };
