import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, FormInput, Pack, SecondaryListView, TextArea, Txt } from '../../components';
import { Sizes, useColors, useNav } from '../../utils';
import List, { ListAnnex } from '../../components/list/List';
import { ConsultationType, PatientProps } from '../../utils/types';
import { PatientsModal } from '../patients/components';
import { HomeScreens } from '../../utils/NavigationKeys';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useAccount } from '../authentication/hooks';
import { useAddConsultation } from './hooks';

export const BookConsultationScreen = () => {
  const [showConsultationTypes, setShowConsultationTypes] = useState(false);
  const [showPatients, setShowPatients] = useState(false);
  const [patient, setPatient] = useState<PatientProps>(null);
  const [consultationType, setConsultationType] = useState<ConsultationType>(null);
  const [note, setNote] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');
  const [date, setDate] = useState(new Date().getTime());

  const c = useColors();
  const { navigate } = useNav();
  const { _id } = useAccount();
  const { addConsultation, data, isPending, error } = useAddConsultation();

  const Label = ({ label }: { label: string }) => {
    return (
      <Txt size={15} weight="medium">
        {label}
      </Txt>
    );
  };

  useEffect(() => {
    if (data?.status === 'success') {
      setPatient(null);
      setConsultationType(null);
      setNote('');
      setMedicalCondition('');
      setDate(new Date().getTime());
    }
  }, [data]);

  const handleSubmit = () => {
    addConsultation({
      patient: patient?._id,
      consultationType,
      note,
      medicalCondition,
      date,
      createdBy: _id,
    });
  };

  return (
    <View style={{ paddingHorizontal: Sizes.largepadding, flex: 1, backgroundColor: c.background }}>
      <SecondaryListView headerOptions={{ title: 'Add Consultation' }}>
        <View style={{ marginTop: Sizes.largepadding, flex: 1 }}>
          <View style={{ gap: 10, marginBottom: 20 }}>
            <Label label="Select Patient" />
            <ListAnnex
              title={patient && `${patient?.firstname} ${patient?.lastname}`}
              subtitle={patient ? '' : 'Select Patient'}
              rounded
              chevron
              onPress={() => setShowPatients(true)}
            />
          </View>

          <View style={{ gap: 10, marginBottom: 30 }}>
            <Label label="Consultation Type" />
            <Pack marginBottom={0}>
              <List
                divider={showConsultationTypes ? true : false}
                dividerColor={c.borderColor2}
                title={consultationType && consultationType}
                subtitle={consultationType ? '' : 'Select consultation'}
                chevron
                onPress={() => setShowConsultationTypes(!showConsultationTypes)}
              />
              {showConsultationTypes ? (
                <>
                  <List
                    divider
                    dividerColor={c.borderColor2}
                    onPress={() => {
                      setConsultationType(ConsultationType.DIAGNOSIS);
                      setShowConsultationTypes(false);
                    }}
                    subtitle={'Advice on diagnosis'}
                  />
                  <List
                    divider
                    dividerColor={c.borderColor2}
                    onPress={() => {
                      setConsultationType(ConsultationType.REVIEW);
                      setShowConsultationTypes(false);
                    }}
                    subtitle={'Review'}
                  />
                  <List
                    divider
                    dividerColor={c.borderColor2}
                    onPress={() => {
                      setConsultationType(ConsultationType.TEST);
                      setShowConsultationTypes(false);
                    }}
                    subtitle={'Special Test'}
                  />
                  <List
                    onPress={() => {
                      setConsultationType(ConsultationType.SURGERY);
                      setShowConsultationTypes(false);
                    }}
                    subtitle={'Special Procedures or Surgery'}
                  />
                </>
              ) : null}
            </Pack>
          </View>

          <View style={{ gap: 10, marginBottom: 20 }}>
            <Label label="Medical Condition" />
            <FormInput
              value={medicalCondition}
              onChangeText={(value) => setMedicalCondition(value)}
              placeholder={'Enter condition'}
            />
          </View>

          <View
            style={{
              gap: 10,
              marginBottom: 20,

              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Label label="Set Date and Time" />
            <RNDateTimePicker
              value={new Date(date)}
              onChange={(value) => setDate(value.nativeEvent.timestamp)}
              style={{ marginLeft: -10 }}
              mode="datetime"
            />
          </View>

          <View style={{ gap: 10, marginBottom: 20 }}>
            <Label label="Note" />
            <TextArea
              value={note}
              placeholder="Enter Description"
              onChangeText={(value) => setNote(value)}
              style={{ backgroundColor: c.tintBackgroundColor, borderRadius: 10 }}
            />
          </View>
        </View>

        <View style={{ marginTop: 100, marginBottom: 40 }}>
          <Button
            loading={isPending}
            title="Create consultation"
            disabled={!patient || !consultationType || !medicalCondition || !date}
            onPress={handleSubmit}
          />
        </View>
      </SecondaryListView>
      <PatientsModal
        visible={showPatients}
        onClose={() => setShowPatients(false)}
        onSave={(patient) => setPatient(patient as PatientProps)}
      />
    </View>
  );
};
