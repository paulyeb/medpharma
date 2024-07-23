import React from 'react';
import { ScrollView, View } from 'react-native';
import { Avatar, Icon, Txt } from '../../components';
import { useColors, useNav } from '../../utils';
import { HomeScreenStyles } from './styles';
import { ConsultationCard, QuickActionTabs } from './components';
import { useAccount } from '../authentication/hooks';
import { HomeScreens } from '../../utils/NavigationKeys';
import { useConsultations } from './hooks';

export const HomeScreen = () => {
  const styles = HomeScreenStyles;
  const c = useColors();
  const { navigate } = useNav();
  const { firstname } = useAccount();
  const { data, isPending, error } = useConsultations();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={[
          styles.header,
          {
            backgroundColor: c.lightBlue,
          },
        ]}>
        <View style={{ gap: 5 }}>
          <Txt size={20} weight="medium" color={c.white}>
            Hi {firstname},
          </Txt>
          <Txt color="#9EBAED">Welcome back!</Txt>
        </View>

        <View style={{ gap: 15, flexDirection: 'row', alignItems: 'center' }}>
          <Icon icon="IconSearch" color={c.white} size={35} />
          <Avatar size={60} />
        </View>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: c.secondaryBackground }}>
        <View style={styles.quickActionsContainer}>
          <QuickActionTabs
            title="Record New Patient"
            divider
            onPress={() => navigate(HomeScreens.addNewPatientScreen)}
            icon="IconHospital"
          />
          <QuickActionTabs
            title="Book Consultaion"
            divider
            onPress={() => navigate(HomeScreens.bookConsultationScreen)}
            icon="IconSmartphone"
          />
          <QuickActionTabs
            title="All Consultaions"
            onPress={() => navigate(HomeScreens.allConsultationsScreen)}
            icon="IconAllConsultation"
          />
        </View>
        <View style={{ height: 80 }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Txt size={17} weight="medium">
            Upcoming Consultations
          </Txt>
          <Txt color={c.lightBlue}>See all</Txt>
        </View>
        <ScrollView
          style={{ paddingVertical: 10, marginTop: 0 }}
          showsVerticalScrollIndicator={false}>
          {data?.map((consultation) => (
            <ConsultationCard consultation={consultation} key={consultation?._id} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
