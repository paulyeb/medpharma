import React from 'react';
import {
  View,
  TouchableHighlightProps,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from 'react-native';

import { ButtonCss } from './ButtonCss';
import Icon from '../icons/Icon';
import { IconName } from '../icons/types';
import { Loading } from '../loadingIndicator';
import { Txt, TextOptionsProps, FontWeight } from '../text';
import { Sizes, useColors } from '../../utils';

export type ButtonVariants = 'primary' | 'secondary' | 'outline' | 'text' | 'link';
export interface ButtonProps extends TouchableHighlightProps {
  variant?: ButtonVariants;
  children?: string;
  title?: string;
  icon?: IconName | ((color: any) => React.ReactNode);
  color?: string;
  iconColor?: string;
  iconBorder?: string;
  iconSize?: number;
  fontWeight?: FontWeight;
  backgroundColor?: string;
  disabled?: boolean;
  loading?: boolean;
  textOptions?: TextOptionsProps;
  borderColor?: string;
  centered?: boolean;
}

const styles = ButtonCss;

export const Button = ({
  children,
  title,
  disabled,
  variant = 'primary',
  icon,
  loading,
  textOptions,
  style,
  backgroundColor,
  borderColor,
  color,
  iconColor,
  iconBorder,
  iconSize,
  fontWeight = 'medium',
  centered = true,
  ...props
}: ButtonProps) => {
  const c = useColors();
  let localStyle: StyleProp<ViewStyle>;

  if (loading) disabled = true;

  if (variant === 'outline') {
    color = color || c.blue;
    localStyle = {
      borderColor: c.blue || c.borderColor2,
      borderWidth: 1,
    };
  }

  if (variant === 'primary') {
    color = color || c.white;
    localStyle = {
      borderColor: borderColor || c.transparent,
      backgroundColor: backgroundColor || c.blue,
    };
  }

  if (variant === 'secondary') {
    color = color || c.blue;
    localStyle = {
      borderColor: borderColor || c.transparent,
      backgroundColor: backgroundColor || c.secondaryBtn,
    };
  }

  if (variant === 'link' || 'text') {
    color = color || c.blue;
  }

  if (centered) {
    localStyle = [
      localStyle,
      {
        justifyContent: 'center',
      },
    ];
  }

  if (disabled) {
    localStyle = [
      localStyle,
      {
        backgroundColor: variant === 'text' ? c.transparent : c.disabledButton,
      },
    ];
  }

  return (
    <TouchableOpacity disabled={disabled} activeOpacity={0.6} {...props}>
      <View style={[styles.buttonContent, { backgroundColor }, localStyle, style]}>
        {loading ? (
          <View style={{ justifyContent: 'center' }}>
            <Loading size={15} />
          </View>
        ) : null}
        {typeof icon === 'string' ? (
          <Icon size={iconSize} color={iconColor} iconBorder={iconBorder} icon={icon as IconName} />
        ) : (
          icon?.({ color })
        )}
        {children || title ? (
          <Txt
            weight={fontWeight}
            size={Sizes.fontSize}
            color={disabled ? c.disabledText : color}
            {...textOptions}>
            {children || title}
          </Txt>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
