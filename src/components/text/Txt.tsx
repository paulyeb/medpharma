import React from 'react';
import { Text, TextProps as TP, TextStyle, StyleProp } from 'react-native';

import { FONT_SIZE } from '../../utils/css/globalSizes';
import { useColors } from '../../utils';

export type FontWeight = 'light' | 'thin' | 'regular' | 'bold' | 'max-bold' | 'medium';

export interface TextOptionsProps extends TP {}

export interface TextProps extends TextOptionsProps {
  weight?: FontWeight;
  size?: number;
  style?: StyleProp<TextStyle>;
  color?: string;
  light?: boolean;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

interface Props extends TextProps {
  t?: string | React.ReactNode;
  children?: React.ReactNode;
}

const Txt = ({
  t,
  weight = 'regular',
  color,
  size = FONT_SIZE,
  light,
  style,
  allowFontScaling = true,
  children,
  align,
  ...props
}: Props) => {
  const c = useColors();
  color = color ? color : c.color;

  if (light) {
    color = c.lightColor;
  }

  return (
    <Text
      allowFontScaling={allowFontScaling}
      maxFontSizeMultiplier={1}
      style={[{ fontSize: size, fontFamily: weight, color, textAlign: align }, style]}
      {...props}>
      {t || children}
    </Text>
  );
};

export default Txt;
