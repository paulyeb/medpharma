import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import { gradientButtonCss } from './ButtonCss';
import { Sizes, useColors } from '../../utils';
import { Loading } from '../loadingIndicator';
import { Txt } from '../text';

interface gradientButtonProps {
  title: string;
  onPress?: () => void;
  loading?: boolean;
  fontSize?: number;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  gradientColors?: string[];
}

export const GradientButton = ({
  title,
  onPress,
  loading,
  disabled,
  fontSize = 16,
  style,
  gradientColors = ['#00D2FF', '#3A7BD5'],
}: gradientButtonProps) => {
  if (loading) disabled = true;

  const c = useColors();

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={gradientColors}
        style={[gradientButtonCss.container, { opacity: disabled ? 0.3 : 1 }, style]}>
        {loading ? (
          <View style={{ justifyContent: 'center', marginRight: Sizes.padding }}>
            <Loading size={15} />
          </View>
        ) : null}
        <Txt color={disabled ? c.disabledText : c.color} weight="max-bold" size={fontSize}>
          {title}
        </Txt>
      </LinearGradient>
    </TouchableOpacity>
  );
};
