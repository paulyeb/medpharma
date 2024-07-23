import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useColors } from '../../../utils';
import { IconArrowRight, IconNotification, Txt } from '../../../components';
import { ConsultationProps } from '../../../utils/types';
import { regularDay, regularMonth, regularTiime, regularTime } from '../../../utils/formatDate';
interface ConsultationCardProps {
  consultation: ConsultationProps;
}

export const ConsultationCard = ({ consultation }: ConsultationCardProps) => {
  const c = useColors();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: c.white,
          borderColor: c.borderColor,
        },
      ]}>
      <View
        style={[
          styles.top,
          {
            borderBottomColor: c.borderColor,
          },
        ]}>
        <View style={{ gap: 10, alignItems: 'center', flexDirection: 'row' }}>
          <View
            style={{
              backgroundColor: c.grey,
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 20,
            }}>
            <Txt align="center" size={30} weight="bold">
              {regularDay(consultation?.date)}
            </Txt>
            <Txt align="center" size={20}>
              {regularMonth(consultation.date)}
            </Txt>
          </View>
          <View style={{ gap: 5 }}>
            <Txt weight="medium" size={18}>
              {consultation.consultationType}
            </Txt>
            <Txt light size={17}>
              Patient: {consultation?.patient?.firstname} {consultation?.patient?.lastname}
            </Txt>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: c.borderColor,
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100 / 2,
          }}>
          <IconNotification color={c.blue} />
        </View>
      </View>
      <View style={styles.bottom}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Txt color={c.blue} weight="medium">
            {regularTiime(consultation?.date)}
          </Txt>
          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            <Txt color={c.blue} weight="medium">
              Appointment Detail
            </Txt>
            <IconArrowRight />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  top: {
    borderBottomWidth: 1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom: {
    padding: 20,
  },
});
