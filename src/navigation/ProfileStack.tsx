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

const Stack = createStackNavigator();

const ProfileStack = ({ route, navigation }: { route: any; navigation: any }) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if ([].includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: 'none', height: 100 } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ProfileScreens.profileScreen} component={ProfileScreen} />
      <Stack.Screen name={ProfileScreens.accountScreen} component={AccountScreen} />

      <Stack.Screen
        name={ProfileScreens.notificationsScreen}
        component={NotificationSettingsScreen}
      />
      <Stack.Screen name={ProfileScreens.helpCenterScreen} component={HelpCenterScreen} />
    </Stack.Navigator>
  );
};
export default ProfileStack;
