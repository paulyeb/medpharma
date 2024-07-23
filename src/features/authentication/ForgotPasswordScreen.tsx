import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Txt } from '../../components/text';
import { NormalView } from '../../components/View';
import { Button, IconButton } from '../../components/button';
import { Sizes, useColors, useNav } from '../../utils';
import { AuthScreens } from '../../utils/NavigationKeys';
import { hidePhoneNumber } from '../../utils/functions';
import { HeaderSubTitle } from '../../components/header';
import { FormInput } from '../../components';
import { useGetUserByPhone } from './hooks';

export const ForgotPasswordScreen = () => {
  const c = useColors();
  const { navigate } = useNav();
  const [phone, setPhone] = useState('');
  const [showNumberExistsError, setShowNumberExistsError] = useState(false);

  const { getUser, data, isPending, error } = useGetUserByPhone();

  useEffect(() => {
    if (data) {
      if (data?.code === 'USER_NOT_FOUND') {
        return setShowNumberExistsError(true);
      }
      if (data?.user) {
        // addNewUserData({ phone: `+233${phone}` });
        return navigate(AuthScreens.verifyOTP, { phone, source: 'Forgot Password' });
      }
    }
  }, [data]);
  const handleSendOTP = () => {
    getUser({ phone });
  };

  return (
    <View style={{ padding: Sizes.largepadding, flex: 1, backgroundColor: 'white' }}>
      <NormalView headerOptions={{ title: 'Forgot Password' }}>
        <HeaderSubTitle content={'Enter the number linked to this account to send OTP'} />
        <View style={{ marginVertical: showNumberExistsError || error ? 30 : 60 }}>
          <FormInput
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={(value) => setPhone(value)}
            iconLeft={'IconCall'}
            keyboardType="phone-pad"
            autoFocus
          />
          {showNumberExistsError && data?.status === 404 ? (
            <Txt align="center" size={14} color={c.red} weight="medium" style={{ paddingTop: 20 }}>
              This number is not assigned to any user
            </Txt>
          ) : null}
          {error ? (
            <Txt align="center" size={14} color={c.red} weight="medium" style={{ paddingTop: 20 }}>
              Something went wrong. Please try again
            </Txt>
          ) : null}
        </View>
        <Button
          loading={isPending}
          title="Send OTP"
          disabled={!phone || phone.length < 9}
          onPress={handleSendOTP}></Button>
      </NormalView>
    </View>
  );
};
