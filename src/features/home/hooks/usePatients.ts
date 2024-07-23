import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { PatientServices } from '../services';

export const usePatients = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['patient'],
    queryFn: () => PatientServices.getAllPatients(),
  });

  return {
    data,
    isPending,
    error,
  };
};
