import { StyleSheet } from 'react-native';

import { Sizes } from '../../utils';

const s = Sizes;

export const ListCss = StyleSheet.create({
  rounded: {
    borderRadius: Sizes.radius,
    marginBottom: s.padding,
  },
  roundedContainer: {
    borderRadius: Sizes.radiusMedium,
  },
  divider: {
    borderBottomWidth: 0.5,
  },
  bottomDivider: {
    borderBottomWidth: 0.3,
    alignSelf: 'center', // Aligns the divider to the center horizontally
    width: '90%', // Controls the length of the divider
    marginTop: 5,
  },
});
