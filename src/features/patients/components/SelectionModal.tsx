import React from 'react';
import { Button, Modal, Pack, SecondaryListView, Txt } from '../../../components';
import { useColors } from '../../../utils';
import { View } from 'react-native';
import { GeneralModalProps } from '../../../utils/types';

export const SelectionModal = ({
  visible,
  onClose,
  title,
  options,
  subtitle,
  onSave,
  saveDisabled,
  noSave,
  loading,
}: GeneralModalProps) => {
  const c = useColors();
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
      presentationStyle="formSheet">
      <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: c.secondaryBackground }}>
        <SecondaryListView
          headerOptions={{
            title: `${title} `,
            headerRight: !noSave ? (
              <Button
                loading={loading}
                title="Save"
                variant="text"
                disabled={saveDisabled}
                onPress={onSave}
              />
            ) : null,
            backgroundColor: c.secondaryBackground,
            backButtonType: 'close',
            onBackButtonPress: onClose,
            showBackButton: true,
            headerStyle: { marginTop: -25 },
          }}
          scrollViewContainerStyle={{
            backgroundColor: c.secondaryBackground,
          }}>
          <View style={{ marginVertical: 20, paddingVertical: 20, gap: 10 }}>
            <Txt style={{ paddingHorizontal: 20 }} light>
              {subtitle}
            </Txt>

            <Pack backgroundColor={c.background}>{options}</Pack>
          </View>
        </SecondaryListView>
      </View>
    </Modal>
  );
};
