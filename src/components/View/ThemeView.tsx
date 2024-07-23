import React from 'react';
import { View } from 'react-native';
import { useColors } from '../../utils';

interface Props {
  component?: any;
  children?: any;
}

const ThemeView = ({ component, children }: Props) => {
  const c = useColors();
  return (
    <View style={{ backgroundColor: c.background, flex: 1 }}>
      {component}
      {children}
    </View>
  );
};

export default ThemeView;
