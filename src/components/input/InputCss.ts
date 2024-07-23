import { StyleSheet } from 'react-native';

import { Sizes } from '../../utils';

const s = Sizes;

export const InputCss = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: s.smallPadding,
    paddingVertical: s.smallPadding,
    width: '100%',
  },
  defaultStyle: {
    borderRadius: s.radius,
    borderWidth: 1,
  },
  borderStyle: {
    borderBottomWidth: 2,
    paddingHorizontal: 0,
  },

  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputField: {
    flex: 1,
    fontSize: Sizes.fontSize + 3,
  },

  abs: {
    // position: "absolute"
  },

  left: {
    paddingRight: s.padding,
  },
  right: {
    paddingLeft: s.padding,
  },
});

export const PartionInputCss = StyleSheet.create({
  inputs: {
    // width: 270,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  individualInput: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s.radius,
  },
  text: {
    fontSize: Sizes.fontSize + 3,
    textAlign: 'center',
  },

  noSpaceContainer: {
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 8,
    alignSelf: 'center',
    borderWidth: 1,
  },
  noSpaceInput: {
    borderRadius: 0,
    borderWidth: 0,
    borderRightWidth: 1,
  },
});
