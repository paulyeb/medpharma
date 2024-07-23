import { StyleSheet } from 'react-native';
import { Sizes } from '../../utils';

const s = Sizes;

export const datePickerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s.mediumPadding + 2,
    paddingVertical: s.smallPadding + 7,
    borderWidth: 1,
    borderRadius: 5,
  },
});
