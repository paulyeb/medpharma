import React, { useState } from 'react';
import { View } from 'react-native';
import { NormalView } from '../../components/View';
import { Button } from '../../components/button';
import { Sizes, useColors, useNav } from '../../utils';
import { FormInput } from '../../components/input';
import { HeaderSubTitle } from '../../components/header';

export const UpdateNumberScreen = () => {
  const c = useColors();
  const { navigate, params } = useNav();
  const [newNumber, setNewNumber] = useState('');
  const [confirmNewNumber, setConfirmNewNumber] = useState('');
  const numberMismatch = newNumber !== confirmNewNumber;

  const { phone } = params;

  return (
    <View style={{ paddingHorizontal: Sizes.largepadding, flex: 1, backgroundColor: 'white' }}>
      <NormalView headerOptions={{ title: 'Update Number' }}>
        <HeaderSubTitle content={'Enter new number to replace the old one'} />
        <View style={{ marginVertical: 60 }}>
          <FormInput
            placeholder="New number"
            value={newNumber}
            onChangeText={(value) => setNewNumber(value)}
            iconLeft={'IconDialer'}
            keyboardType="phone-pad"
          />

          <FormInput
            placeholder="Confirm new number"
            value={confirmNewNumber}
            onChangeText={(value) => setConfirmNewNumber(value)}
            iconLeft={'IconDialer'}
            error={newNumber && confirmNewNumber && numberMismatch}
            errorMessage="Number mismatch"
            keyboardType="phone-pad"
          />
        </View>

        <Button
          title="Update"
          disabled={!newNumber || !confirmNewNumber || newNumber !== confirmNewNumber}
          onPress={() => {}}></Button>
      </NormalView>
    </View>
  );
};
