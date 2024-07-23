import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useColors } from '../../utils';
interface DividerProps {
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}
export const Divider = ({ color, size = 0.5, style }: DividerProps) => {
  const c = useColors();
  return (
    <View
      style={[
        {
          borderColor: color || c.borderColor,
          borderWidth: size,
        },
        style,
      ]}></View>
  );
};
