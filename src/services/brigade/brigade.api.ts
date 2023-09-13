/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import Pusher from 'pusher-js';
import React from 'react';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeleteBrigade,
  fetchEditBrigade,
  fetchGetBrigades,
  fetchGetRouteBrigades,
  fetchPostBrigade,
} from './brigade.services';

const useGetBrigadesQuery = () =>
  useQuery({
    queryFn: () => fetchGetBrigades(),
    queryKey: ['brigade'],
    onError: (err: Error) => message.error(err.message),
  });

const useGetRouterBrigadesPusherQuery = () => {
  const queryClient = useQueryClient();
  React.useEffect(() => {
    const pusher = new Pusher('a19af38bf0ee06f0149f', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('location');

    const handleCall = (event: any) => {
      const { data } = event;
      console.log('Brigade', event);
      queryClient.setQueryData(['brigade-router'], (oldData: any) => {
        const newArr = [data, ...oldData.data];
        const newArr2 = [...oldData.data].filter((el) => el.id !== data.id);
        const result = newArr.reduce((unique, o) => {
          if (!unique.some((obj: any) => obj.id === o.id)) {
            unique.push(o);
          }
          return unique;
        }, []);
        return { data: event.method === 'DELETE' ? newArr2 : result };
      });
    };

    channel.bind('LocationSent', handleCall);

    return () => {
      channel.unbind('LocationSent', handleCall);
      pusher.unsubscribe('location');
    };
  }, [queryClient]);
};

const useGetRouterBrigadesQuery = () => {
  useGetRouterBrigadesPusherQuery();
  return useQuery({
    queryFn: () => fetchGetRouteBrigades(),
    queryKey: ['brigade-router'],
    onError: (err: Error) => message.error(err.message),
  });
};

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
  useGetRouterBrigadesQuery,
  usePostBrigadeMutation,
};
