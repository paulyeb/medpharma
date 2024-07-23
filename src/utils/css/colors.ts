import { Theme } from '../../store/zustand';

const colors = {
  white: '#fff',
  black: '#000',
  transparent: 'transparent',
  blue: '#0065FF', //"#00B3E2",
  seeThrough: 'rgba(0,0,0,0.5)',
  gray: '#9E9E9E',
  inputGray: '#FAFAFA',
  red: '#E1484B',
  disabledButton: '#D8D8D8',
};

export const light = {
  background: '#fff',
  secondaryBackground: '#F5F5F5',
  color: '#000000',
  secondaryText: '#D1D0D3',
  secondaryBtn: '#F1E7FF',
  subHeading: '#00083350',
  statusBarStyle: 'dark-content',
  lightColor: 'gray',
  grey: '#E0E0E0',
  tintBackgroundColor: '#e9ecef',
  borderColor: '#eee',
  borderColor2: '#ccc',
  danger: '#e35053',
  scrollColor: 'black',
  keyboardTheme: 'light',
  placeholderColor: '#9E9E9E',
  disabledText: 'rgb(156, 164, 171)',
  green: '#34C759',
  lightBlue: '#007AFF',
  ...colors,
};

export const dark = {
  background: '#1b1e22',
  secondaryBackground: '#F5F5F5',
  color: colors.white,
  borderColor: '#212529',
  grey: '#E0E0E0',
  secondaryText: '#D1D0D3',
  secondaryBtn: '#F1E7FF',
  subHeading: '#00083350',
  scrollColor: 'white',
  lightColor: '#adb5bd',
  tintBackgroundColor: '#212529',
  borderColor2: '#343a40',
  danger: '#e63946',
  statusBarStyle: 'light-content',
  disabledText: 'rgb(156, 164, 171)',
  keyboardTheme: 'dark',
  placeholderColor: '#6c757d',
  green: '#34C759',
  lightBlue: 'rgba(0, 122, 255, 0.1)',
  ...colors,
};

export const ColorTheme = (theme: Theme) => {
  if (theme === 'dark') return dark;
  return light;
};
