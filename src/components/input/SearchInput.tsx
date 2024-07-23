import { SearchBar } from '@rneui/themed';
import React from 'react';

import { InputProps } from './Input';
import { useColors } from '../../utils';
// import { IconSearch2 } from '../icons';

interface Props extends InputProps {}

const SearchInput = (props: Props) => {
  const c = useColors();

  return (
    <SearchBar
      containerStyle={{
        borderWidth: 0,
        backgroundColor: c.transparent,
      }}
      inputContainerStyle={{
        borderRadius: 8,
        height: 40,
        backgroundColor: c.tintBackgroundColor,
      }}
      inputStyle={{
        backgroundColor: c.transparent,
        color: c.color,
      }}
      placeholder="Search"
      platform="ios"
      showCancel
      cancelButtonProps={{
        buttonTextStyle: {
          fontFamily: 'bold',
          color: c.blue,
        },
      }}
      placeholderTextColor={c.placeholderColor}
      // searchIcon={<IconSearch2 color={c.placeholderColor} />}
      keyboardAppearance={c.keyboardTheme as any}
      {...props}
    />
  );
};

export default SearchInput;
