import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Sizes } from '../../utils';
import { Button } from '../button';
import { Txt } from '../text';

export interface LoggerProps {
  title?: string;
  subtitle?: string;
  graphic?: React.ReactNode;
  buttonText?: string;
  isLoading?: boolean;
  onButtonPress?: () => void;
}

export const Logger = ({
  title,
  subtitle,
  graphic,
  isLoading,
  buttonText = 'Press',
  onButtonPress,
}: LoggerProps) => {
  return (
    <View style={styles.container}>
      {graphic ? <View style={styles.graphic}>{graphic}</View> : null}
      <View>
        {title ? <Txt weight="bold" align="center" t={title} /> : null}
        {subtitle ? (
          <Txt style={title ? { paddingTop: 5 } : undefined} light align="center" t={subtitle} />
        ) : null}
      </View>
      {onButtonPress && buttonText ? (
        <View style={styles.buttonContent}>
          <Button variant="secondary" loading={isLoading} onPress={onButtonPress}>
            {buttonText}
          </Button>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    gap: 20,
    // flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 30,
    maxWidth: 250,
    alignSelf: 'center',
  },
  buttonContent: {
    marginTop: Sizes.padding,
  },
  graphic: {
    marginTop: Sizes.mediumPadding,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
