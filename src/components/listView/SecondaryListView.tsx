import React from 'react';
import { ScrollView, ScrollViewProps, StyleProp, View, ViewStyle } from 'react-native';

import ThemeView from '../View/ThemeView';
import { AnimatedHeader, Header, HeaderProps } from '../header';
import { useColors } from '../../utils';

interface HeaderOptions extends HeaderProps {}

interface Props {
  listType?: 'large-title' | 'classic';
  headerOptions?: HeaderOptions;
  listViewOptions?: ScrollViewProps;
  component?: React.ReactNode;
  scrollViewContainerStyle?: StyleProp<ViewStyle>;
  children?: any;
  hideHeader?: boolean;
  noHeader?: boolean;
}

const SecondaryListView = ({
  listType,
  headerOptions,
  listViewOptions,
  component,
  children,
  scrollViewContainerStyle,
  hideHeader,
  noHeader,
}: Props) => {
  const c = useColors();

  if (listType === 'large-title') {
    return (
      <AnimatedHeader
        headerLeft={headerOptions?.headerLeft}
        headerRight={headerOptions?.headerRight}
        title={headerOptions?.title}
        scrollableView={({ callAnimation, scrollEventThrottle, animatedTitle }) => (
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={scrollEventThrottle}
            onScroll={callAnimation}
            {...listViewOptions}>
            {animatedTitle}
            {component || children}
          </ScrollView>
        )}
      />
    );
  }

  return (
    <ThemeView
      component={
        <React.Fragment>
          {!hideHeader ? (
            <Header
              showBackButton={true}
              headerLeft={headerOptions?.headerLeft}
              headerRight={headerOptions?.headerRight}
              title={headerOptions?.title}
              {...headerOptions}
            />
          ) : (
            <View style={{ height: noHeader ? 0 : 60 }}></View>
          )}
          <View style={[{ flex: 1 }, scrollViewContainerStyle]}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              indicatorStyle={c.scrollColor as any}
              style={{ flex: 1 }}
              {...listViewOptions}>
              {component || children}
            </ScrollView>
          </View>
        </React.Fragment>
      }
    />
  );
};

export default SecondaryListView;
