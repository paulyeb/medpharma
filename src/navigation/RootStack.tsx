import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { StatusBar } from 'react-native';
import { useColors } from '../utils';
import { useAuthStore } from '../store/zustand';
import { AuthStack } from './AuthStack';

export const RootStack = () => {
  const c = useColors();
  return (
    <NavigationContainer>
      <StatusBar barStyle={c.statusBarStyle as any} />
      {<App />}
    </NavigationContainer>
  );
};

export const App = () => {
  const { loggedIn } = useAuthStore();
  console.log({ loggedIn });
  return !loggedIn ? <AppStack /> : <AuthStack />;
};
