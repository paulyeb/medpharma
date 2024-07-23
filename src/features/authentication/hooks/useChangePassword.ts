import { useMutation } from '@tanstack/react-query';
import { AuthService } from '../services';
import { ChangePasswordProps } from '../../../utils/types';

export const usechangePassword = () => {
  const { data, isPending, error, mutate } = useMutation({
    mutationKey: ['changePassword'],
    mutationFn: (payload: ChangePasswordProps) => AuthService.changePassword(payload),
    onSuccess: (response) => {
      console.log('res', response);
    },
    onError: (error) => {
      console.error('error', error);
    },
  });

  const changePassword = (payload: ChangePasswordProps) => {
    mutate(payload);
  };
  return {
    changePassword,
    data,
    isPending,
    error,
  };
};
