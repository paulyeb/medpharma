import React from 'react';

import { Button, ButtonProps } from './Button';
import { PadButtonCss } from './ButtonCss';
import { TextOptionsProps } from '../text/Txt';

interface Props extends ButtonProps {
  flexWidth?: boolean;
  marginRight?: number;
  textOptions?: TextOptionsProps;
}

const styles = PadButtonCss;

export const PadButton = ({ flexWidth, marginRight = 0, textOptions, ...props }: Props) => {
  return <Button variant="primary" textOptions={textOptions} {...props} />;
};
