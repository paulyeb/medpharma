import React from 'react';
import { useThemeStore } from '../../store/zustand';
import { ColorTheme } from '../css/colors';

export const useColors = () => {
  const { theme } = useThemeStore();

  const colors = ColorTheme(theme);

  return colors;
};
