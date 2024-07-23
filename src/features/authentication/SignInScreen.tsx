import React, { useEffect, useState } from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native';
import { Txt } from '../../components/text';
import { NormalView } from '../../components/View';
import { Button } from '../../components/button';
import { Sizes, useColors, useNav } from '../../utils';
import { AuthScreens } from '../../utils/NavigationKeys';
import { FormInput } from '../../components/input';
import { HeaderSubTitle } from '../../components/header';
import { IconCheckBox, IconUnCheckedBox } from '../../components';
import { useAccount, useSignInPatient, useSignInStaff } from './hooks';

export const SignInScreen = () => {
  const c = useColors();
  const { navigate, params } = useNav();
  const [phone, setPhone] = useState('');
  const [staffID, setStaffID] = useState('');
  const [medPharmaCode, setMedPharmaCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [staffIDVisibility, setStaffIDVisibility] = useState(false);
  const [medPharmaCodeVisibility, setMedPharmaCodeVisibility] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { error, data, isPending, loginStaff, setCookies } = useSignInStaff();
  const { loadingPatient, loginPatient, patientError, patient, setPCookies } = useSignInPatient();
  const { refresh, logout } = useAccount();

  const userType = params?.userType;

  const completeSignIn = async () => {
    let state;
    if (userType === 'patient') {
      state = await setPCookies();
    } else {
      state = await setCookies();
    }
    if (state) refresh();
  };

  useEffect(() => {
    if (data?.token || patient?.token) {
      completeSignIn();
    }
  }, [data, patient]);

  const handleLogin = () => {
    if (userType === 'staff') {
      return loginStaff({ phone, password, staffID });
    } else {
      loginPatient({ phone, password, medPharmaCode });
    }
  };

  return (
    <View style={{ padding: Sizes.largepadding, flex: 1, backgroundColor: 'white' }}>
      <NormalView headerOptions={{ title: 'Let’s Sign You In' }}>
        <HeaderSubTitle content={'Welcome back, you’ve been missed!'} />
        <View style={{ marginTop: 60 }}>
          <FormInput
            placeholder="Phone Number"
            value={phone}
            onChangeText={(value) => setPhone(value)}
            iconLeft={'IconUser'}
            keyboardType="phone-pad"
          />

          <FormInput
            placeholder="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            iconLeft={'IconLock'}
            iconRight={passwordVisibility ? 'IconEye' : 'IconEyeSlash'}
            secureTextEntry={passwordVisibility}
            error={data?.message === 'Incorrect Password'}
            errorMessage={data?.message === 'Incorrect Password' && data?.message}
            onRightIconPress={() => setPasswordVisibility(!passwordVisibility)}
          />

          {userType === 'staff' ? (
            <FormInput
              placeholder="Staff ID"
              value={staffID}
              onChangeText={(value) => setStaffID(value)}
              iconLeft={'IconLock'}
              iconRight={staffIDVisibility ? 'IconEye' : 'IconEyeSlash'}
              secureTextEntry={staffIDVisibility}
              error={data?.message === 'Incorrect Password'}
              errorMessage={data?.message === 'Incorrect Password' && data?.message}
              onRightIconPress={() => setStaffIDVisibility(!staffIDVisibility)}
            />
          ) : null}

          {userType === 'patient' ? (
            <FormInput
              placeholder="MedPharma Code"
              value={medPharmaCode}
              onChangeText={(value) => setMedPharmaCode(value)}
              iconLeft={'IconLock'}
              iconRight={medPharmaCodeVisibility ? 'IconEye' : 'IconEyeSlash'}
              secureTextEntry={medPharmaCodeVisibility}
              error={patient?.message === 'Incorrect Password'}
              errorMessage={patient?.message === 'Incorrect Password' && patient?.message}
              onRightIconPress={() => setMedPharmaCodeVisibility(!medPharmaCodeVisibility)}
            />
          ) : null}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Sizes.padding,
              marginBottom: 30,
            }}>
            <TouchableOpacity
              onPress={() => setRememberMe(!rememberMe)}
              style={{ flexDirection: 'row', gap: Sizes.smallPadding, alignItems: 'center' }}>
              <View style={{ borderWidth: 0 }}>
                {rememberMe ? <IconCheckBox /> : <IconUnCheckedBox />}
              </View>
              <Txt>Remember Me</Txt>
            </TouchableOpacity>

            <Pressable onPress={() => navigate(AuthScreens.forgotPassword)}>
              <Txt color={c.blue}>Forgot Password?</Txt>
            </Pressable>
          </View>
        </View>

        {error || (data?.message && data?.message != 'Incorrect Password') ? (
          <Txt align="center" color={c.red} style={{ paddingBottom: 20 }}>
            {data?.message || 'Something went wrong, Please try again'}
          </Txt>
        ) : null}
        <Button
          title="Sign in"
          loading={isPending || loadingPatient || data?.token}
          disabled={
            !phone ||
            !password ||
            (userType === 'patient' && !medPharmaCode) ||
            (userType === 'staff' && !staffID)
          }
          onPress={handleLogin}></Button>
      </NormalView>
    </View>
  );
};
