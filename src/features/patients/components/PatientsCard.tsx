import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Avatar, Txt } from '../../../components';
import { useColors } from '../../../utils';
import { PatientProps } from '../../../utils/types';
import { regularDate } from '../../../utils/formatDate';

interface PatientCardProps extends PatientProps {
  onPress?: () => void;
  selected?: boolean;
}
export const PatientsCard = ({
  firstname,
  lastname,
  dateOfBirth,
  medPharmaCode,
  gender,
  onPress,
  selected,
}: PatientCardProps) => {
  const c = useColors();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={{
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 20,
        gap: 15,
        marginBottom: 20,
        borderColor: selected ? c.blue : c.borderColor,
        backgroundColor: c.background,
      }}>
      <Avatar size={100} />
      <View style={{ gap: 5 }}>
        <Txt size={18} weight="bold">
          {firstname} {lastname}
        </Txt>
        <Txt light>{regularDate(dateOfBirth)}</Txt>
        <View
          style={{
            paddingHorizontal: 12,
            paddingVertical: 5,
            borderRadius: 20,
            backgroundColor: c.blue,
          }}>
          <Txt align="center" color={c.white}>
            {medPharmaCode}
          </Txt>
        </View>
      </View>
    </TouchableOpacity>
  );
};
