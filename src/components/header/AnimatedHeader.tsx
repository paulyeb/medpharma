import React from 'react';
import { Animated } from 'react-native';

import Header, { HeaderProps } from './Header';
import { AnimatedHeaderCss } from './HeaderCss';
import { HEADER_LARGE_TITLE_SIZE } from '../../utils/css/globalSizes';
import ThemeView from '../View/ThemeView';
import { Txt } from '../text';
import { useColors } from '../../utils';

interface AnimatedHeaderProps extends HeaderProps {
  scrollableView?: (props: {
    callAnimation(): void;
    scrollEventThrottle: number;
    animatedTitle: React.ReactNode;
  }) => React.ReactNode;
  staticTitle?: React.ReactNode;
}

const styles = AnimatedHeaderCss;

const AnimatedHeader = ({
  title,
  headerLeft,
  headerRight,
  staticTitle,
  scrollableView,
}: AnimatedHeaderProps) => {
  const c = useColors();

  const scrollY = new Animated.Value(0);

  const headerInputRange = [1, 95 - 60, 60];

  const titleOpacity = scrollY.interpolate({
    inputRange: headerInputRange,
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  const largeTitleOpacity = scrollY.interpolate({
    inputRange: headerInputRange,
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const callAnimation = Animated.event(
    [
      {
        nativeEvent: { contentOffset: { y: scrollY } },
      },
    ],
    {
      useNativeDriver: false,
    },
  );

  const Scrollable = () => {
    return scrollableView?.({
      animatedTitle: (
        <Animated.View style={[styles.largeTitleContainer, { opacity: largeTitleOpacity }]}>
          <Txt
            allowFontScaling={false}
            color={c.color}
            style={styles.largeTitleText}
            weight="bold"
            size={HEADER_LARGE_TITLE_SIZE}
            t={title}
          />
        </Animated.View>
      ),
      callAnimation,
      scrollEventThrottle: 16,
    });
  };

  return (
    <ThemeView
      component={
        <React.Fragment>
          <Header
            titleOpacity={staticTitle ? 1 : titleOpacity}
            headerLeft={headerLeft}
            headerRight={headerRight}
            title={staticTitle || title}
          />
          {Scrollable?.()}
        </React.Fragment>
      }
    />
  );
};

export default AnimatedHeader;
