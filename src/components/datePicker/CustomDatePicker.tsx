import React, { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import DatePicker from 'react-native-date-picker';

import { useColors } from '../../utils';
import { List } from '../list';
import { regularDate, regularDateAndTime } from '../../utils/formatDate';
import { IconCalender } from '../icons';

interface CustomDatePickerProps {
  value: Date;
  title?: string;
  mode: 'date' | 'datetime' | 'time';
  divider?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  displayTime?: boolean;
  onChange: (date: any) => void;
}

export const CustomDatePicker = ({
  value,
  title,
  mode,
  displayTime = false,
  disabled = false,
  divider,
  style,
  onChange,
}: CustomDatePickerProps) => {
  const c = useColors();
  const [open, setOpen] = useState(false);
  return (
    <>
      <DatePicker
        modal
        open={open}
        date={value || new Date()}
        theme={c.keyboardTheme as any}
        mode={mode || 'datetime'}
        onConfirm={(date) => {
          setOpen(false);
          onChange(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <List
        // color={c.text100}
        style={[{ borderColor: c.borderColor, borderWidth: 1, opacity: disabled ? 0.4 : 1 }, style]}
        title={
          value && displayTime
            ? regularDateAndTime(value as any)
            : value
              ? regularDate(value as any)
              : null
        }
        subtitle={title}
        onPress={() => (disabled ? null : setOpen(true))}
        right={<IconCalender color={c.lightColor} />}
        divider={divider}
        dividerColor={c.borderColor2}
      />
    </>
  );
};
