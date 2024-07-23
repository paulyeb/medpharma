import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Sizes } from '../../utils/css/globalSizes';
import { Txt } from '../text';
import { useColors } from '../../utils';

interface Props {
  text: string;
  status?: 'error' | 'success';
}

const ResultStateInfo = ({ text, status = 'error' }: Props) => {
  const c = useColors();
  const color = status === 'success' ? c.gray : c.danger;

  // if (isEmpty(text)) {
  //   return null;
  // }

  return (
    <View style={[styles.content]}>
      <Txt style={styles.text} color={color} t={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: Sizes.padding,
  },
  text: {
    textAlign: 'center',
  },
});

export default ResultStateInfo;
