import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreens } from '../utils/NavigationKeys';
import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {
  AccountScreen,
  ChangeNumberScreen,
  ChangePasswordScreen,
  DeactivateAccountScreen,
  ForgotPasswordScreen,
  ProfileScreen,
  SetNewPasswordScreen,
  UpdateNumberScreen,
  NotificationSettingsScreen,
  HelpCenterScreen,
} from '../features/profile';
import { VerifyOTPScreen } from '../features/authentication';

const Stack = createStackNavigator();

const ProfileStack = ({ route, navigation }: { route: any; navigation: any }) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      [
        ProfileScreens.changeNumberScreen,
        ProfileScreens.verifyOTPScreen,
        ProfileScreens.updateNumberScreen,
        ProfileScreens.changePasswordScreen,
        ProfileScreens.forgotPasswordScreen,
        ProfileScreens.deactivateAccountScreen,
        ProfileScreens.setNewPasswordScreen,
      ].includes(routeName)
    ) {
      navigation.setOptions({ tabBarStyle: { display: 'none', height: 100 } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ProfileScreens.profileScreen} component={ProfileScreen} />
      <Stack.Screen name={ProfileScreens.accountScreen} component={AccountScreen} />
      <Stack.Screen name={ProfileScreens.changeNumberScreen} component={ChangeNumberScreen} />
      <Stack.Screen name={ProfileScreens.verifyOTPScreen} component={VerifyOTPScreen} />
      <Stack.Screen name={ProfileScreens.updateNumberScreen} component={UpdateNumberScreen} />
      <Stack.Screen name={ProfileScreens.changePasswordScreen} component={ChangePasswordScreen} />
      <Stack.Screen
        name={ProfileScreens.deactivateAccountScreen}
        component={DeactivateAccountScreen}
      />
      <Stack.Screen name={ProfileScreens.forgotPasswordScreen} component={ForgotPasswordScreen} />
      <Stack.Screen name={ProfileScreens.setNewPasswordScreen} component={SetNewPasswordScreen} />

      <Stack.Screen
        name={ProfileScreens.notificationsScreen}
        component={NotificationSettingsScreen}
      />
      <Stack.Screen name={ProfileScreens.helpCenterScreen} component={HelpCenterScreen} />
    </Stack.Navigator>
  );
};
export default ProfileStack;
