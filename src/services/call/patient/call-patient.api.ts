/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeleteCallPatient,
  fetchEditCallPatient,
  fetchGetCallPatient,
  fetchPostCallPatient,
} from './call-patient.services';

const useGetCallPatientsQuery = (id: number) =>
  useQuery({
    queryFn: () => fetchGetCallPatient(id),
    queryKey: ['call-patient'],
    onError: (err: Error) => message.error(err.message),
  });

const usePostCallPatientMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostCallPatient,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call-patient'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
  });
};

const useEditCallPatientMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditCallPatient,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call-patient'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
  });
};

const useDeleteCallPatientMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteCallPatient,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['call-patient'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
  });
};

export {
  useDeleteCallPatientMutation,
  useEditCallPatientMutation,
  useGetCallPatientsQuery,
  usePostCallPatientMutation,
};
