import React from 'react';
import { View } from 'react-native';
import { Sizes, useColors, useNav } from '../../utils';
import { IconSearch, PrimaryListView } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useConsultations } from '../home/hooks';
import { ConsultationCard } from '../home/components';

export const AllConsultationsScreen = () => {
  const c = useColors();
  const { data, isPending, error } = useConsultations();

  return (
    <View style={{ flex: 1, backgroundColor: c.background, paddingHorizontal: Sizes.largepadding }}>
      <PrimaryListView
        headerOptions={{
          title: 'All Consultations',
          showBackButton: true,
          headerRight: (
            <TouchableOpacity>
              <IconSearch size={25} />
            </TouchableOpacity>
          ),
        }}
        listViewOptions={{
          showsVerticalScrollIndicator: false,
          data: data,
          renderItem: ({ item }) => <ConsultationCard consultation={item} key={item?._id} />,
        }}></PrimaryListView>
    </View>
  );
};
