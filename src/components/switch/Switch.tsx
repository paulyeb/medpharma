import React from 'react';
import { Switch as SwitchComp } from 'react-native-paper';
import { useColors } from '../../utils';

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  color?: string;
}
export const Switch = ({ value, onValueChange, color }: SwitchProps) => {
  const c = useColors();

  return (
    <>
      <SwitchComp value={value} color={color || c.blue} onValueChange={onValueChange} />
    </>
  );
};
