import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Sizes, useColors } from '../../utils';
import { Txt } from '../text';
import { Button, ButtonVariants } from '../button';

interface AlertProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  onCancel?: () => void;
  onConfirm?: () => void;
  confirmButtonTitle?: string;
  cancelButtonTitle?: string;
  confirmButtonBGColor?: string;
  cancelButtonBGColor?: string;
  cancelButtonVariant?: ButtonVariants;
  confirmButtonVariant?: ButtonVariants;
}
export const Alert = ({
  title,
  subtitle,
  backgroundColor = 'white',
  style,
  onCancel,
  onConfirm,
  confirmButtonTitle = 'Confirm',
  cancelButtonTitle = 'Cancel',
  confirmButtonBGColor,
  cancelButtonBGColor,
  cancelButtonVariant,
  confirmButtonVariant,
}: AlertProps) => {
  const c = useColors();
  return (
    <View
      style={[
        {
          padding: Sizes.largepadding,
          marginHorizontal: 50,
          borderRadius: Sizes.radius,
          gap: Sizes.largepadding,
          backgroundColor,
        },
        style,
      ]}>
      <Txt weight="bold" size={17}>
        {title}
      </Txt>
      <Txt size={15} weight="light">
        {subtitle}
      </Txt>
      <View style={{ flexDirection: 'row', gap: Sizes.largepadding }}>
        <View style={{ flex: 1 }}>
          <Button
            title={cancelButtonTitle}
            variant={cancelButtonVariant}
            onPress={onCancel}
            backgroundColor={cancelButtonBGColor}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title={confirmButtonTitle}
            variant={confirmButtonVariant}
            onPress={onConfirm}
            backgroundColor={confirmButtonBGColor}
          />
        </View>
      </View>
    </View>
  );
};
