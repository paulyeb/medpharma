import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { StaffLoginRequest } from '../../../utils/types';
import { AuthService } from '../services';
import { useCookie } from './useCookie';

export const useSignInStaff = () => {
  const { setCookie } = useCookie();

  const { data, isPending, error, mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: (payload: StaffLoginRequest) => AuthService.loginUser(payload),
    onSuccess: (response) => {
      console.log('res', response);
    },
    onError: (error) => {
      console.log('hurry', error);
    },
  });

  const loginStaff = (payload: StaffLoginRequest) => {
    mutate(payload);
  };

  const setCookies = async () => {
    return await setCookie(data?.token, data?.user);
  };

  return {
    setCookies,
    loginStaff,
    data,
    isPending,
    error,
  };
};
