import React, { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Sizes, useColors } from '../../utils';
import { Button, IconSearch, SecondaryListView } from '../../components';
import {} from 'react-native-gesture-handler';
import { PatientsCard } from './components';
import { usePatients } from '../home/hooks';
import { PatientProps } from '../../utils/types';
export const PatientsScreen = () => {
  const c = useColors();
  const { data, isPending, error } = usePatients();
  const [patients, setPatients] = React.useState<PatientProps[]>([]);

  useEffect(() => {
    if (data) {
      setPatients(data.data);
    }
  }, [data]);
  return (
    <View style={{ flex: 1, backgroundColor: c.background, paddingHorizontal: Sizes.largepadding }}>
      <SecondaryListView
        headerOptions={{
          title: 'Patients',
          showBackButton: false,
          headerRight: (
            <TouchableOpacity>
              <IconSearch size={25} />
            </TouchableOpacity>
          ),
        }}>
        <View style={{ paddingVertical: 20 }}>
          {patients?.map((data) => (
            <PatientsCard
              key={data?.medPharmaCode}
              firstname={data?.firstname}
              lastname={data?.lastname}
              dateOfBirth={data?.dateOfBirth}
              medPharmaCode={data?.medPharmaCode}
            />
          ))}
        </View>
      </SecondaryListView>
      <View style={{ paddingVertical: 10 }}>
        <Button variant="outline" title="Add New Patient" />
      </View>
    </View>
  );
};
