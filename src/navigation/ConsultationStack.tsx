import { createStackNavigator } from '@react-navigation/stack';
import { ConsultationScreens } from '../utils/NavigationKeys';
import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { ConsultationsScreen } from '../features/consultations';

const Stack = createStackNavigator();

const ConsultationStack = ({ route, navigation }: { route: any; navigation: any }) => {
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
      <Stack.Screen
        name={ConsultationScreens.consultationsScreen}
        component={ConsultationsScreen}
      />
    </Stack.Navigator>
  );
};

export default ConsultationStack;
