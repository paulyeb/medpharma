import React from 'react';
import {
  Modal as ModalView,
  ModalProps as MP,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

import Blur, { BlurProps } from './Blur';
import { useColors } from '../../utils';

export interface ModalProps extends MP {
  component?: React.ReactNode;
  modalType?: 'opaque' | 'see-through' | 'blur';
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  onModalPress?: ((event: GestureResponderEvent) => void) | undefined;
  blurOptions?: BlurProps;
}

const Modal = ({
  modalType,
  transparent,
  backgroundColor,
  style,
  animationType = 'fade',
  onModalPress,
  component,
  children,
  blurOptions,
  ...props
}: ModalProps) => {
  const c = useColors();
  let blurComponent = null;

  switch (modalType) {
    case 'see-through':
      backgroundColor = c.seeThrough;
      transparent = true;
      break;
    case 'blur':
      backgroundColor = c.seeThrough;
      transparent = true;
      blurComponent = () => <Blur {...blurOptions} />;
      break;
    default:
      backgroundColor = c.background;
      break;
  }

  return (
    <ModalView
      animationType={animationType}
      transparent={transparent}
      style={[styles.modal, style]}
      {...props}>
      {blurComponent?.()}
      <TouchableOpacity
        activeOpacity={1}
        onPress={onModalPress}
        style={[styles.modalView, { backgroundColor, flex: 1 }]}>
        {component || children}
      </TouchableOpacity>
    </ModalView>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  modalView: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Modal;
