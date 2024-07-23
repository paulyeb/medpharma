import React, { useEffect } from 'react';
import { useColors } from '../../../utils';
import { PatientsCard } from './PatientsCard';
import { PatientProps, SpecificModalProps } from '../../../utils/types';
import { usePatients } from '../../home/hooks';
import { SelectionModal } from './SelectionModal';

export const PatientsModal = ({ visible, onClose, onSave }: SpecificModalProps) => {
  const c = useColors();
  const [selectedPatient, setSelectedPatient] = React.useState<PatientProps>(null);
  const [patients, setPatients] = React.useState<PatientProps[]>([]);
  const { data, isPending, error } = usePatients();
  useEffect(() => {
    if (data) {
      setPatients(data.data);
    }
  }, [data]);

  const rearrangeOnSelect = (patient: PatientProps) => {
    const unselected = data?.data?.filter(
      (p: PatientProps) => p?.medPharmaCode !== patient?.medPharmaCode,
    );
    return setPatients([patient, ...unselected]);
  };

  return (
    <SelectionModal
      title={'Select Patient'}
      onClose={onClose}
      noSave
      visible={visible}
      options={
        <>
          {patients?.map((patient: PatientProps) => (
            <PatientsCard
              onPress={() => {
                setSelectedPatient(patient);
                onSave(patient);
                onClose();
                rearrangeOnSelect(patient);
              }}
              selected={selectedPatient?.medPharmaCode === patient.medPharmaCode}
              key={patient?.medPharmaCode}
              firstname={patient?.firstname}
              lastname={patient?.lastname}
              dateOfBirth={patient?.dateOfBirth}
              medPharmaCode={patient?.medPharmaCode}
            />
          ))}
        </>
      }></SelectionModal>
  );
};
