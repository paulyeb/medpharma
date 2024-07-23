import React from 'react';
import { View } from 'react-native';
import { IconButton, NormalView } from '../../../components';
import { useColors } from '../../../utils';
import { ListAnnex } from '../../../components/list/List';

export const HelpCenterScreen = () => {
  const c = useColors();

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: c.secondaryBackground }}>
      <NormalView headerOptions={{ title: 'Help Center', backgroundColor: c.secondaryBackground }}>
        <View style={{ paddingTop: 30, backgroundColor: c.secondaryBackground, flex: 1 }}>
          <ListAnnex
            activeOpacity={1}
            style={{ paddingVertical: 10 }}
            iconOptions={{ width: 70 }}
            icon={
              <IconButton
                icon={'IconCall'}
                iconSize={35}
                size={60}
                backgroundColor={c.blue}
                color={c.white}
              />
            }
            rounded
            title="Phone Call"
            subtitle="Calling hours: 9am- 5pm"
          />
          <ListAnnex
            activeOpacity={1}
            style={{ paddingVertical: 10 }}
            iconOptions={{ width: 70 }}
            icon={
              <IconButton
                icon={'IconWhatsapp'}
                iconSize={35}
                size={60}
                backgroundColor={c.green}
                color={c.white}
              />
            }
            rounded
            title="WhatsApp"
            subtitle="Available hours: 9am- 5pm"
          />
        </View>
      </NormalView>
    </View>
  );
};
