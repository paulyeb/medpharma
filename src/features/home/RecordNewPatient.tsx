import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, FormInput, Pack, SecondaryListView, Txt } from '../../components';
import { Sizes, useColors } from '../../utils';
import List from '../../components/list/List';

import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Gender } from '../../utils/types';
import { useAddPatient } from './hooks';
import { useAccount } from '../authentication/hooks';

export const RecordNewPAtientScreen = () => {
  const { _id } = useAccount();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState(new Date().getTime());
  const [showGender, setShowGender] = useState(false);
  const [gender, setGender] = useState<Gender>(null);

  const { data, isPending, error, addPatient } = useAddPatient();

  const c = useColors();
  const Label = ({ label }: { label: string }) => {
    return (
      <Txt size={15} weight="medium">
        {label}
      </Txt>
    );
  };

  useEffect(() => {
    if (data?.status === 'success') {
      setFirstname('');
      setLastname('');
      setPhone('');
      setAddress('');
      setEmail('');
      setDob(new Date().getTime());
      setGender(null);
    }
  }, [data]);

  const handleSubmit = () => {
    addPatient({
      firstname,
      lastname,
      phone,
      address,
      dateOfBirth: dob,
      gender,
      createdBy: _id,
    });
  };

  return (
    <View style={{ paddingHorizontal: Sizes.largepadding, flex: 1, backgroundColor: c.background }}>
      <SecondaryListView headerOptions={{ title: 'Add New Patient' }}>
        <View style={{ marginTop: Sizes.largepadding, flex: 1 }}>
          <View style={{ gap: 10, marginBottom: 20 }}>
            <Label label="First Name" />
            <FormInput
              value={firstname}
              onChangeText={(value) => setFirstname(value)}
              placeholder={'Enter first name'}
            />
          </View>
          <View style={{ gap: 10, marginBottom: 10 }}>
            <Label label="Last Name" />
            <FormInput
              value={lastname}
              onChangeText={(value) => setLastname(value)}
              placeholder={'Enter last name'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                gap: 10,
                marginBottom: 20,
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <Label label="Date of Birth" />
              <RNDateTimePicker
                value={new Date(dob)}
                style={{ marginLeft: -10 }}
                onChange={(value) => setDob(value.nativeEvent.timestamp)}
                mode="date"
              />
            </View>
            <View
              style={{
                gap: 10,
                marginBottom: 20,
                flex: 1,
              }}>
              <Label label="Select Gender" />
              <Pack marginBottom={0} cardStyle={{ flex: 1 }}>
                <List
                  containerStyle={{ paddingVertical: 10 }}
                  divider={showGender ? true : false}
                  dividerColor={c.borderColor2}
                  title={gender && gender}
                  subtitle={gender ? '' : 'Select gender'}
                  chevron
                  onPress={() => setShowGender(!showGender)}
                />
                {showGender ? (
                  <>
                    <List
                      divider
                      dividerColor={c.borderColor2}
                      onPress={() => {
                        setGender('Male');
                        setShowGender(false);
                      }}
                      subtitle={'Male'}
                    />
                    <List
                      divider
                      dividerColor={c.borderColor2}
                      onPress={() => {
                        setGender('Female');
                        setShowGender(false);
                      }}
                      subtitle={'Female'}
                    />
                  </>
                ) : null}
              </Pack>
            </View>
          </View>
          <View style={{ gap: 10, marginBottom: 10 }}>
            <Label label="Phone number" />
            <FormInput
              keyboardType="phone-pad"
              value={phone}
              onChangeText={(value) => setPhone(value)}
              placeholder={'Enter phone number'}
            />
          </View>
        </View>

        <View style={{ gap: 10, marginBottom: 10 }}>
          <Label label="Email" />
          <FormInput
            value={email}
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
            placeholder={'Enter email'}
          />
        </View>

        <View style={{ gap: 10, marginBottom: 10 }}>
          <Label label="Address" />
          <FormInput
            value={address}
            onChangeText={(value) => setAddress(value)}
            placeholder={'Enter address'}
          />
        </View>

        <View style={{ marginTop: 30, marginBottom: 40 }}>
          <Button
            loading={isPending}
            title="Create Patient"
            disabled={!firstname || !lastname || !dob || !gender || !address || !phone}
            onPress={handleSubmit}
          />
        </View>
      </SecondaryListView>
    </View>
  );
};
