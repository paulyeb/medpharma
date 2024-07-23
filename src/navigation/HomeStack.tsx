import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../utils/NavigationKeys';
import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {
  AllConsultationsScreen,
  BookConsultationScreen,
  HomeScreen,
  RecordNewPAtientScreen,
} from '../features/home';

const Stack = createStackNavigator();

const HomeStack = ({ route, navigation }: { route: any; navigation: any }) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      [
        HomeScreens.bookConsultationScreen,
        HomeScreens.addNewPatientScreen,
        HomeScreens.allConsultationsScreen,
      ].includes(routeName)
    ) {
      navigation.setOptions({ tabBarStyle: { display: 'none', height: 100 } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={HomeScreens.homeScreen} component={HomeScreen} />
      <Stack.Screen name={HomeScreens.bookConsultationScreen} component={BookConsultationScreen} />
      <Stack.Screen name={HomeScreens.addNewPatientScreen} component={RecordNewPAtientScreen} />
      <Stack.Screen name={HomeScreens.allConsultationsScreen} component={AllConsultationsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
