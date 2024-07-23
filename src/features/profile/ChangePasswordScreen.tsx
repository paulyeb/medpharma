import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NormalView } from '../../components/View';
import { Button } from '../../components/button';
import { Sizes, useColors, useNav } from '../../utils';
import { FormInput } from '../../components/input';
import { HeaderSubTitle } from '../../components/header';
import { Txt } from '../../components';

export const ChangePasswordScreen = () => {
  const c = useColors();
  const { navigate, params } = useNav();
  const [currentPassword, setCurrentPassword] = useState('');
  const [currentPasswordVisibility, setCurrentPasswordVisibility] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordVisibility, setNewPasswordVisibility] = useState(false);
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [confirmNewPasswordVisibility, setConfirmNewPasswordVisibility] = useState(false);
  const passwordMismatch = newPassword !== confirmNewPassword;

  const handleConfirm = () => {
    console.log({ currentPassword, newPassword, confirmNewPassword });
    // resetPassword({ phone, newPassword, confirmNewPassword });
  };

  return (
    <View style={{ paddingHorizontal: Sizes.largepadding, flex: 1, backgroundColor: 'white' }}>
      <NormalView headerOptions={{ title: 'Change Password' }}>
        <HeaderSubTitle content={'Update your password to enhance account security'} />
        <View style={{ marginVertical: 60, gap: 10 }}>
          <View>
            <FormInput
              placeholder="Enter current password"
              value={currentPassword}
              onChangeText={(value) => setCurrentPassword(value)}
              iconLeft={'IconLock'}
              iconRight={currentPasswordVisibility ? 'IconEye' : 'IconEyeSlash'}
              secureTextEntry={currentPasswordVisibility}
              onRightIconPress={() => setCurrentPasswordVisibility(!currentPasswordVisibility)}
            />
            <Txt align="right" color={c.blue} size={14} style={{ paddingBottom: 10 }}>
              Forgot Password ?
            </Txt>
          </View>

          <FormInput
            placeholder="New password"
            value={newPassword}
            onChangeText={(value) => setNewPassword(value)}
            iconLeft={'IconLock'}
            iconRight={newPasswordVisibility ? 'IconEye' : 'IconEyeSlash'}
            secureTextEntry={newPasswordVisibility}
            onRightIconPress={() => setNewPasswordVisibility(!newPasswordVisibility)}
          />

          <FormInput
            placeholder="Confirm new password"
            value={confirmNewPassword}
            onChangeText={(value) => setConfirmNewPassword(value)}
            iconLeft={'IconLock'}
            iconRight={confirmNewPasswordVisibility ? 'IconEye' : 'IconEyeSlash'}
            secureTextEntry={confirmNewPasswordVisibility}
            error={newPassword && confirmNewPassword && passwordMismatch}
            errorMessage="Password mismatch"
            onRightIconPress={() => setConfirmNewPasswordVisibility(!confirmNewPasswordVisibility)}
          />

          {/* {error ? (
            <Txt align="center" size={14} color={c.red} weight="medium">
              {error?.message || 'Something went wrong. Please try again'}
            </Txt>
          ) : null} */}
        </View>

        <Button
          // loading={isPending}
          title="Update"
          disabled={
            !currentPassword ||
            !newPassword ||
            !confirmNewPassword ||
            newPassword !== confirmNewPassword
          }
          onPress={handleConfirm}></Button>
      </NormalView>
    </View>
  );
};
