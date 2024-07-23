import React from 'react';
import { View } from 'react-native';

import Input, { InputProps } from './Input';
import { Sizes, useColors } from '../../utils';
// import { IconSearch } from '../icons';

interface Props extends InputProps {}

const SearchControl = ({ ...props }: Props) => {
  const c = useColors();
  return (
    <View style={{ paddingHorizontal: Sizes.padding }}>
      <Input
        noBorder
        editable={false}
        placeholder={'Search'}
        inputContainerStyle={{
          backgroundColor: c.tintBackgroundColor,
          borderRadius: Sizes.radius,
          paddingVertical: 6,
          paddingHorizontal: 6,
        }}
        // iconLeft={<IconSearch color={c.lightColor} />}
        {...props}
      />
    </View>
  );
};

export default SearchControl;
