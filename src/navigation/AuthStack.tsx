import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreens, WelcomeScreens } from '../utils/NavigationKeys';
import { WelcomeScreen } from '../features/WelcomeScreen';
import { ForgotPasswordScreen, SignInScreen } from '../features/authentication';

export const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={WelcomeScreens.welcomeScreen} component={WelcomeScreen} />
      <Stack.Screen name={AuthScreens.signin} component={SignInScreen} />
      <Stack.Screen name={AuthScreens.forgotPassword} component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};
