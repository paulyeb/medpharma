import React from 'react';
import { View } from 'react-native';
import { Sizes, useColors, useNav } from '../../utils';
import {
  Button,
  IconBin,
  IconDialer,
  IconSecurePassword,
  IconShield,
  NormalView,
} from '../../components';
import { ListAnnex } from '../../components/list/List';
import { useAccount } from '../authentication/hooks';

export const AccountScreen = () => {
  const c = useColors();
  const { logout } = useAccount();
  const { navigate } = useNav();
  return (
    <View style={{ flex: 1, backgroundColor: c.background, paddingHorizontal: Sizes.largepadding }}>
      <NormalView headerOptions={{ title: 'Account' }}>
        <View style={{ marginVertical: 30 }}>
          <ListAnnex
            style={{ paddingLeft: 5 }}
            icon={<IconDialer />}
            title="Change number"
            subtitle="Update your contact"
            subtitleOptions={{ size: 12 }}
            chevron
          />
          <ListAnnex
            icon={<IconSecurePassword />}
            style={{ paddingLeft: 5 }}
            title="Forgot password"
            subtitle="Reset your password to access your account"
            subtitleOptions={{ size: 12 }}
            chevron
          />
          <ListAnnex
            icon={<IconShield />}
            style={{ paddingLeft: 5 }}
            title="Change password"
            subtitle="Update your password to enhance account security"
            subtitleOptions={{ size: 12 }}
            chevron
          />
          <ListAnnex
            icon={<IconBin />}
            style={{ paddingLeft: 5 }}
            title="Deactivate your account"
            subtitle="Deactivate your account to stop all activity"
            subtitleOptions={{ size: 12 }}
            chevron
          />
        </View>

        <Button variant="text" title="Sign Out" color={c.red} onPress={logout} />
      </NormalView>
    </View>
  );
};
