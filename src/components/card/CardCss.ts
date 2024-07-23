import { StyleSheet } from 'react-native';

import { Sizes } from '../../utils/css/globalSizes';

const s = Sizes;

export const CardCss = StyleSheet.create({
  cardContainer: {},
  card: {
    overflow: 'hidden',
  },

  rounded: {
    borderRadius: s.radius,
  },

  highlight: {},

  shadow: {
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 1,
  },
});
