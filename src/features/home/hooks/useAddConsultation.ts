import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { ConsultationProps } from '../../../utils/types';
import { ConsultationServices } from '../services';

export const useAddConsultation = () => {
  const { data, isPending, error, mutate } = useMutation({
    mutationKey: ['addConsultation'],
    mutationFn: (payload: ConsultationProps) => ConsultationServices.addConsultation(payload),
    onSuccess: (response) => {
      console.log('res', response);
    },
    onError: (error) => {
      console.error('error', error);
    },
  });
  const addConsultation = (payload: ConsultationProps) => {
    return mutate(payload);
  };
  return {
    data,
    isPending,
    error,
    addConsultation,
  };
};
