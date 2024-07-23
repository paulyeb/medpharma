import { ConsultationURIResource } from '../../../utils/APIResouces';
import { _get, _post } from '../../../utils/query';
import { ConsultationProps } from '../../../utils/types';

export const addConsultation = async (payload: ConsultationProps) => {
  return await _post(ConsultationURIResource.addConsultation, payload);
};

export const getAllConsultations = async () => {
  return await _get(ConsultationURIResource.getAllConsultations);
};
