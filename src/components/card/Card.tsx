import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

import { CardCss } from './CardCss';
import { useColors } from '../../utils';

export interface CardOptions {
  rounded?: boolean;
  backgroundColor?: string;
  highlight?: boolean;
  shadow?: boolean;
  shadowWeight?: number | 'light' | 'bold' | 'max-bold';
  cardStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  padding?: number;
}

export interface CardProps extends CardOptions {
  component?: React.ReactNode;
  children?: any;
}

const styles = CardCss;

const shadowRadius = (shadowWeight: any) => {
  switch (shadowWeight) {
    case 'bold':
      return 15;
    case 'max-bold':
      return 20;
    case 'light':
      return 5;
    default:
      return shadowWeight;
  }
};

const Card = ({
  component,
  children,
  rounded,
  backgroundColor,
  highlight,
  shadow,
  shadowWeight,
  cardStyle,
  containerStyle,
  padding = 15,
}: CardProps) => {
  const c = useColors();

  if (rounded) {
    highlight = true;
  }
  if (highlight) {
    backgroundColor = backgroundColor ? backgroundColor : c.tintBackgroundColor;
  }

  return (
    <View
      style={[
        styles.cardContainer,
        rounded ? { paddingHorizontal: padding } : null,
        containerStyle,
      ]}>
      <View
        style={[
          styles.card,
          rounded ? styles.rounded : null,
          highlight ? styles.highlight : null,
          shadow
            ? { ...styles.shadow, shadowColor: c.white, shadowRadius: shadowRadius(shadowWeight) }
            : null,
          { backgroundColor, padding },
          cardStyle,
        ]}>
        {children || component}
      </View>
    </View>
  );
};

export default Card;
