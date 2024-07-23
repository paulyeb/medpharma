import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Sizes } from '../../utils';

interface SafeViewProps {
  type?: 'bottom' | 'top';
  padding?: number;
  style?: StyleProp<ViewStyle>;
  children?: any;
}
export function SafeView({
  type = 'bottom',
  padding = Sizes.padding,
  children,
  style,
}: SafeViewProps) {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <View
      style={[
        type === 'bottom' ? { paddingBottom: bottom + padding } : null,
        type === 'top' ? { paddingTop: top + padding } : null,
        style,
      ]}>
      {children}
    </View>
  );
}
