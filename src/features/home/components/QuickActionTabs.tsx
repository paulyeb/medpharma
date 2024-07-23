import React from 'react';
import { TouchableOpacity } from 'react-native';
import { HomeScreenStyles } from '../styles';
import { useColors } from '../../../utils';
import { Icon, IconName, Txt } from '../../../components';

interface QuickActionTabsProps {
  onPress: () => void;
  title: string;
  icon: IconName;
  divider?: boolean;
}
export const QuickActionTabs = ({ onPress, title, icon, divider }: QuickActionTabsProps) => {
  const styles = HomeScreenStyles;
  const c = useColors();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.quickActionsButtons,
        {
          borderRightWidth: divider ? 1 : 0,
          borderColor: c.borderColor,
        },
      ]}>
      <Icon icon={icon} size={40} />
      <Txt align="center" size={13} weight="medium">
        {title}
      </Txt>
    </TouchableOpacity>
  );
};
