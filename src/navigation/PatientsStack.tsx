import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { PatientsScreens } from '../utils/NavigationKeys';
import { PatientsScreen } from '../features/patients';

const Stack = createStackNavigator();

const PatientsStack = ({ route, navigation }: { route: any; navigation: any }) => {
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
      <Stack.Screen name={PatientsScreens.patientsScreen} component={PatientsScreen} />
    </Stack.Navigator>
  );
};

export default PatientsStack;
