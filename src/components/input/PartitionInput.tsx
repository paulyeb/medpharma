import React, { useEffect, useState } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

import { PartionInputCss } from './InputCss';
import { useColors } from '../../utils';
import Txt, { TextProps } from '../text/Txt';

interface Props {
  slots?: number;
  value?: string[];
  textOptions?: TextProps;
  secure?: boolean;
  inputStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  haSpace?: boolean;
  disabled?: boolean;
  error?: boolean;
}

interface IndividualInputProps {
  value?: string;
  width?: number;
  height?: number;
  size?: number;
  active?: boolean;
  style?: StyleProp<ViewStyle>;
  textOptions?: TextProps;
  disabled?: boolean;
  error?: boolean;
}

const styles = PartionInputCss;

const PartitionInput = ({
  slots,
  value,
  secure,
  textOptions,
  inputStyle,
  containerStyle,
  disabled,
  error,
  haSpace = true,
}: Props) => {
  const c = useColors();

  const [all, setAll] = useState<any[]>([]);

  if (secure) {
    textOptions = { ...textOptions, weight: 'max-bold' };
  }

  const generate = () => {
    const newArr = [];
    if (slots) {
      for (let i = 0; i < slots; i++) {
        let val = value?.[i];
        if (secure) {
          if (val) {
            val = '*';
          }
        }
        newArr.push({ val });
      }
      setAll(newArr);
    }
  };

  useEffect(() => {
    generate();
    return () => {};
  }, [value]);

  return (
    <View
      style={[
        styles.inputs,
        !haSpace ? { ...styles.noSpaceContainer, borderColor: c.borderColor2 } : null,
        disabled ? { opacity: 0.3 } : null,
        containerStyle,
      ]}>
      {all.map((a, i) => (
        <In
          active={a?.val}
          style={[!haSpace ? styles.noSpaceInput : null, inputStyle]}
          disabled={disabled}
          error={error}
          value={a?.val}
          key={i.toString()}
          textOptions={textOptions}
        />
      ))}
    </View>
  );
};

const In = ({
  value,
  height,
  width,
  style,
  size = 40,
  textOptions,
  disabled,
  active,
  error,
}: IndividualInputProps) => {
  if (size) {
    height = size;
    width = size;
  }

  const c = useColors();

  return (
    <View
      style={[
        styles.individualInput,
        { height, width },
        style,
        active ? { borderColor: c.blue, borderWidth: 2 } : null,
        error ? { borderColor: c.red, borderWidth: 2 } : null,
        disabled ? { opacity: 0.5 } : null,
      ]}>
      <Txt style={styles.text} t={value} {...textOptions} />
    </View>
  );
};

export const clearInput = (value: string[], callBack: (values: string[]) => void) => {
  if (value.length > 0) {
    const newVals = value;
    newVals.pop();
    callBack([...newVals]);
  }
};

export default PartitionInput;
