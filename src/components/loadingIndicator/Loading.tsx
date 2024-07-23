import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { Modal, ModalProps } from '../View';
// import { LoadingAnimation } from '../animations';

export interface LoadingProps {
  modal?: boolean;
  size?: number;
  modalOptions?: ModalProps;
}

export const Loading = ({ modal, size = 27, modalOptions }: LoadingProps) => {
  return modal ? (
    <Modal modalType="see-through" transparent={true} {...modalOptions}>
      <View style={styles.modal}>
        <View style={[styles.normal, { height: size + 5, width: size + 5 }]}>
          {/* <LoadingAnimation size={size} /> */}
          <ActivityIndicator size={size} />
        </View>
      </View>
    </Modal>
  ) : (
    <View style={[styles.align]}>
      <View style={[styles.normal, { height: size + 5, width: size + 5 }]}>
        <ActivityIndicator size={size} />
        {/* <LoadingAnimation size={size} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    // ...GlobalStyles.modal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  align: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  normal: {
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
