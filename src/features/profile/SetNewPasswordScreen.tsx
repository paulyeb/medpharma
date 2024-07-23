import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { NormalView } from '../../components/View';
import { Button } from '../../components/button';
import { Sizes, useColors, useNav } from '../../utils';
import { FormInput } from '../../components/input';
import { HeaderSubTitle } from '../../components/header';
import { Txt } from '../../components';
import { useResetPassword } from '../authentication/hooks';

export const SetNewPasswordScreen = () => {
  const c = useColors();
  const { navigate, params, goBack } = useNav();
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordVisibility, setNewPasswordVisibility] = useState(false);
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [confirmNewPasswordVisibility, setConfirmNewPasswordVisibility] = useState(false);
  const passwordMismatch = newPassword !== confirmNewPassword;

  const { resetPassword, data, isPending, error } = useResetPassword();
  const { phone } = params;

  useEffect(() => {
    if (data?.state) {
      Alert.alert('Password reset successfully');
      goBack();
      goBack();
      goBack();
    }
  }, [data]);

  const handleConfirm = () => {
    console.log({ phone, newPassword, confirmNewPassword });
    resetPassword({ phone, newPassword, confirmNewPassword });
  };

  return (
    <View style={{ paddingHorizontal: Sizes.largepadding, flex: 1, backgroundColor: 'white' }}>
      <NormalView headerOptions={{ title: 'Set New Password' }}>
        <HeaderSubTitle content={'Create strong and secured new password.'} />
        <View style={{ marginVertical: 60 }}>
          <FormInput
            placeholder="New Password"
            value={newPassword}
            onChangeText={(value) => setNewPassword(value)}
            iconLeft={'IconLock'}
            iconRight={newPasswordVisibility ? 'IconEye' : 'IconEyeSlash'}
            secureTextEntry={newPasswordVisibility}
            onRightIconPress={() => setNewPasswordVisibility(!newPasswordVisibility)}
          />

          <FormInput
            placeholder="Confirm New Password"
            value={confirmNewPassword}
            onChangeText={(value) => setConfirmNewPassword(value)}
            iconLeft={'IconLock'}
            iconRight={confirmNewPasswordVisibility ? 'IconEye' : 'IconEyeSlash'}
            secureTextEntry={confirmNewPasswordVisibility}
            error={newPassword && confirmNewPassword && passwordMismatch}
            errorMessage="Password mismatch"
            onRightIconPress={() => setConfirmNewPasswordVisibility(!confirmNewPasswordVisibility)}
          />

          {error ? (
            <Txt align="center" size={14} color={c.red} weight="medium">
              {error?.message || 'Something went wrong. Please try again'}
            </Txt>
          ) : null}
        </View>

        <Button
          loading={isPending}
          title="Confirm"
          disabled={!newPassword || !confirmNewPassword || newPassword !== confirmNewPassword}
          onPress={handleConfirm}></Button>
      </NormalView>
    </View>
  );
};
