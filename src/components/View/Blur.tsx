import { BlurView } from 'expo-blur';
import React from 'react';
import { ViewStyle, StyleProp, StyleSheet } from 'react-native';
import { useColors } from '../../utils';

export interface BlurProps {
  component?: React.ReactNode;
  children?: any;
  style?: StyleProp<ViewStyle>;
  intensity?: number;
  tint?: 'dark' | 'light' | 'default';
  fill?: boolean;
}

const Blur = ({ component, children, tint, intensity = 100, style, fill = true }: BlurProps) => {
  const c = useColors();
  // tint = tint ? tint : (c.blurTint as any);
  return (
    <BlurView
      intensity={intensity}
      tint={tint}
      style={[styles.blurContainer, fill ? { flex: 1 } : 1, style]}>
      {children || component}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  blurContainer: {},
});

export default Blur;
