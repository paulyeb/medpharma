import React, { useMemo } from 'react';
import { ImageBackground, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

import { IconAccountSolid } from '../icons/Icons';
import { useColors } from '../../utils';

export interface AvatarProps {
  uri?: any;
  size?: number;
  rounded?: boolean;
  editState?: boolean;
  backgroundColor?: string;
  icon?: React.ReactNode | ((props: { color?: string; size?: number }) => JSX.Element);
  isLocalSource?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const Avatar = ({
  uri,
  size = 40,
  rounded = true,
  isLocalSource,
  style,
  icon,
  backgroundColor,
  onPress,
}: AvatarProps) => {
  const c = useColors();
  const IconRenderer = () =>
    typeof icon === 'function' ? (
      icon?.({
        color: c.lightColor,
        size: 20,
      })
    ) : icon ? (
      <>{icon}</>
    ) : (
      <IconAccountSolid size={(size && size / 2) || 20} color={c.lightColor} />
    );

  const source = useMemo(() => {
    if (isLocalSource) return uri;
    return {
      uri:
        uri ||
        'https://img.freepik.com/free-photo/enjoying-street-food-fest_23-2151543728.jpg?t=st=1718293948~exp=1718297548~hmac=488f5e4cb0c556447fb9e9fdcd5464fbb1ccde3e5027f1db79139023ef77bfe3&w=2000',
    };
  }, [isLocalSource, uri]);

  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        imageStyle={{ borderRadius: size, width: size, height: size }}
        style={[
          {
            width: size,
            height: size,
            borderRadius: size,
            backgroundColor: backgroundColor || '#00000015',
            alignItems: 'center',
            justifyContent: 'center',
          },
          !rounded ? { borderRadius: 4 } : undefined,
          style,
        ]}
        source={source}
        // children={!uri || !source ? <IconRenderer /> : null}
      />
    </TouchableOpacity>
  );
};
