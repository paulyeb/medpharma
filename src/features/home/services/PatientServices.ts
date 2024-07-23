import { PatientURIResource } from '../../../utils/APIResouces';
import { _get, _post } from '../../../utils/query';
import { AddPatientsProps } from '../../../utils/types';

export const addPatient = async (payload: AddPatientsProps) => {
  return await _post(PatientURIResource.addPatient, payload);
};

export const getAllPatients = async () => {
  return await _get(PatientURIResource.getAllPatients);
};
