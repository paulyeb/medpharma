import React, { useState } from 'react';
import {
  View,
  StyleProp,
  TextInputProps,
  TextInput as TI,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { TextInput } from 'react-native-paper';

import { InputCss } from './InputCss';
import { useColors } from '../../utils';
import Txt, { FontWeight } from '../text/Txt';

export interface InputProps extends TextInputProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputContentStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  weight?: FontWeight;
  value?: string;
  borderBottomColor?: string;
  inputType?: 'default' | 'border';
  noBorder?: boolean;
  label?: string;
  Color?: string;
  onChangeText?: (text: string) => void;
  error?: boolean; // New prop for error state
}

const styles = InputCss;

const Input = ({
  value,
  onChangeText,
  iconLeft,
  iconRight,
  inputContainerStyle,
  inputType,
  weight = 'medium',
  inputStyle,
  inputContentStyle,
  borderBottomColor,
  noBorder,
  label,
  Color,
  error,
  ...rest
}: InputProps) => {
  const c = useColors();

  const [isActive, setIsActive] = useState(false);

  const defaultStyle = {
    backgroundColor: c.tintBackgroundColor,
    borderColor: error ? c.danger : c.borderColor,
    ...styles.defaultStyle,
  };
  return (
    <View
      style={[
        inputType === 'border' ? undefined : styles.inputContainer,
        inputType === 'border' ? undefined : defaultStyle,
        inputContainerStyle,
      ]}>
      <View style={[styles.inputContent, inputContentStyle]}>
        {iconLeft ? (
          <View style={[styles.abs, styles.left]}>
            <>{iconLeft}</>
          </View>
        ) : null}

        {inputType === 'border' ? (
          <TextInput
            value={value}
            label={
              <View style={{ paddingLeft: 1 }}>
                <Txt color={error ? c.danger : isActive ? c.blue : c.lightColor}>{label}</Txt>
              </View>
            }
            mode="flat"
            textColor={c.color}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            underlineColorAndroid={error ? c.danger : c.borderColor2}
            underlineColor={error ? c.danger : c.borderColor2}
            activeUnderlineColor={c.blue}
            placeholderTextColor={c.placeholderColor}
            contentStyle={[
              {
                backgroundColor: c.background,
                flex: 1,
                paddingLeft: 3,
              },
              inputStyle,
            ]}
            keyboardAppearance={c.keyboardTheme as any}
            dense={true}
            onChangeText={onChangeText}
            {...rest}
            style={{ flex: 1, backgroundColor: c.transparent }}
            selectionColor={c.color}
            cursorColor={c.color}
          />
        ) : (
          <TI
            style={[
              styles.inputField,
              {
                color: c.color,
                fontFamily: weight,
                borderBottomWidth: 2,
                borderBottomColor: c.blue,
                paddingBottom: 3,
              },
              inputStyle,
            ]}
            keyboardAppearance={c.keyboardTheme as any}
            placeholderTextColor={c.placeholderColor}
            maxFontSizeMultiplier={1}
            value={value}
            onChangeText={onChangeText}
            {...rest}
          />
        )}
        {iconRight ? (
          <View style={[styles.abs, styles.right]}>
            <>{iconRight}</>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Input;
