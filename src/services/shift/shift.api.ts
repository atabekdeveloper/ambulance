/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchDeleteShift, fetchEditShift, fetchGetShifts, fetchPostShift } from './shift.services';

const useGetShiftsQuery = () =>
  useQuery({
    queryFn: () => fetchGetShifts(),
    queryKey: ['shift'],
    onError: (err: Error) => message.error(err.message),
  });

const usePostShiftMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostShift,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['shift'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
  });
};

const useEditShiftMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditShift,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['shift'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
  });
};

const useDeleteShiftMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteShift,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['shift'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
  });
};

export { useDeleteShiftMutation, useEditShiftMutation, useGetShiftsQuery, usePostShiftMutation };
