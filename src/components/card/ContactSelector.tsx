import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { IconButton } from '../button';
import { Sizes, useColors } from '../../utils';
import { hidePhoneNumber } from '../../utils/functions';
import { Txt } from '../text';

interface ContactSelectorProps {
  phone: string;
  onPress: () => void;
  isSelected: boolean;
}
export const ContactSelector = ({ phone, onPress, isSelected }: ContactSelectorProps) => {
  const c = useColors();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: Sizes.largepadding,
        flexDirection: 'row',
        alignItems: 'center',
        gap: Sizes.largepadding,
        borderWidth: 1,
        borderColor: isSelected ? c.blue : c.borderColor,
        borderRadius: Sizes.radiusMedium,
      }}>
      <View>
        <IconButton
          icon={'IconSMS'}
          color={c.blue}
          backgroundColor="#7210FF10"
          size={70}
          iconSize={18}
        />
      </View>
      <View style={{ gap: Sizes.smallPadding }}>
        <Txt color={c.gray}>via SMS:</Txt>
        <Txt>{hidePhoneNumber(phone)}</Txt>
      </View>
    </TouchableOpacity>
  );
};
