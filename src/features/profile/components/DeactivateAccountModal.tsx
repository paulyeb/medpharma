import React from 'react';
import { View } from 'react-native';
import { Modal } from '../../../components';
import { Alert } from '../../../components/alert';
import { useColors } from '../../../utils';

interface DeactivateAccountModalProps {
  open: boolean;
  onClose: () => void;
  onDeactivate: () => void;
}
export const DeactivateAccountModal = ({
  open,
  onClose,
  onDeactivate,
}: DeactivateAccountModalProps) => {
  const c = useColors();
  return (
    <Modal visible={open} modalType="see-through" onModalPress={onClose} animationType="slide">
      <View
        style={{ justifyContent: 'center', alignItems: 'center', flex: 1, paddingHorizontal: 0 }}>
        <Alert
          title="Delete account"
          subtitle="You are initiating a process to permanently delete your account. Deleting your account erases all data about you and your account. Confirm to proceed."
          onCancel={onClose}
          onConfirm={onDeactivate}
          confirmButtonTitle="Deactivate"
          confirmButtonBGColor={c.red}
          cancelButtonVariant="text"
        />
      </View>
    </Modal>
  );
};
