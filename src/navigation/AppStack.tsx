import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppTabs } from './AppTabs';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main Tabs" component={AppTabs} />
    </Stack.Navigator>
  );
};
