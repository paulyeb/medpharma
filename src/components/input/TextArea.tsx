import React from 'react';
import { TextInput, StyleSheet, ViewStyle, StyleProp, TextStyle, Keyboard } from 'react-native';

import { Sizes, useColors } from '../../utils';

interface TextAreaProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  style?: StyleProp<ViewStyle>; // Accept additional styles
  textStyle?: TextStyle; // Additional text styles
}

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChangeText,
  placeholder,
  style,
  textStyle,
}) => {
  const c = useColors();

  return (
    <TextInput
      style={[
        styles.textArea,
        { color: c.color, borderColor: c.borderColor },
        textStyle, // Apply additional text styles (e.g., bold, italic, underline)
        style,
      ]}
      textAlignVertical="top"
      multiline={true}
      numberOfLines={4}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={c.lightColor}
      value={value}
      keyboardAppearance={c.keyboardTheme as any}
    />
  );
};

const styles = StyleSheet.create({
  textArea: {
    borderWidth: 1,
    minHeight: 130,
    paddingHorizontal: 10,
    paddingTop: 10,
    fontSize: 14,
    borderEndEndRadius: Sizes.radius,
    borderEndStartRadius: Sizes.radius,
  },
});
