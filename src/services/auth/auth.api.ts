import { message } from 'antd';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchAuthLogin } from './auth.services';

const useAuthLoginMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchAuthLogin,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['auth'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
  });
};

export { useAuthLoginMutation };
