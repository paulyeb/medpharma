import React, { useState } from 'react';
import { View } from 'react-native';
import { NormalView } from '../../components/View';
import { Button } from '../../components/button';
import { Sizes, useColors, useNav } from '../../utils';
import { ProfileScreens } from '../../utils/NavigationKeys';
import { HeaderSubTitle } from '../../components/header';
import { ContactSelector } from '../../components/card';
import { useAccount } from '../authentication/hooks';

export const ChangeNumberScreen = () => {
  const c = useColors();
  const { navigate } = useNav();
  const [numberSelected, setNumberSelected] = useState(false);
  const { phone } = useAccount();

  return (
    <View style={{ paddingHorizontal: Sizes.largepadding, flex: 1, backgroundColor: 'white' }}>
      <NormalView headerOptions={{ title: 'Change Number' }}>
        <HeaderSubTitle content={'Select the contact linked to this account to send OTP'} />
        <View style={{ marginVertical: 60 }}>
          <ContactSelector
            isSelected={numberSelected}
            onPress={() => setNumberSelected(!numberSelected)}
            phone={phone}
          />
        </View>

        <Button
          title="Send OTP"
          disabled={!numberSelected}
          onPress={() =>
            navigate(ProfileScreens.verifyOTPScreen, { phone, source: 'Change Number' })
          }></Button>
      </NormalView>
    </View>
  );
};
