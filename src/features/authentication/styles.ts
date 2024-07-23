import { StyleSheet } from 'react-native';
import { Sizes } from '../../utils';

export const CountryAndPhoneNumberCardStyles = StyleSheet.create({
  card: {
    borderRadius: Sizes.radiusMedium,
    height: 130,
    borderColor: '#E8E6EA',
    borderWidth: 1.5,
  },
  countrySection: {
    flex: 1,
    paddingHorizontal: Sizes.largepadding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flagAndCountryName: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizes.smallPadding,
  },
  phoneSection: {
    flex: 1,
    paddingHorizontal: Sizes.largepadding,
    justifyContent: 'center',
  },
});
