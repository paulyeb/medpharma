import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { iconButtonCss } from './ButtonCss';
import { useColors } from '../../utils';
import * as icons from '../icons';
import { IconName } from '../icons/types';
import { Loading } from '../loadingIndicator';

interface IconButtonProps {
  icon: IconName | (() => React.ReactNode);
  size?: number;
  iconSize?: number;
  color?: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?: () => void;
  loading?: boolean;
  border?: boolean;
}

export function IconButton({
  icon,
  backgroundColor,
  color,
  size,
  style,
  disabled,
  loading,
  iconSize,
  border,
  onPress,
}: IconButtonProps) {
  const c = useColors();
  const Icon = typeof icon === 'string' ? icons[icon] : icon;
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[
        iconButtonCss.button,
        {
          backgroundColor: backgroundColor || c.background,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: c.borderColor,
          borderWidth: border ? 1 : 0,
        },
        disabled ? { opacity: 0.3 } : undefined,
        size ? { height: size, width: size } : undefined,
      ]}
      onPress={onPress}>
      {loading ? <Loading size={15} /> : <Icon size={iconSize} color={color} />}
    </TouchableOpacity>
  );
}
