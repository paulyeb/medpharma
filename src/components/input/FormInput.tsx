import {
  Pressable,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { FontWeight, Txt } from '../text';
import { Sizes, useColors } from '../../utils';
import { useState } from 'react';
import Icon from '../icons/Icon';
import { IconName } from '../icons/types';

export interface InputProps extends TextInputProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  iconLeft?: IconName;
  iconRight?: IconName;
  inputContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  inputContentStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  weight?: FontWeight;
  value?: string;
  onChangeText?: (text: string) => void;
  onRightIconPress?: () => void;
  error?: boolean;
  errorMessage?: string;
  autoFocus?: boolean;
  secureTextEntry?: boolean;
  searchInput?: boolean;
  // onFocus?: () => void;
  // onBlur?: () => void;
  editable?: boolean;
  bordered?: boolean;
  keyboardType?: KeyboardType;
}

export type KeyboardType =
  | 'default'
  | 'numeric'
  | 'email-address'
  | 'ascii-capable'
  | 'numbers-and-punctuation'
  | 'url'
  | 'number-pad'
  | 'phone-pad'
  | 'name-phone-pad'
  | 'decimal-pad'
  | 'twitter'
  | 'web-search'
  | 'visible-password';

const FormInput = ({
  left,
  right,
  iconLeft,
  iconRight,
  searchInput,
  onChangeText,
  value,
  placeholder,
  error,
  inputStyle,
  autoFocus,
  errorMessage,
  inputContentStyle,
  inputContainerStyle,
  containerStyle,
  secureTextEntry,
  keyboardType = 'default',
  // onFocus,
  // onBlur,
  onRightIconPress,
  editable,
  bordered,
}: InputProps) => {
  const c = useColors();
  const [active, setActive] = useState(false);
  return (
    <View
      style={[
        {
          width: '100%',
          marginBottom: searchInput ? 0 : Sizes.largepadding,
        },
        containerStyle,
      ]}>
      <View
        style={[
          {
            borderWidth: 1,
            width: '100%',
            borderColor: error
              ? c.red
              : bordered
                ? c.borderColor2
                : active
                  ? c.blue
                  : c.transparent,
            paddingHorizontal: Sizes.largepadding,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: Sizes.largepadding,
            borderRadius: Sizes.radius,
            backgroundColor: c.tintBackgroundColor,
          },
          inputContainerStyle,
        ]}>
        {iconLeft || left ? (
          <View>
            {(
              <Icon
                icon={iconLeft}
                color={error ? c.red : active ? c.blue : value ? c.color : c.gray}
              />
            ) || left}
          </View>
        ) : null}
        <View style={[{ flex: 1 }, inputContentStyle]}>
          <TextInput
            onFocus={() => {
              setActive(true);
              // onFocus();
            }}
            onBlur={() => {
              setActive(false);
              // onBlur();
            }}
            value={value}
            editable={editable}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            style={[
              {
                paddingVertical: Sizes.smallPadding,
                marginVertical: Sizes.extraSmallPadding,
                fontSize: 16,
              },
              inputStyle,
            ]}
            placeholder={placeholder || 'Enter text here'}
            placeholderTextColor={c.placeholderColor}
            secureTextEntry={secureTextEntry}
          />
        </View>
        {iconRight || right ? (
          <Pressable onPress={onRightIconPress}>
            {iconRight ? (
              <Icon
                icon={iconRight}
                color={error ? c.red : active ? c.blue : value ? c.color : c.gray}
              />
            ) : (
              right
            )}
          </Pressable>
        ) : null}
      </View>

      {error && errorMessage ? (
        <View style={{ paddingVertical: 5 }}>
          <Txt color={c.red}>{errorMessage || 'Error, Invalid input'}</Txt>
        </View>
      ) : null}
    </View>
  );
};

export default FormInput;

interface SearchInputProps {
  formInputProps?: InputProps;
}

export const SearchInput = ({ formInputProps }: SearchInputProps) => {
  const c = useColors();
  const [active, setIsActive] = useState(false);
  return (
    <FormInput
      iconLeft="IconSearch"
      iconRight={formInputProps?.value ? 'IconClose' : active ? 'IconFilterSolid' : 'IconFilter'}
      placeholder="Search"
      searchInput
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      inputContainerStyle={{
        paddingHorizontal: Sizes.regularPadding,
        gap: Sizes.regularPadding,
        backgroundColor: active ? '#7210FF10' : c.inputGray,
      }}
      {...formInputProps}
    />
  );
};
