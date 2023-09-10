/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import Pusher from 'pusher-js';
import React from 'react';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeleteCall,
  fetchDeleteCallCause,
  fetchEditCall,
  fetchEditCallCause,
  fetchGetCallCauses,
  fetchGetCalls,
  fetchGetNewCalls,
  fetchGetReprocessedCalls,
  fetchPostCall,
  fetchPostCallCause,
} from './call.services';

const useGetCallsQuery = () =>
  useQuery({
    queryFn: () => fetchGetCalls(),
    queryKey: ['call'],
    onError: (err: Error) => message.error(err.message),
  });

const useGetCallCausesQuery = () =>
  useQuery({
    queryFn: () => fetchGetCallCauses(),
    queryKey: ['call-cause'],
    onError: (err: Error) => message.error(err.message),
  });

const useGetRouterNewCallsPusherQuery = () => {
  const queryClient = useQueryClient();
  React.useEffect(() => {
    const pusher = new Pusher('a19af38bf0ee06f0149f', {
      cluster: 'eu',
    });
    const channel = pusher.subscribe('call');
    channel.bind('CallSent', (event: any) => {
      const { data } = event;
      queryClient.setQueryData(['call-new'], (oldData: any) => {
        const newArr = [data, ...oldData.data];
        const result = newArr.reduce((unique, o) => {
          if (!unique.some((obj: any) => obj.id === o.id)) {
            unique.push(o);
          }
          return unique;
        }, []);
        return { data: result };
      });
    });
  }, [queryClient]);
};

const useGetNewCallsQuery = () => {
  useGetRouterNewCallsPusherQuery();
  return useQuery({
    queryFn: () => fetchGetNewCalls(),
    queryKey: ['call-new'],
    onError: (err: Error) => message.error(err.message),
  });
};

const useGetReprocessedCallsQuery = () =>
  useQuery({
    queryFn: () => fetchGetReprocessedCalls(),
    queryKey: ['call-reprocessed'],
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

const usePostCallCauseMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostCallCause,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call-cause'] });
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

const useEditCallCauseMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditCallCause,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call-cause'] });
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

const useDeleteCallCauseMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteCall,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call-cause'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
  });
};

export {
  useDeleteCallCauseMutation,
  useDeleteCallMutation,
  useEditCallCauseMutation,
  useEditCallMutation,
  useGetCallCausesQuery,
  useGetCallsQuery,
  useGetNewCallsQuery,
  useGetReprocessedCallsQuery,
  usePostCallCauseMutation,
  usePostCallMutation,
};
