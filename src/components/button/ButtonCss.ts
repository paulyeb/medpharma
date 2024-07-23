import { StyleSheet } from 'react-native';

import { Sizes } from '../../utils/css/globalSizes';

const s = Sizes;

export const ButtonCss = StyleSheet.create({
  button: {},
  buttonContent: {
    flexDirection: 'row',
    paddingVertical: s.padding,
    paddingHorizontal: s.padding,
    borderRadius: s.radius,
    borderWidth: 1.5,
    borderColor: 'transparent',
    alignItems: 'center',
    gap: s.padding,
  },
});

export const iconButtonCss = StyleSheet.create({
  button: {
    width: 34,
    height: 34,
    borderRadius: s.circle,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const PadButtonCss = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: s.padding,
  },
  flexWidth: {
    width: undefined,
    flex: 1,
  },
  buttonContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  space: {
    padding: s.padding,
  },

  buttonTextContainer: {},
  buttonIconContainer: {
    width: undefined,
    marginBottom: s.smallPadding,
    alignItems: 'center',
  },
});

export const gradientButtonCss = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: s.smallPadding,
    paddingHorizontal: s.padding,
    flexDirection: 'row',
  },
});
