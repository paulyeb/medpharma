import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  View,
  Linking,
  GestureResponderEvent,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { IconChecked } from './Icons';
import { useColors } from '../../utils';
import { FontWeight, Txt } from '../text';

export interface SocialIconProps {
  name:
    | 'facebook'
    | 'twitter'
    | 'instagram'
    | 'tiktok'
    | 'youtube'
    | 'brand'
    | 'whatsapp'
    | 'snapchat'
    | 'telegram'
    | 'x'
    | '?';
  iconSize?: number;
  weight?: FontWeight;
  uri?: string;
  onSelectOption?: (name: string) => void;
  selectedOption?: string;
  isSelected?: boolean;
  variant?: 'rounded' | 'curved';
}

const iconLabels = {
  whatsapp: 'WhatsApp',
  snapchat: 'Snapchat',
  facebook: 'Facebook',
  facebook_2: 'Facebook',
  telegram: 'Telegram',
  twitter: 'Twitter',
  instagram: 'Instagram',
  youtube: 'YouTube',
  tiktok: 'TikTok',
  x: 'X',
};

export function SocialIcon({
  name,
  variant,
  uri,
  onSelectOption,
  selectedOption,
  isSelected,
  weight,
}: SocialIconProps) {
  const c = useColors();

  // let type: string;
  let icon: string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element;
  let shareTo: ((event: GestureResponderEvent) => void) & (() => void);

  const shareToWhatsApp = () => {
    Linking.openURL(`whatsapp://send?text=${encodeURIComponent(uri)}`);
  };

  const shareToFacebook = () => {
    Linking.openURL(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(uri)}`);
  };

  const shareToTelegram = () => {
    Linking.openURL(`tg://msg?text=${encodeURIComponent(uri)}`);
  };

  const shareToTwitter = () => {
    Linking.openURL(`https://twitter.com/intent/tweet?text=${encodeURIComponent(uri)}`);
  };

  const shareToInstagram = () => {
    Linking.openURL(`https://www.instagram.com/direct/inbox?text=${encodeURIComponent(uri)}`);
  };

  switch (name) {
    case 'youtube':
      icon = require('../../assets/images/youtube.png');
      break;
    case 'tiktok':
      icon =
        variant === 'rounded'
          ? require('../../assets/images/tiktok-2.png')
          : require('../../assets/images/tiktok.png');
      break;
    case 'x':
      icon = require('../../assets/images/x.png');
      shareTo = shareToTwitter;
      break;
    case 'instagram':
      icon =
        variant === 'rounded'
          ? require('../../assets/images/insta_brand.png')
          : require('../../assets/images/instagram_brand.png');
      shareTo = shareToInstagram;
      break;
    case 'whatsapp':
      icon = require('../../assets/images/whatsapp_brand.png');
      shareTo = shareToWhatsApp;
      break;
    case 'telegram':
      icon = require('../../assets/images/telegram_brand.png');
      shareTo = shareToTelegram;
      break;
    case 'facebook':
      icon =
        variant === 'rounded'
          ? require('../../assets/images/facebook-2.png')
          : require('../../assets/images/facebook_brand.png');
      shareTo = shareToFacebook;
      break;
    case 'twitter':
      icon = require('../../assets/images/twitter_brand.png');
      shareTo = shareToTwitter;
      break;
    default:
      shareTo = () => {};
      break;
  }

  if (variant === 'rounded') {
    return (
      <View
        style={{
          alignItems: 'center',
          padding: 10,
        }}>
        <LinearGradient
          colors={
            selectedOption === name || isSelected
              ? ['#007AFF', '#3CCC65']
              : [c.background, c.background]
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientBackground}
        />
        {(selectedOption === name || isSelected) && (
          <View style={[styles.overlay, { backgroundColor: c.black }]}>
            <IconChecked color={c.blue} />
          </View>
        )}
        <TouchableOpacity
          onPress={() => onSelectOption(name)}
          style={{
            borderRadius: 25,
            overflow: 'hidden',
            marginBottom: 5,
          }}>
          <Image source={icon as ImageSourcePropType} style={{ width: 60, height: 60 }} />
        </TouchableOpacity>
        <Txt size={12}>{iconLabels[name]}</Txt>
      </View>
    );
  }

  return (
    <View
      style={{
        alignItems: 'center',
        padding: 10,
        // paddingHorizontal: 20,
        paddingHorizontal: name === 'facebook' ? 15 : 'auto',
      }}>
      <TouchableOpacity
        onPress={shareTo}
        style={{
          borderRadius: 10,
          overflow: 'hidden',
          marginBottom: 10,
        }}>
        <Image source={icon as ImageSourcePropType} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>
      <Txt weight={weight || 'regular'} size={12}>
        {iconLabels[name]}
      </Txt>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    borderRadius: 50,
    position: 'absolute',
    top: 8,
    bottom: 25,
    left: 8,
    right: 8,
  },
  overlay: {
    position: 'absolute',
    borderRadius: 50,
    opacity: 0.9,
    width: 60,
    height: 60,
    top: 10,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    alignSelf: 'flex-end',
    position: 'absolute',
    padding: 5,
  },
});
