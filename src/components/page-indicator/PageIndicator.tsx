import { useColors, Sizes } from '../../utils';
import { View, StyleProp, ViewStyle } from 'react-native';

interface PageIndicatorProps {
  total?: number;
  currentPage: number;
  color?: string;
  borderColor?: string;
  size: number;
  radius?: number;
  style?: StyleProp<ViewStyle>;
}

export const PageIndicator = ({
  total = 5,
  currentPage,
  color,
  borderColor,
  size,
  radius = size,
  style,
}: PageIndicatorProps) => {
  const c = useColors();
  const s = Sizes;

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            {
              marginHorizontal: s.extraSmallPadding,
              backgroundColor: color || index + 1 == currentPage ? c.white : '#ffffff95',
              borderColor: borderColor || c.borderColor,
              height: size || 10,
              borderRadius: radius,
              width: index + 1 == currentPage ? size * 4 : size,
            },
            style,
          ]}
        />
      ))}
    </View>
  );
};
