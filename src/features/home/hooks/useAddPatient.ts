import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { PatientServices } from '../services';
import { AddPatientsProps } from '../../../utils/types';

export const useAddPatient = () => {
  const { data, isPending, error, mutate } = useMutation({
    mutationKey: ['patient'],
    mutationFn: (payload: AddPatientsProps) => PatientServices.addPatient(payload),
    onSuccess: (response) => {
      console.log('res', response);
    },
    onError: (error) => {
      console.error('error', error);
    },
  });

  const addPatient = (payload: AddPatientsProps) => {
    mutate(payload);
  };
  return {
    data,
    isPending,
    error,
    addPatient,
  };
};
