import React from 'react';
import { Image, View } from 'react-native';
import { Sizes, useColors, useNav } from '../../utils';
import {
  Avatar,
  IconAccount,
  IconNotification,
  IconWallet,
  Pack,
  SecondaryListView,
  Txt,
} from '../../components';
import { ListAnnex } from '../../components/list/List';
import { ProfileScreens } from '../../utils/NavigationKeys';
import { useAccount } from '../authentication/hooks';

export const ProfileScreen = () => {
  const c = useColors();
  const { firstname, lastname, phone } = useAccount();
  const { navigate } = useNav();
  return (
    <View
      style={{
        paddingHorizontal: Sizes.largepadding,
        flex: 1,
        backgroundColor: c.secondaryBackground,
      }}>
      <SecondaryListView
        headerOptions={{
          title: 'Profile',
          backgroundColor: c.secondaryBackground,
          showBackButton: false,
        }}
        scrollViewContainerStyle={{ backgroundColor: c.secondaryBackground }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
            marginBottom: 40,
            gap: 10,
          }}>
          <Avatar size={124} />
          <Txt weight="bold" size={18} style={{ textTransform: 'capitalize' }}>
            {firstname} {lastname}
          </Txt>
          <Txt light size={13}>
            {phone}
          </Txt>
        </View>

        <Pack marginBottom={30} backgroundColor={c.background}>
          <ListAnnex
            icon={<IconAccount />}
            title={'Account'}
            onPress={() => navigate(ProfileScreens.accountScreen)}
            divider
            chevron
          />

          <ListAnnex
            icon={<IconNotification />}
            title={'Notification'}
            onPress={() => navigate(ProfileScreens.notificationsScreen)}
            chevron
          />
        </Pack>

        <Pack backgroundColor={c.white}>
          <ListAnnex icon={<IconWallet />} title={'Settings'} divider chevron />
          <ListAnnex icon={<IconAccount />} title={'Privacy Policy'} divider chevron />
          <ListAnnex
            icon={<IconWallet />}
            title={'Help center'}
            onPress={() => navigate(ProfileScreens.helpCenterScreen)}
            chevron
          />
        </Pack>
      </SecondaryListView>
    </View>
  );
};
