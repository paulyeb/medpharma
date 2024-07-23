import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { RegisterUserRequest } from '../../../utils/types';
import { AuthService } from '../services';
import { useCookie } from './useCookie';

export const useSignUp = () => {
  const { setCookie } = useCookie();
  const { data, isPending, error, mutate } = useMutation({
    mutationKey: ['register'],
    mutationFn: (payload: RegisterUserRequest) => AuthService.register(payload),
    onSuccess: (response) => {
      console.log('res', response);
      // setToken(response?.token);
      // setSessionUser(response?.user);
      // refresh();
    },
    onError: (error) => {
      console.log('hurry', error);
    },
  });

  const register = (payload: RegisterUserRequest) => {
    mutate(payload);
  };

  const setCookies = async () => {
    return await setCookie(data?.token, data?.user);
  };

  return {
    setCookies,
    register,
    data,
    isPending,
    error,
  };
};
