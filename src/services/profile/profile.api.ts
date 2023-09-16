import { message } from 'antd';
import { useActions } from 'src/hooks';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchEditProfile, fetchGetProfile } from './profile.services';

const useGetProfileQuery = () => {
  const { logOut } = useActions();
  return useQuery({
    queryFn: () => fetchGetProfile(),
    queryKey: ['profile'],
    onError: (err: Error) => {
      message.error(err.message);
      logOut();
    },
  });
};

const useEditProfileMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditProfile,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['profile'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export { useEditProfileMutation, useGetProfileQuery };
