import React, { useState } from 'react';
import { View } from 'react-native';
import { NormalView } from '../../../components';
import { useColors } from '../../../utils';
import NotificationItem from './NotificationItem';

export const NotificationSettingsScreen = () => {
  const c = useColors();
  const [general, setGeneral] = useState(false);
  const [vibrate, setVibrate] = useState(false);
  const [sound, setSound] = useState(false);
  const [specialOffers, setSpecialOffers] = useState(false);
  const [promoAndDiscounts, setPromoAndDiscounts] = useState(false);
  const [payments, setPayments] = useState(false);
  const [newTips, setNewTips] = useState(false);
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: c.background }}>
      <NormalView headerOptions={{ title: 'Notifications' }}>
        <View style={{ gap: 30, marginTop: 30 }}>
          <NotificationItem
            value={general}
            title="General Notification"
            onPress={() => setGeneral(!general)}
          />
          <NotificationItem value={sound} title="Sound" onPress={() => setSound(!sound)} />
          <NotificationItem value={vibrate} title="Vibrate" onPress={() => setVibrate(!vibrate)} />
          <NotificationItem
            value={specialOffers}
            title="Special Offers"
            onPress={() => setSpecialOffers(!specialOffers)}
          />
          <NotificationItem
            value={promoAndDiscounts}
            title="Promo & Discount"
            onPress={() => setPromoAndDiscounts(!promoAndDiscounts)}
          />
          <NotificationItem
            value={payments}
            title="Payments"
            onPress={() => setPayments(!payments)}
          />
          <NotificationItem
            value={newTips}
            title="New Tips Available"
            onPress={() => setNewTips(!newTips)}
          />
        </View>
      </NormalView>
    </View>
  );
};
