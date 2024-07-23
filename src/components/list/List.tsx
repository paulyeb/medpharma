import React from 'react';
import { StyleProp, TextStyle, ViewStyle, View, TextProps, TouchableOpacity } from 'react-native';
import { ListItem, ListItemProps } from 'react-native-elements';

import { ListCss } from './ListCss';
import { FONT_SIZE, Sizes } from '../../utils/css/globalSizes';
// import { Avatar, AvatarProps } from '../avatar';
import Txt, { FontWeight } from '../text/Txt';
import { useColors } from '../../utils';

interface TitleProps extends TextProps {
  titleWeight?: FontWeight;
  titleSize?: number;
}

interface SubtitleProps extends TextProps {
  size?: number;
}

export interface ListOptions {
  title?: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
  chevron?: boolean;
  backgroundColor?: string;
  titleStyle?: StyleProp<TextStyle>;
  rounded?: boolean;
  color?: string;
  icon?: React.ReactNode | ((props: { color?: string }) => React.ReactNode);
  iconOptions?: {
    width: number;
  };
  titleOptions?: TitleProps;
  subtitleOptions?: SubtitleProps;
  avatar?: string;
  withAvatar?: boolean;
  // avatarOptions?: AvatarProps;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  divider?: boolean;
  bottomDivider?: boolean;
  contentStyle?: StyleProp<TextStyle>;
  dividerColor?: string;
  noTouchHiglight?: boolean;
  underlayColor?: string;
  helper?: string;
  topDivider?: boolean;
  onAvatarPress?: () => void;
  bordered?: boolean;
  borderColor?: string;
}

export type ListProps = ListItemProps &
  ListOptions & {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };

const styles = ListCss;

const List = ({
  title,
  subtitle,
  left,
  right,
  backgroundColor,
  color,
  avatar,
  // avatarOptions,
  rounded,
  titleOptions,
  chevron,
  titleStyle,
  icon,
  iconOptions,
  containerStyle,
  divider,
  contentStyle,
  withAvatar,
  onPress,
  disabled,
  subtitleOptions,
  underlayColor,
  bottomDivider,
  dividerColor,
  style,
  helper,
  onAvatarPress,
}: ListProps) => {
  const c = useColors();
  color = color ? color : c.color;

  underlayColor = c.transparent;

  if (rounded) {
    backgroundColor = backgroundColor ? backgroundColor : c.tintBackgroundColor;
  }

  if (icon) {
    left = (
      <View style={{ width: iconOptions?.width || 30, marginRight: 5 }}>
        {typeof icon === 'function' ? icon({ color: c.lightColor }) : icon}
      </View>
    );
  }

  // if (avatar || withAvatar) {
  //   left = <Avatar onPress={onAvatarPress} uri={avatar} {...avatarOptions} />;
  // }

  if (divider) {
    dividerColor = dividerColor || c.borderColor;
  }

  const tweight = titleOptions ? titleOptions.titleWeight : 'bold';

  return (
    <>
      <ListItem
        onPress={disabled ? undefined : onPress}
        Component={TouchableOpacity}
        style={[rounded ? styles.rounded : null, disabled ? { opacity: 0.2 } : null, style]}
        containerStyle={[
          rounded ? styles.roundedContainer : null,
          divider ? { ...styles.divider, borderBottomColor: dividerColor } : null,
          { backgroundColor: backgroundColor || c.transparent },
          containerStyle,
        ]}>
        {left}
        <ListItem.Content style={contentStyle}>
          <>
            {title ? (
              <ListItem.Title maxFontSizeMultiplier={1} {...titleOptions}>
                <Txt
                  style={[titleStyle]}
                  size={titleOptions?.titleSize}
                  color={color}
                  weight={tweight}
                  {...titleOptions}>
                  {title}
                </Txt>
              </ListItem.Title>
            ) : null}
            {typeof subtitle === 'string' && subtitle ? (
              <ListItem.Subtitle
                style={{ fontSize: FONT_SIZE, color, paddingTop: title ? 3 : undefined }}
                maxFontSizeMultiplier={1}
                {...subtitleOptions}>
                <Txt light={true} t={subtitle} {...subtitleOptions} />
              </ListItem.Subtitle>
            ) : (
              subtitle
            )}
          </>
        </ListItem.Content>
        {right}
        {chevron ? <ListItem.Chevron /> : undefined}
      </ListItem>
      {bottomDivider && (
        <View style={[styles.bottomDivider, { borderBottomColor: dividerColor }]}></View>
      )}

      {helper ? (
        <Txt style={{ paddingLeft: Sizes.padding }} size={13} light>
          {helper}
        </Txt>
      ) : null}
    </>
  );
};

export const ListAnnex = ({
  title,
  subtitle,
  left,
  right,
  backgroundColor,
  color,
  avatar,
  // avatarOptions,
  rounded,
  titleOptions,
  chevron,
  titleStyle,
  icon,
  iconOptions,
  containerStyle,
  divider,
  contentStyle,
  withAvatar,
  topDivider,
  onPress,
  disabled,
  subtitleOptions,
  underlayColor,
  bottomDivider,
  dividerColor,
  style,
  helper,
  activeOpacity,
  onAvatarPress,
  borderColor,
  bordered,
}: ListProps) => {
  const c = useColors();
  color = color ? color : c.color;

  underlayColor = c.transparent;

  if (rounded) {
    backgroundColor = backgroundColor ? backgroundColor : c.tintBackgroundColor;
  }

  if (icon) {
    left = (
      <View style={{ width: iconOptions?.width || 30, marginRight: 5 }}>
        {typeof icon === 'function' ? icon({ color: c.lightColor }) : icon}
      </View>
    );
  }

  if (bordered) {
    borderColor = borderColor || c.borderColor2;
  }
  // if (avatar || withAvatar) {
  //   left = <Avatar onPress={onAvatarPress} uri={avatar} {...avatarOptions} />;
  // }

  if (divider || topDivider) {
    dividerColor = dividerColor || c.borderColor;
  }

  const tweight = titleOptions ? titleOptions.titleWeight : 'medium';

  return (
    <>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={disabled ? undefined : onPress}
        style={[
          {
            paddingLeft: 15,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: backgroundColor,
          },
          rounded ? styles.rounded : null,
          disabled ? { opacity: 0.2 } : null,
          bordered ? { borderWidth: 1, borderColor } : null,
          style,
        ]}>
        <View>{left}</View>
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: divider ? 1 : 0,
              borderTopWidth: topDivider ? 1 : 0,
              borderBottomColor: dividerColor,
              borderTopColor: dividerColor,
              paddingRight: 15,
              gap: 15,
              paddingVertical: 15,
              flex: 1,
            },
            contentStyle,
          ]}>
          <View style={{ flex: 1 }}>
            {title ? (
              <Txt
                style={[titleStyle]}
                size={titleOptions?.titleSize}
                color={color}
                weight={tweight}
                {...titleOptions}>
                {title}
              </Txt>
            ) : null}
            {typeof subtitle === 'string' && subtitle ? (
              <View
                style={{ fontSize: FONT_SIZE, color, paddingTop: title ? 3 : undefined }}
                maxFontSizeMultiplier={1}
                {...subtitleOptions}>
                <Txt light={true} weight="regular" t={subtitle} {...subtitleOptions} />
              </View>
            ) : (
              subtitle
            )}
          </View>
          {right || chevron ? (
            <View style={{ justifyContent: 'center', flexDirection: 'row', gap: 10 }}>
              {right}
              {chevron ? <ListItem.Chevron /> : null}
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default List;
