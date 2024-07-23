import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, View, TextStyle } from 'react-native';

import { Sizes } from '../../utils/css/globalSizes';
import Card, { CardOptions } from '../card';
import { Txt, FontWeight } from '../text';

interface Props extends CardOptions {
  title?: string;

  icon?: React.ReactNode | ((props: { color?: string }) => React.ReactNode);
  titleOptions?: {
    titleColor?: string;
    weight?: FontWeight;
    size?: number;
    style?: StyleProp<TextStyle>;
  };
  noHeaderSpace?: boolean;
  headerStyle?: StyleProp<ViewStyle>;
  right?: React.ReactNode;
}

interface SectionProps extends Props {
  component?: React.ReactNode;
  children?: any;
}

type PackProps = SectionProps & {
  component?: React.ReactNode;
  children?: any;
  marginBottom?: number;
  disabled?: boolean;
} & Props;

const Section = ({
  title,
  icon,
  titleOptions,
  children,
  noHeaderSpace,
  component,
  headerStyle,
  right,
  ...rest
}: SectionProps) => {
  return (
    <Card
      component={
        <View style={styles.section}>
          {title || icon ? (
            <View
              style={[
                styles.header,
                noHeaderSpace ? null : { padding: Sizes.smallPadding },
                headerStyle,
              ]}>
              <View>
                {icon ? (
                  <View style={styles.icon}>
                    {typeof icon === 'function'
                      ? icon?.({ color: titleOptions?.titleColor })
                      : icon}
                  </View>
                ) : null}
                {title ? (
                  <Txt
                    weight={titleOptions?.weight || 'bold'}
                    color={titleOptions?.titleColor}
                    size={titleOptions?.size}
                    style={titleOptions?.style}
                    t={title}
                  />
                ) : null}
              </View>
              <View>{right}</View>
            </View>
          ) : null}
          <View>{component || children}</View>
        </View>
      }
      {...rest}
    />
  );
};

export const Pack = ({
  component,
  children,
  marginBottom = 20,
  title,
  titleOptions,
  containerStyle,
  disabled,
  right,
  ...rest
}: PackProps) => {
  return (
    <View style={{ opacity: disabled ? 0.3 : 1 }}>
      {title ? (
        <View
          style={{
            marginBottom: Sizes.padding,
            paddingLeft: 6,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Txt
            weight={titleOptions?.weight || 'bold'}
            color={titleOptions?.titleColor}
            size={titleOptions?.size}
            style={titleOptions?.style}
            t={title}
          />
          {right}
        </View>
      ) : null}
      <Section
        {...rest}
        {...{
          rounded: true,
          containerStyle: { marginBottom, paddingHorizontal: 0 },
          cardStyle: { padding: 0 },
        }}
        component={component || children}
      />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  section: {},
  icon: {
    width: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
