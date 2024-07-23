import React from 'react';
import { View } from 'react-native';
import { Switch, Txt } from '../../../components';

interface NotificationItemProps {
  title: string;
  value: boolean;
  onPress: () => void;
}
const NotificationItem = ({ title, value, onPress }: NotificationItemProps) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Txt size={18} weight="medium">
        {title}
      </Txt>
      <Switch value={value} onValueChange={onPress} />
    </View>
  );
};

export default NotificationItem;
