import { StyleSheet } from 'react-native';

import { HEADER_HEIGHT, HEADER_TITLE_SIZE, Sizes } from '../../utils/css/globalSizes';
import { PrimaryBoldFont, SecondaryBoldFont } from '../../utils';

const s = Sizes;

export const HeaderCss = StyleSheet.create({
  header: {
    zIndex: 1,
  },
  withBorder: {
    borderBottomWidth: 1,
  },
  headerBucket: {
    height: HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: HEADER_TITLE_SIZE,
    fontFamily: PrimaryBoldFont,
  },
  abs: {
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
  },
  left: {
    left: -10,
  },
  middle: {},
  right: {
    right: 0,
  },
  headerButtons: {
    paddingHorizontal: s.padding,
    flexDirection: 'row',
    gap: s.smallPadding,
    alignItems: 'center',
  },
});

export const AnimatedHeaderCss = StyleSheet.create({
  largeTitleContainer: {
    paddingHorizontal: Sizes.padding,
    marginBottom: s.padding,
  },
  largeTitleText: {},
});
