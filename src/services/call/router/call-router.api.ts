/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import Pusher from 'pusher-js';
import React from 'react';

import { useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchGetNewCalls, fetchGetReprocessedCalls } from './call-router.services';

const useGetRouterNewCallsPusherQuery = () => {
  const queryClient = useQueryClient();
  React.useEffect(() => {
    const pusher = new Pusher('a19af38bf0ee06f0149f', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('call');

    const handleCall = (event: any) => {
      const { data } = event;
      queryClient.setQueryData(['call-new'], (oldData: any) => {
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

    channel.bind('CallSent', handleCall);

    return () => {
      channel.unbind('CallSent', handleCall);
      pusher.unsubscribe('call');
    };
  }, [queryClient]);
};

const useGetRouterReprocessedCallsPusherQuery = () => {
  const queryClient = useQueryClient();
  React.useEffect(() => {
    const pusher = new Pusher('a19af38bf0ee06f0149f', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('call-reprocessed');

    const handleCall = (event: any) => {
      const { data } = event;
      queryClient.setQueryData(['call-reprocessed'], (oldData: any) => {
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

    channel.bind('CallReprocessedSent', handleCall);

    return () => {
      channel.unbind('CallReprocessedSent', handleCall);
      pusher.unsubscribe('call-reprocessed');
    };
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
const useGetReprocessedCallsQuery = () => {
  useGetRouterReprocessedCallsPusherQuery();
  return useQuery({
    queryFn: () => fetchGetReprocessedCalls(),
    queryKey: ['call-reprocessed'],
    onError: (err: Error) => message.error(err.message),
  });
};

export { useGetNewCallsQuery, useGetReprocessedCallsQuery };
