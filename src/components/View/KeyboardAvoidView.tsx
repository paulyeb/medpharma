import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useColors } from '../../utils';

interface Props {
  children?: any;
}

const KeyboardAvoidView = ({ children }: Props) => {
  const c = useColors();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: c.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidView;
