import React from 'react';
import ImageView from 'react-native-image-viewing';
import { ImageSource } from 'react-native-image-viewing/dist/@types';

import { Header } from '../header';

interface ImageFullScreenProps {
  images: ImageSource[];
  visible: boolean;
  onClose: () => void;
}

export function ImageFullScreen({ images, visible, onClose }: ImageFullScreenProps) {
  return (
    <ImageView
      images={images}
      imageIndex={0}
      visible={visible}
      doubleTapToZoomEnabled
      animationType="slide"
      swipeToCloseEnabled={false}
      HeaderComponent={() => (
        <Header
          backButtonType="close"
          showBackButton
          title="Image"
          titleColor={'white'}
          backgroundColor="black"
          onBackButtonPress={onClose}
        />
      )}
      onRequestClose={onClose}
    />
  );
}
