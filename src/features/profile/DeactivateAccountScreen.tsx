import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { NormalView } from '../../components/View';
import { Button } from '../../components/button';
import { Sizes, useColors, useNav } from '../../utils';
import { FormInput } from '../../components/input';
import { HeaderSubTitle } from '../../components/header';
import { Txt } from '../../components';
import { DeactivateAccountModal } from './components';

export const DeactivateAccountScreen = () => {
  const c = useColors();
  const { navigate, params, goBack } = useNav();
  const [password, setPassword] = useState('');
  const [PasswordVisibility, setPasswordVisibility] = useState(true);
  const [showDeactivateAccountModal, setShowDeactivateAccountModal] = useState(false);
  const { phone } = params;

  const handleConfirm = () => {
    console.log({ phone, password });
    setShowDeactivateAccountModal(true);
  };

  return (
    <View style={{ paddingHorizontal: Sizes.largepadding, flex: 1, backgroundColor: 'white' }}>
      <NormalView headerOptions={{ title: 'Verify  password' }}>
        <HeaderSubTitle content={'Enter your password to proceed'} />
        <View style={{ marginVertical: 60 }}>
          <FormInput
            placeholder="Enter password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            iconLeft={'IconLock'}
            iconRight={PasswordVisibility ? 'IconEye' : 'IconEyeSlash'}
            secureTextEntry={PasswordVisibility}
            onRightIconPress={() => setPasswordVisibility(!PasswordVisibility)}
          />

          {/* {error ? (
            <Txt align="center" size={14} color={c.red} weight="medium">
              {error?.message || 'Something went wrong. Please try again'}
            </Txt>
          ) : null} */}
        </View>

        <Button
          // loading={isPending}
          title="Verify"
          disabled={!password}
          onPress={handleConfirm}></Button>
      </NormalView>
      <DeactivateAccountModal
        open={showDeactivateAccountModal}
        onClose={() => setShowDeactivateAccountModal(false)}
        onDeactivate={() => {}}
      />
    </View>
  );
};
