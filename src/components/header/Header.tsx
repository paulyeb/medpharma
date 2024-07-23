import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Animated, StyleProp, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderCss } from './HeaderCss';
import { Loading } from '../loadingIndicator';
import { Txt } from '../text';
import { useColors } from '../../utils';
import { IconBackButton, IconClose } from '../icons';
import { IconButton } from '../button';

export type BackButtonType = 'back' | 'close';
export interface HeaderProps {
  title?: any;
  headerLeft?: any;
  headerRight?: any;
  titleOpacity?: any;
  headerOpacity?: any;
  backgroundColor?: string;
  withBackground?: boolean;
  withBorder?: boolean;
  showBackButton?: boolean;
  backButtonType?: BackButtonType;
  headerStyle?: StyleProp<ViewStyle>;
  headerContentStyle?: StyleProp<ViewStyle>;
  noTopSpacing?: boolean;
  component?: any;
  titleColor?: string;
  onBackButtonPress?: () => void;
}

interface HeaderTitleProps {
  title: any;
  titleColor?: string;
  titleStyle?: StyleProp<TextStyle>;
}

export interface HeaderButtonProps {
  component?: (props: { color: string; size: number }) => React.ReactNode;
  onPress?: any;
  disabled?: boolean;
  hasSpace?: boolean;
  leftSpace?: number;
  rightSpace?: number;
  text?: string;
  loading?: boolean;
}

const styles = HeaderCss;

const Header = ({
  title,
  headerLeft,
  headerRight,
  titleOpacity,
  headerOpacity,
  backgroundColor,
  withBackground,
  withBorder,
  showBackButton,
  headerContentStyle,
  titleColor,
  headerStyle,
  onBackButtonPress,
  component,
  backButtonType = 'back',
  noTopSpacing,
}: HeaderProps) => {
  const c = useColors();
  backgroundColor = backgroundColor ? backgroundColor : c.background;

  if (withBackground) {
    backgroundColor = c.tintBackgroundColor;
  }

  if (showBackButton) {
    headerLeft = headerLeft || (
      <BackButton onPress={onBackButtonPress} backButtonType={backButtonType} />
    );
  }
  const { top } = useSafeAreaInsets();

  return (
    <Animated.View
      style={[
        styles.header,
        { opacity: headerOpacity, backgroundColor },
        withBorder ? { borderBottomColor: c.borderColor, ...styles.withBorder } : null,
        headerStyle,
      ]}>
      {noTopSpacing ? null : <View style={{ paddingTop: top }}></View>}
      {component ? (
        component
      ) : (
        <View style={[styles.headerBucket, headerContentStyle]}>
          {headerLeft ? (
            <Animated.View style={[styles.abs, styles.left]}>{headerLeft}</Animated.View>
          ) : null}
          {title ? (
            <Animated.View style={[styles.middle, { opacity: titleOpacity }]}>
              <HeaderTitle titleColor={titleColor} title={title} />
            </Animated.View>
          ) : null}
          {headerRight ? (
            <Animated.View style={[styles.abs, styles.right]}>{headerRight}</Animated.View>
          ) : null}
        </View>
      )}
    </Animated.View>
  );
};

const HeaderTitle = ({ title = null, titleColor, titleStyle }: HeaderTitleProps) => {
  const c = useColors();

  if (typeof title === 'string' || title == null)
    return (
      <Txt
        color={titleColor || c.color}
        t={title}
        numberOfLines={1}
        style={[styles.title, titleStyle]}
      />
    );
  return title;
};

export const HeaderButton = ({
  component,
  text,
  onPress,
  disabled,
  hasSpace = true,
  leftSpace,
  rightSpace,
  loading,
}: HeaderButtonProps) => {
  const c = useColors();
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.headerButtons,
        {
          opacity: disabled ? 0.3 : 1,
          paddingHorizontal: hasSpace ? styles.headerButtons.paddingHorizontal : 0,
          paddingLeft: leftSpace,
          paddingRight: rightSpace,
        },
      ]}>
      {component?.({ color: c.blue, size: 22 })}
      {text ? <Txt size={19} weight="bold" t={text || 'Done'} color={c.blue} /> : null}
      {loading ? <Loading size={12} /> : null}
    </TouchableOpacity>
  );
};

export const BackButton = ({
  backButtonType,
  onPress,
  label,
}: {
  backButtonType?: BackButtonType;
  onPress?: () => void;
  label?: string;
}) => {
  const nav = useNavigation();
  const c = useColors();

  return (
    <HeaderButton
      onPress={onPress ? onPress : () => nav.goBack()}
      component={({ color = c.blue }) => {
        return (
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {backButtonType === 'close' ? (
                <IconButton
                  icon="IconClose"
                  iconSize={13}
                  color={c.black}
                  size={28}
                  backgroundColor={c.grey}
                />
              ) : (
                <IconBackButton color={c.color} size={16} />
              )}
              {label ? <Txt t={label} size={19} weight="bold" color={c.blue} /> : null}
            </View>
          </>
        );
      }}
    />
  );
};

export default Header;
