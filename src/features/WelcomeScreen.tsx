import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Txt } from '../components/text';
import { Sizes, useNav } from '../utils';
import { Button } from '../components/button';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthScreens } from '../utils/NavigationKeys';

export const WelcomeScreen = () => {
  const s = Sizes;
  const { navigate } = useNav();

  return (
    <ImageBackground
      style={styles.background}
      imageStyle={{ resizeMode: 'cover', opacity: 0.93, backgroundColor: 'gray' }}
      source={require('../assets/images/welcome.png')}>
      <LinearGradient colors={['#00000000', '#000000']} style={{ padding: s.largepadding }}>
        <View style={styles.textContent}>
          <Txt align="center" size={26} color="white">
            {'Welcome!'}
          </Txt>

          <Txt align="center" color="white" size={17} style={{ paddingVertical: s.largepadding }}>
            {
              'The MedPharma app helps to easily connect our staff with our patients. Select your use case and get started.'
            }
          </Txt>
        </View>

        <View style={styles.actions}>
          <View style={{ flex: 1 }}>
            <Button
              title="Health Officer"
              variant="secondary"
              onPress={() => navigate(AuthScreens.signin, { userType: 'staff' })}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title="Patient"
              onPress={() => navigate(AuthScreens.signin, { userType: 'patient' })}
            />
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Sizes.regularPadding,
    width: '100%',
    paddingBottom: Sizes.largepadding * 2,
  },
  textContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Sizes.largepadding,
    marginVertical: Sizes.padding,
  },
});
