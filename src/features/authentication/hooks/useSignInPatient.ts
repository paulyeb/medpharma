import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { PatientLoginRequest } from '../../../utils/types';
import { AuthService } from '../services';
import { useCookie } from './useCookie';

export const useSignInPatient = () => {
  const { setCookie } = useCookie();

  const { data, isPending, error, mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: (payload: PatientLoginRequest) => AuthService.loginPatient(payload),
    onSuccess: (response) => {
      console.log('res', response);
    },
    onError: (error) => {
      console.log('hurry', error);
    },
  });

  const loginPatient = (payload: PatientLoginRequest) => {
    mutate(payload);
  };

  const setCookies = async () => {
    return await setCookie(data?.token, data?.user);
  };

  return {
    setPCookies: setCookies,
    loginPatient,
    patient: data,
    loadingPatient: isPending,
    patientError: error,
  };
};
