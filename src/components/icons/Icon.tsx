import React from 'react';

import { IconName } from './types';
import * as icons from '../icons';
import { useColors } from '../../utils';

interface IconProps {
  icon: IconName;
  size?: number;
  color?: string;
  backgroundColor?: string;
  iconBorder?: string;
}

export const Icon = ({ icon, size = 22, color, backgroundColor, iconBorder }: IconProps) => {
  const c = useColors();
  color = color || c.lightColor;
  const Icon_ = typeof icon === 'string' ? icons[icon] : icon;

  return <Icon_ color={color} size={size} />;
};

export default Icon;
