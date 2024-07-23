import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabScreens } from '../utils/NavigationKeys';
import { Sizes, useColors } from '../utils';
import ProfileStack from './ProfileStack';
import {
  IconAccount,
  IconAccountSolid,
  IconBookingSolid,
  IconBookings,
  IconHome,
  IconHomeSolid,
  IconSaved,
  IconSavedSolid,
  IconShop,
  IconShopSolid,
  IconStethoscope,
} from '../components/icons';
import { useAccount } from '../features/authentication/hooks';
import { UserType } from '../utils/types';
import HomeStack from './HomeStack';
import PatientsStack from './PatientsStack';
import ConsultationStack from './ConsultationStack';

const Tabs = createBottomTabNavigator();

export function AppTabs() {
  const { type } = useAccount();
  const c = useColors();
  const ICON_SIZE = 25;

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: c.black,
        tabBarInactiveTintColor: c.gray,
        tabBarStyle: {
          backgroundColor: c.background,
          borderTopColor: c.borderColor,
          borderTopWidth: 1,
          paddingTop: Sizes.smallPadding,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 10,
        },
        tabBarAllowFontScaling: false,
      }}>
      <Tabs.Screen
        name={TabScreens.homeStack}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <IconHomeSolid color={color} size={ICON_SIZE} />
            ) : (
              <IconHome color={color} size={ICON_SIZE} />
            ),
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name={TabScreens.consultationStack}
        component={ConsultationStack}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <IconBookingSolid color={color} size={ICON_SIZE} />
            ) : (
              <IconBookings color={color} size={ICON_SIZE} />
            ),
          tabBarLabel: 'Consultations',
        }}
      />
      <Tabs.Screen
        name={TabScreens.patientsStack}
        component={PatientsStack}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <IconStethoscope color={color} size={ICON_SIZE} />
            ) : (
              <IconStethoscope color={color} size={ICON_SIZE} />
            ),
          tabBarLabel: 'Patients',
        }}
      />
      <Tabs.Screen
        name={TabScreens.profileStack}
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <IconAccountSolid color={color} size={ICON_SIZE} />
            ) : (
              <IconAccount color={color} size={ICON_SIZE} />
            ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tabs.Navigator>
  );
}
