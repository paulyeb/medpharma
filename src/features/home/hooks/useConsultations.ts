import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ConsultationServices } from '../services';
import { ConsultationProps } from '../../../utils/types';

export const useConsultations = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['consultations'],
    queryFn: () => ConsultationServices.getAllConsultations(),
  });

  return {
    data: data?.data as ConsultationProps[],
    isPending,
    error,
  };
};
