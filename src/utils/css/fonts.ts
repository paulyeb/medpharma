import * as Font from 'expo-font';

export const PrimaryLightFont = 'light';
export const PrimaryThinFont = 'thin';
export const PrimaryRegularFont = 'regular';
export const PrimaryMediumFont = 'medium';
export const PrimaryBoldFont = 'bold';
export const SecondaryBoldFont = 'max-bold';

export const loadFonts = async () => {
  await Font.loadAsync({
    [PrimaryThinFont]: require('../../assets/fonts/Roboto-Thin.ttf'),
    [PrimaryLightFont]: require('../../assets/fonts/Roboto-Light.ttf'),
    [PrimaryRegularFont]: require('../../assets/fonts/Roboto-Regular.ttf'),
    [PrimaryMediumFont]: require('../../assets/fonts/Roboto-Medium.ttf'),
    [PrimaryBoldFont]: require('../../assets/fonts/Roboto-Bold.ttf'),
    [SecondaryBoldFont]: require('../../assets/fonts/Roboto-ExtraBold.ttf'),
  });
};
